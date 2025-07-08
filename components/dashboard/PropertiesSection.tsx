import { useState } from "react";
import AddPropertyInput, { PropertyData } from "./AddPropertyInput";
import { RiAddLine } from "@remixicon/react";

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

  const handleAddProperty = (property: PropertyData) => {
    setProperties([
      {
        id: Date.now(),
        name: property.name,
        image: property.image,
        address: "(Imported from Airbnb)",
        type: "Airbnb Listing",
        bedrooms: property.beds,
        bathrooms: property.baths,
        guest: null,
        airbnbId: property.property_id,
        reviews: property.reviews,
        platform: property.platform,
        extracted_at: property.extracted_at,
      },
      ...properties,
    ]);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-[#22223b]">Properties</h2>
        <button className="flex items-center gap-2 px-4 py-2 rounded-md border-2 border-[#a594f9] text-[#a594f9] bg-white font-medium hover:bg-[#a594f9]/10 transition-colors cursor-pointer">
          <RiAddLine size={20} /> Add Property
        </button>
      </div>
      <AddPropertyInput onAdd={handleAddProperty} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-lg border-2 border-[#a594f9]/20 shadow-sm p-4 flex flex-col"
          >
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-[#22223b] mb-1">
                {property.name}
              </h3>
              <p className="text-sm text-[#a594f9] mb-1">{property.type}</p>
              <p className="text-sm text-[#22223b] mb-1">{property.address}</p>
              <div className="flex items-center gap-4 text-xs text-[#22223b] mb-2">
                <span>{property.bedrooms} beds</span>
                <span>·</span>
                <span>{property.bathrooms} baths</span>
              </div>
              {property.guest ? (
                <div className="mt-2 p-2 rounded bg-[#a594f9]/10 border border-[#a594f9]/20 text-[#a594f9] text-xs">
                  Guest:{" "}
                  <span className="font-medium">{property.guest.name}</span>{" "}
                  until{" "}
                  <span className="font-medium">{property.guest.checkOut}</span>
                </div>
              ) : (
                <div className="mt-2 p-2 rounded bg-[#6ee7b7]/10 border border-[#6ee7b7]/20 text-[#6ee7b7] text-xs">
                  No current guests
                </div>
              )}
              {property.reviews && (
                <div className="mt-2 text-xs text-[#a594f9]">
                  {property.reviews}
                </div>
              )}
            </div>
            <button className="mt-4 px-4 py-2 rounded-md border-2 border-[#a594f9] text-[#a594f9] bg-white font-medium hover:bg-[#a594f9]/10 transition-colors cursor-pointer self-end">
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertiesSection;
