import { useState } from "react";
import {
  RiAddLine,
  RiLoader4Line,
  RiErrorWarningLine,
  RiHome6Line,
} from "@remixicon/react";
import Image from "next/image";

export interface PropertyData {
  property_id: string;
  name: string;
  image: string;
  guests: number;
  beds: number;
  baths: number;
  rating: number | null;
  review_count: number | null;
  platform: "airbnb";
  extracted_at: string;
}

interface AddPropertyInputProps {
  onAdd: (property: PropertyData) => void;
}

const AddPropertyInput = ({ onAdd }: AddPropertyInputProps) => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [property, setProperty] = useState<PropertyData | null>(null);
  const [success, setSuccess] = useState(false);

  const handleExtract = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setProperty(null);
    if (!url.match(/airbnb\.com\.(au|[a-z]{2})\/rooms\/(\d+)/i)) {
      setError("Please enter a valid Airbnb property URL.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/parse-airbnb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      if (!res.ok)
        throw new Error(data.error || "Failed to extract property data.");
      setProperty(data);
    } catch (err: any) {
      setError(err.message || "Failed to extract property data.");
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    if (property) {
      onAdd(property);
      setSuccess(true);
      setUrl("");
      setProperty(null);
      setTimeout(() => setSuccess(false), 2000);
    }
  };

  return (
    <div className="bg-white border-2 border-[#a594f9]/20 rounded-xl p-6 mb-8 shadow-lg w-full">
      <form
        onSubmit={handleExtract}
        className="flex flex-col md:flex-row gap-4 items-start md:items-end w-full"
      >
        <div className="flex-1 w-full">
          <label
            htmlFor="airbnb-url"
            className="block text-base font-semibold text-secondary mb-2"
          >
            Airbnb Property URL
          </label>
          <input
            id="airbnb-url"
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste Airbnb property URL (e.g. https://www.airbnb.com.au/rooms/1304134093228708914)"
            className="w-full px-4 py-3 border-2 border-[#a594f9] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 text-secondary bg-white text-base shadow-sm"
            required
            disabled={loading}
            autoFocus
          />
        </div>
        <button
          type="submit"
          className="flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-[#a594f9] text-white bg-[#a594f9] font-semibold hover:bg-[#a594f9]/90 transition-colors cursor-pointer min-w-[140px] justify-center mt-2 md:mt-0 text-base shadow"
          disabled={loading}
        >
          {loading ? (
            <RiLoader4Line className="animate-spin" size={22} />
          ) : (
            <RiAddLine size={22} />
          )}
          Extract
        </button>
      </form>
      {error && (
        <div className="mt-4 flex items-center gap-2 text-[#e11d48] bg-[#fef2f2] border border-[#e11d48]/20 rounded-lg p-3 text-base font-medium shadow-sm w-full">
          <RiErrorWarningLine size={20} /> {error}
        </div>
      )}
      {property && (
        <div className="mt-6 p-5 border-2 border-[#a594f9]/30 rounded-xl flex flex-col md:flex-row gap-6 items-center bg-[#a594f9]/5 shadow-md w-full">
          {property.image ? (
            <Image
              src={property.image}
              alt={property.name}
              width={160}
              height={128}
              className="w-40 h-32 object-cover rounded-lg border border-[#a594f9]/20 shadow"
              unoptimized
            />
          ) : (
            <div className="w-40 h-32 flex items-center justify-center bg-gray-100 rounded-lg border border-[#a594f9]/20 shadow text-gray-400">
              <RiHome6Line size={40} />
            </div>
          )}
          <div className="flex-1 w-full">
            <div className="font-bold text-secondary text-xl mb-1">
              {property.name}
            </div>
            <div className="text-sm text-[#a594f9] mb-1">
              ID: {property.property_id}
            </div>
            <div className="text-base text-secondary mb-1">
              {property.guests && property.guests > 0 && (
                <span>{property.guests} guests</span>
              )}
              {property.guests &&
                property.guests > 0 &&
                ((property.beds && property.beds > 0) ||
                  (property.baths && property.baths > 0)) && <span> · </span>}
              {property.beds && property.beds > 0 && (
                <span>{property.beds} beds</span>
              )}
              {property.beds &&
                property.beds > 0 &&
                property.baths &&
                property.baths > 0 && <span> · </span>}
              {property.baths && property.baths > 0 && (
                <span>{property.baths} baths</span>
              )}
            </div>
            {property.reviews && (
              <div className="text-sm text-secondary mb-1">
                {property.reviews}
              </div>
            )}
            <div className="text-xs text-[#a594f9]">
              Extracted: {new Date(property.extracted_at).toLocaleString()}
            </div>
          </div>
          <button
            className="px-6 py-3 rounded-lg border-2 border-[#a594f9] text-white bg-[#a594f9] font-semibold hover:bg-[#a594f9]/90 transition-colors cursor-pointer text-base shadow"
            onClick={handleAdd}
          >
            Add Property
          </button>
        </div>
      )}
      {success && (
        <div className="mt-4 text-[#6ee7b7] bg-[#f0fdfa] border border-[#6ee7b7]/20 rounded-lg p-3 text-base font-semibold shadow-sm w-full">
          Property added!
        </div>
      )}
    </div>
  );
};

export default AddPropertyInput;
