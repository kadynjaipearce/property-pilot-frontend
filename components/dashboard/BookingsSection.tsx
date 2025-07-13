import React, { useEffect, useState } from "react";
import {
  RiListUnordered,
  RiCalendarLine,
  RiFilter3Line,
  RiSearchLine,
} from "@remixicon/react";

const BookingsSection = () => {
  const bookings = [
    {
      id: 1,
      guestName: "Sarah Johnson",
      checkIn: "Today",
      checkOut: "Dec 15",
      status: "confirmed",
      nights: 3,
      property: {
        name: "Coastal Paradise Villa",
        image:
          "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
        address: "123 Beach Road, Gold Coast",
        type: "Luxury Villa",
        bedrooms: 4,
        bathrooms: 3,
      },
    },
    {
      id: 2,
      guestName: "Mike Chen",
      checkIn: "Dec 12",
      checkOut: "Dec 16",
      status: "confirmed",
      nights: 4,
      property: {
        name: "Urban Loft Apartment",
        image:
          "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
        address: "456 City Street, Melbourne",
        type: "Modern Apartment",
        bedrooms: 2,
        bathrooms: 2,
      },
    },
    {
      id: 3,
      guestName: "Emma Williams",
      checkIn: "Dec 18",
      checkOut: "Dec 22",
      status: "pending",
      nights: 4,
      property: {
        name: "Mountain Retreat Cabin",
        image:
          "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
        address: "789 Forest Drive, Blue Mountains",
        type: "Cozy Cabin",
        bedrooms: 3,
        bathrooms: 2,
      },
    },
    {
      id: 4,
      guestName: "David Rodriguez",
      checkIn: "Dec 20",
      checkOut: "Dec 25",
      status: "confirmed",
      nights: 5,
      property: {
        name: "Harbor View Penthouse",
        image:
          "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
        address: "321 Harbor Boulevard, Sydney",
        type: "Luxury Penthouse",
        bedrooms: 3,
        bathrooms: 3,
      },
    },
    {
      id: 5,
      guestName: "Lisa Thompson",
      checkIn: "Dec 23",
      checkOut: "Dec 27",
      status: "pending",
      nights: 4,
      property: {
        name: "Riverside Cottage",
        image:
          "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&h=300&fit=crop",
        address: "654 River Lane, Brisbane",
        type: "Charming Cottage",
        bedrooms: 2,
        bathrooms: 1,
      },
    },
    {
      id: 6,
      guestName: "James Wilson",
      checkIn: "Dec 26",
      checkOut: "Jan 2",
      status: "confirmed",
      nights: 7,
      property: {
        name: "Desert Oasis Villa",
        image:
          "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
        address: "987 Desert Road, Alice Springs",
        type: "Unique Villa",
        bedrooms: 4,
        bathrooms: 3,
      },
    },
    {
      id: 7,
      guestName: "Maria Garcia",
      checkIn: "Dec 28",
      checkOut: "Jan 1",
      status: "confirmed",
      nights: 4,
      property: {
        name: "Tropical Beach House",
        image:
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
        address: "147 Ocean Avenue, Cairns",
        type: "Beach House",
        bedrooms: 3,
        bathrooms: 2,
      },
    },
    {
      id: 8,
      guestName: "Robert Brown",
      checkIn: "Jan 3",
      checkOut: "Jan 7",
      status: "pending",
      nights: 4,
      property: {
        name: "Historic Townhouse",
        image:
          "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop",
        address: "258 Heritage Street, Hobart",
        type: "Historic Property",
        bedrooms: 3,
        bathrooms: 2,
      },
    },
  ];

  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    setLastUpdated(new Date().toLocaleDateString());
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Bookings</h1>
          <p className="text-gray-600 mt-1">
            Manage your upcoming reservations and guest check-ins.
          </p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <RiCalendarLine size={16} />
          <span>Last updated: {lastUpdated}</span>
        </div>
      </div>

      <div className="bg-primary/10 rounded-lg p-6 border-2 border-primary/20">
        <h4 className="font-semibold text-primary mb-2">
          📅 Booking Management
        </h4>
        <p className="text-secondary">
          Manage your reservations, check-ins, and guest communications
          efficiently.
        </p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">
              Upcoming Bookings
            </h3>
            <div className="flex items-center space-x-3">
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-primary/20 border-2 border-primary text-primary rounded-md text-sm font-medium hover:bg-primary/40 focus:ring-2 focus:ring-primary focus:outline-none transition-colors cursor-pointer flex items-center space-x-1">
                  <RiListUnordered size={16} />
                  <span>List</span>
                </button>
                <button className="px-3 py-1 border-2 border-primary text-primary hover:bg-primary/10 rounded-md text-sm font-medium focus:ring-2 focus:ring-primary focus:outline-none transition-colors cursor-pointer flex items-center space-x-1">
                  <RiCalendarLine size={16} />
                  <span>Calendar</span>
                </button>
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 border-2 border-primary text-primary hover:bg-primary/10 rounded-md text-sm font-medium focus:ring-2 focus:ring-primary focus:outline-none transition-colors cursor-pointer flex items-center space-x-1">
                  <RiSearchLine size={16} />
                  <span>Search</span>
                </button>
                <button className="px-3 py-1 border-2 border-primary text-primary hover:bg-primary/10 rounded-md text-sm font-medium focus:ring-2 focus:ring-primary focus:outline-none transition-colors cursor-pointer flex items-center space-x-1">
                  <RiFilter3Line size={16} />
                  <span>Filter</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="p-6 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src={booking.property.image}
                    alt={booking.property.name}
                    className="w-20 h-16 object-cover rounded-lg"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 text-lg">
                        {booking.property.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {booking.property.address}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <span>{booking.property.type}</span>
                        <span>•</span>
                        <span>{booking.property.bedrooms} beds</span>
                        <span>•</span>
                        <span>{booking.property.bathrooms} baths</span>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-gray-600 font-medium text-sm">
                            {booking.guestName
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">
                            {booking.guestName}
                          </p>
                          <p className="text-sm text-gray-600">
                            {booking.nights} nights
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end space-y-3">
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-medium w-24 text-center ${
                          booking.status === "confirmed"
                            ? "bg-[#6ee7b7]/20 text-[#6ee7b7] border border-[#6ee7b7]/30"
                            : "bg-[#ffd6a5]/20 text-[#ffd6a5] border border-[#ffd6a5]/30"
                        }`}
                      >
                        {booking.status}
                      </div>

                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-800">
                          Check-in: {booking.checkIn}
                        </p>
                        <p className="text-sm text-gray-600">
                          Check-out: {booking.checkOut}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingsSection;
