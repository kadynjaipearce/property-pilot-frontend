import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

interface VideoRow {
  id: number;
  created_at: string;
  source: string;
}

export async function GET() {
  try {
    const { data, error } = await supabase.from("video").select("*");

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to get video config" },
        { status: 500 }
      );
    }

    console.log(data);

    if (!data || data.length === 0) {
      return NextResponse.json(
        { error: "No video configuration found" },
        { status: 404 }
      );
    }

    const videoData = data[0] as VideoRow;
    return NextResponse.json({ youtube_video_id: videoData.source });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
