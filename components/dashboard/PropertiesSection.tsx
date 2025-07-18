import { useState, useRef } from "react";
// import { PropertyData } from "./AddPropertyInput";
import { RiAddLine, RiStarFill, RiEdit2Line } from "@remixicon/react";
import Image from "next/image";

const initialProperties = [
  {
    id: 1,
    name: "Coastal Paradise Villa",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
    address: "123 Beach Road, Gold Coast",
    type: "Luxury Villa",
    bedrooms: 4,
    bathrooms: 3,
    guest: { name: "Sarah Johnson", checkOut: "Dec 15" },
    rating: 4.9,
    review_count: 210,
  },
  {
    id: 2,
    name: "Urban Loft Apartment",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
    address: "456 City Street, Melbourne",
    type: "Modern Apartment",
    bedrooms: 2,
    bathrooms: 2,
    guest: { name: "Mike Chen", checkOut: "Dec 16" },
  },
  {
    id: 3,
    name: "Mountain Retreat Cabin",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
    address: "789 Forest Drive, Blue Mountains",
    type: "Cozy Cabin",
    bedrooms: 3,
    bathrooms: 2,
    guest: { name: "Emma Williams", checkOut: "Dec 22" },
  },
  {
    id: 4,
    name: "Harbor View Penthouse",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
    address: "321 Harbor Boulevard, Sydney",
    type: "Luxury Penthouse",
    bedrooms: 3,
    bathrooms: 3,
    guest: { name: "David Rodriguez", checkOut: "Dec 25" },
  },
  {
    id: 5,
    name: "Riverside Cottage",
    image:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&h=300&fit=crop",
    address: "654 River Lane, Brisbane",
    type: "Charming Cottage",
    bedrooms: 2,
    bathrooms: 1,
    guest: { name: "Lisa Thompson", checkOut: "Dec 27" },
  },
  {
    id: 6,
    name: "Desert Oasis Villa",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
    address: "987 Desert Road, Alice Springs",
    type: "Unique Villa",
    bedrooms: 4,
    bathrooms: 3,
    guest: { name: "James Wilson", checkOut: "Jan 2" },
  },
  {
    id: 7,
    name: "Tropical Beach House",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
    address: "147 Ocean Avenue, Cairns",
    type: "Beach House",
    bedrooms: 3,
    bathrooms: 2,
    guest: { name: "Maria Garcia", checkOut: "Jan 1" },
  },
  {
    id: 8,
    name: "Historic Townhouse",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop",
    address: "258 Heritage Street, Hobart",
    type: "Historic Property",
    bedrooms: 3,
    bathrooms: 2,
    guest: { name: "Robert Brown", checkOut: "Jan 7" },
  },
];

const PropertiesSection = () => {
  const [properties, setProperties] = useState<any[]>(initialProperties);
  const [showAdd, setShowAdd] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleAddProperty = (property: any) => {
    setProperties([
      {
        id: Date.now(),
        name: property.name,
        image: property.image,
        address: "",
        type: "Airbnb Listing",
        bedrooms: property.beds,
        bathrooms: property.baths,
        guest: null,
        airbnbId: property.property_id,
        rating: property.rating,
        review_count: property.review_count,
        platform: property.platform,
        extracted_at: property.extracted_at,
      },
      ...properties,
    ]);
    setShowAdd(false);
    setInputValue("");
    setLoading(false);
    setError(null);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  const isValidAirbnbUrl = (url: string) =>
    /https?:\/\/(www\.)?airbnb\.com(\.[a-z]{2,})?\/rooms\//i.test(url);

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setError(null);
    if (isValidAirbnbUrl(value)) {
      setLoading(true);
      try {
        const res = await fetch("/api/parse-airbnb", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: value }),
        });
        const data = await res.json();
        if (!res.ok)
          throw new Error(data.error || "Failed to extract property data.");
        handleAddProperty(data);
      } catch (err: any) {
        setError(err.message || "Failed to extract property data.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Properties</h1>
          <p className="text-gray-600 mt-1">
            Manage your property portfolio and add new listings.
          </p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <RiAddLine size={16} />
          <span>Last updated: {new Date().toLocaleDateString()}</span>
        </div>
      </div>

      {success && (
        <div className="bg-[#6ee7b7]/20 border border-[#6ee7b7] text-[#065f46] px-4 py-3 rounded-lg font-semibold flex items-center gap-2 animate-fadeIn">
          <span className="inline-block w-2 h-2 rounded-full bg-[#6ee7b7] mr-2"></span>
          Property added successfully!
        </div>
      )}
      <div className="bg-white rounded-lga border border-gray-200">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">
            Your Properties
          </h3>
          <div className="relative flex justify-end">
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-md border-2 border-primary text-primary bg-white font-medium hover:bg-primary/10 transition-colors cursor-pointer`}
              onClick={() => setShowAdd((v) => !v)}
              type="button"
            >
              <RiAddLine size={20} /> Add Property
            </button>
            {showAdd && (
              <div
                className="absolute right-0 mt-14 w-[340px] bg-[#f8f8ff] border border-primary/40 rounded-xl shadow-xl z-10 p-5 flex flex-col gap-2 animate-fadeIn"
                style={{ minWidth: 280 }}
              >
                <label
                  htmlFor="airbnb-url"
                  className="block text-xs font-semibold text-secondary mb-1"
                >
                  Airbnb Property URL
                </label>
                <input
                  id="airbnb-url"
                  ref={inputRef}
                  type="url"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="e.g. https://airbnb.com/rooms/12345678"
                  className="w-full px-3 py-2 border border-primary/40 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 text-secondary bg-white text-sm shadow-sm"
                  disabled={loading}
                  autoFocus
                />
                {loading && (
                  <div className="text-xs text-primary mt-1">
                    Extracting property...
                  </div>
                )}
                {error && (
                  <div className="text-xs text-[#e11d48] mt-1">{error}</div>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="divide-y divide-gray-100">
          {properties.map((property: any) => (
            <div
              key={property.id}
              className="p-6 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-24 h-20 rounded-lg overflow-hidden bg-[#f4f4fa] flex items-center justify-center">
                  {property.image ? (
                    <Image
                      src={property.image}
                      alt={property.name}
                      width={96}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-2xl text-primary">
                      🏠
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-base font-bold text-secondary truncate flex-1">
                      {property.name}
                    </h3>
                    {typeof property.rating === "number" &&
                      property.rating > 0 && (
                        <span className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg min-w-[90px] justify-center text-lg">
                          <RiStarFill size={24} className="text-primary p-1" />
                          <span className="text-primary font-bold text-lg leading-none">
                            {property.rating.toFixed(1)}
                          </span>
                          {typeof property.review_count === "number" &&
                            property.review_count > 0 && (
                              <span className="text-primary text-base font-medium ml-1">
                                ({property.review_count})
                              </span>
                            )}
                        </span>
                      )}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-secondary mb-1">
                    <span className="text-primary font-medium">
                      {property.type}
                    </span>
                    {property.address && <span>· {property.address}</span>}
                    {property.bedrooms > 0 && (
                      <span>· {property.bedrooms} beds</span>
                    )}
                    {property.bathrooms > 0 && (
                      <span>· {property.bathrooms} baths</span>
                    )}
                  </div>
                </div>
                <div className="flex flex-col justify-center items-end">
                  <button className="px-4 py-2 rounded-md border-2 border-primary text-primary bg-white font-medium hover:bg-primary/10 transition-colors cursor-pointer flex items-center gap-2">
                    <RiEdit2Line size={20} /> Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertiesSection;
