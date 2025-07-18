import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import * as cheerio from "cheerio";
import Script from "next/script";

export const runtime = "nodejs";

const AirbnbUrlSchema = z.object({
  url: z
    .string()
    .url()
    .regex(
      /airbnb\.com\.(au|[a-z]{2})\/rooms\/(\d+)/i,
      "Invalid Airbnb property URL"
    ),
});

export interface PropertyData {
  property_id: string;
  name: string;
  image: string;
  guests: number;
  beds: number;
  baths: number;
  rating: number | null; // e.g. 4.8
  review_count: number | null; // e.g. 127
  platform: "airbnb";
  extracted_at: string; // ISO date
}

async function fetchHtml(url: string): Promise<string> {
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      "Accept-Language": "en-US,en;q=0.9",
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
    },
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Failed to fetch property page: ${res.status}`);
  return await res.text();
}

async function extractWithOpenAI(
  content: string,
  url: string
): Promise<PropertyData> {
  const propertyIdMatch = url.match(/rooms\/(\d+)/);
  const property_id = propertyIdMatch ? propertyIdMatch[1] : "";
  const prompt = `Extract the following fields from this Airbnb HTML/meta content and return as JSON.\n\nFields:\n- property_id (from URL if not in content)\n- name (property title)\n- image (main property image URL)\n- guests (number)\n- beds (number)\n- baths (number)\n- rating (number, e.g. 4.8, not a string or with stars)\n- review_count (number, e.g. 127)\n- platform ('airbnb')\n- extracted_at (current ISO date)\n\nReturn only the JSON object, no explanation.\n\nContent:\n${content}`;

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error("Missing OPENAI_API_KEY in environment");

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant that extracts structured data from HTML.",
        },
        { role: "user", content: prompt },
      ],
      max_tokens: 400,
      temperature: 0,
    }),
  });
  if (!res.ok) throw new Error("OpenAI API error: " + (await res.text()));
  const data = await res.json();
  const jsonText = data.choices[0].message.content.trim();
  return JSON.parse(jsonText);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parse = AirbnbUrlSchema.safeParse(body);
    if (!parse.success) {
      return NextResponse.json(
        { error: parse.error.errors[0].message },
        { status: 400 }
      );
    }
    const { url } = parse.data;
    // Fetch HTML
    let html = "";
    try {
      html = await fetchHtml(url);
    } catch (err: unknown) {
      return NextResponse.json(
        { error: "Failed to fetch property page: " + (err as Error).message },
        { status: 500 }
      );
    }
    // Trim to meta tags and first 500 chars of body
    const $ = cheerio.load(html);
    let metaTags = "";
    $("meta").each((_, el) => {
      metaTags += $.html(el) + "\n";
    });
    const bodyText = $("body").text().slice(0, 500);
    const trimmedContent = metaTags + "\n" + bodyText;

    // Use OpenAI to extract property data
    let propertyData: PropertyData;
    try {
      propertyData = await extractWithOpenAI(trimmedContent, url);
    } catch (err: unknown) {
      return NextResponse.json(
        { error: "OpenAI extraction failed: " + (err as Error).message },
        { status: 500 }
      );
    }
    return NextResponse.json(propertyData);
  } catch (err: unknown) {
    return NextResponse.json(
      { error: (err as Error).message || "Internal server error" },
      { status: 500 }
    );
  }
}
