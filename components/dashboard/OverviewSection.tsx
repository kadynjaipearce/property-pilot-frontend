import {
  RiHome6Line,
  RiCalendarLine,
  RiMessage2Line,
  RiMoneyDollarCircleLine,
  RiStarLine,
  RiArrowRightLine,
  RiTimeLine,
  RiMapPinLine,
} from "@remixicon/react";

const OverviewSection = () => {
  // Mock data for demonstration
  const stats = {
    totalProperties: 12,
    activeBookings: 8,
    totalRevenue: 28450,
    averageRating: 4.8,
    unreadMessages: 3,
    occupancyRate: 78,
  };

  const recentBookings = [
    {
      id: 1,
      property: "Cozy Downtown Apartment",
      guest: "Sarah Johnson",
      checkIn: "2024-01-15",
      checkOut: "2024-01-18",
      amount: 450,
      status: "confirmed",
    },
    {
      id: 2,
      property: "Beachfront Villa",
      guest: "Mike Chen",
      checkIn: "2024-01-20",
      checkOut: "2024-01-25",
      amount: 1200,
      status: "pending",
    },
    {
      id: 3,
      property: "Mountain Cabin",
      guest: "Emily Davis",
      checkIn: "2024-01-22",
      checkOut: "2024-01-24",
      amount: 320,
      status: "confirmed",
    },
  ];

  const recentReviews = [
    {
      id: 1,
      property: "Cozy Downtown Apartment",
      guest: "John Smith",
      rating: 5,
      comment: "Perfect location and very clean!",
      date: "2024-01-10",
    },
    {
      id: 2,
      property: "Beachfront Villa",
      guest: "Lisa Wang",
      rating: 4,
      comment: "Beautiful view, great amenities.",
      date: "2024-01-08",
    },
  ];

  const quickActions = [
    {
      title: "Add New Property",
      description: "Add a new property to your portfolio",
      icon: RiHome6Line,
      color: "bg-blue-500",
      link: "properties",
    },
    {
      title: "View Bookings",
      description: "Check your current and upcoming bookings",
      icon: RiCalendarLine,
      color: "bg-green-500",
      link: "bookings",
    },
    {
      title: "Check Messages",
      description: "Respond to guest inquiries",
      icon: RiMessage2Line,
      color: "bg-purple-500",
      link: "messaging",
    },
    {
      title: "Revenue Report",
      description: "View your earnings and analytics",
      icon: RiMoneyDollarCircleLine,
      color: "bg-yellow-500",
      link: "revenue",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Dashboard Overview
          </h1>
          <p className="text-gray-600 mt-1">
            Welcome back! Here&apos;s what&apos;s happening with your
            properties.
          </p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <RiTimeLine size={16} />
          <span>Last updated: {new Date().toLocaleDateString()}</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <div className="bg-primary/10 rounded-lg p-6 border-2 border-primary/20">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">
                Properties
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.totalProperties}
              </p>
            </div>
            <div className="p-2 bg-primary/20 rounded-lg ml-4 flex items-center justify-center">
              <RiHome6Line size={24} className="text-primary" />
            </div>
          </div>
        </div>

        <div className="bg-primary/10 rounded-lg p-6 border-2 border-primary/20">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">
                Active Bookings
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.activeBookings}
              </p>
            </div>
            <div className="p-2 bg-primary/20 rounded-lg ml-4 flex items-center justify-center">
              <RiCalendarLine size={24} className="text-primary" />
            </div>
          </div>
        </div>

        <div className="bg-primary/10 rounded-lg p-6 border-2 border-primary/20">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Revenue</p>
              <p className="text-2xl font-bold text-gray-900">
                ${stats.totalRevenue.toLocaleString()}
              </p>
              <p className="text-sm text-green-600 font-medium">
                +12.5% from last month
              </p>
            </div>
            <div className="p-2 bg-primary/20 rounded-lg ml-4 flex items-center justify-center">
              <RiMoneyDollarCircleLine size={24} className="text-primary" />
            </div>
          </div>
        </div>

        <div className="bg-primary/10 rounded-lg p-6 border-2 border-primary/20">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Rating</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.averageRating}
              </p>
              <p className="text-sm text-green-600 font-medium">
                +0.2 from last month
              </p>
            </div>
            <div className="p-2 bg-primary/20 rounded-lg ml-4 flex items-center justify-center">
              <RiStarLine size={24} className="text-primary" />
            </div>
          </div>
        </div>

        <div className="bg-primary/10 rounded-lg p-6 border-2 border-primary/20">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Messages</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.unreadMessages}
              </p>
              <p className="text-sm text-orange-600 font-medium">
                +2 from yesterday
              </p>
            </div>
            <div className="p-2 bg-primary/20 rounded-lg ml-4 flex items-center justify-center">
              <RiMessage2Line size={24} className="text-primary" />
            </div>
          </div>
        </div>

        <div className="bg-primary/10 rounded-lg p-6 border-2 border-primary/20">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">
                Occupancy
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.occupancyRate}%
              </p>
              <p className="text-sm text-red-600 font-medium">
                -3.2% from last month
              </p>
            </div>
            <div className="p-2 bg-primary/20 rounded-lg ml-4 flex items-center justify-center">
              <RiTimeLine size={24} className="text-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors cursor-pointer group"
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`p-2 rounded-lg ${action.color} text-white flex-shrink-0`}
                >
                  <action.icon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-sm text-gray-600">{action.description}</p>
                </div>
                <RiArrowRightLine
                  size={16}
                  className="text-gray-400 group-hover:text-primary transition-colors flex-shrink-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Bookings */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              Recent Bookings
            </h2>
            <button className="text-primary hover:text-primary/80 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentBookings.map((booking) => (
              <div
                key={booking.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <RiCalendarLine size={16} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      {booking.property}
                    </p>
                    <p className="text-sm text-gray-600">{booking.guest}</p>
                    <p className="text-xs text-gray-500">
                      {booking.checkIn} - {booking.checkOut}
                    </p>
                  </div>
                </div>
                <div className="text-right flex flex-col items-end space-y-2">
                  <p className="font-medium text-gray-900">${booking.amount}</p>
                  <span
                    className={`inline-block px-3 py-1.5 text-xs rounded-full font-medium min-w-[80px] text-center ${
                      booking.status === "confirmed"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {booking.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Reviews */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              Recent Reviews
            </h2>
            <button className="text-primary hover:text-primary/80 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentReviews.map((review) => (
              <div key={review.id} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="p-1 bg-purple-100 rounded">
                      <RiStarLine size={14} className="text-purple-600" />
                    </div>
                    <span className="font-medium text-gray-900">
                      {review.property}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <RiStarLine
                        key={i}
                        size={14}
                        className={
                          i < review.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-1">{review.comment}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{review.guest}</span>
                  <span>{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Property Map Preview */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Property Locations
          </h2>
          <button className="text-[#a594f9] hover:text-[#8b7cf6] text-sm font-medium">
            View Map
          </button>
        </div>
        <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
          <div className="text-center">
            <RiMapPinLine size={48} className="text-gray-400 mx-auto mb-2" />
            <p className="text-gray-600">Interactive property map</p>
            <p className="text-sm text-gray-500">
              Click to view detailed locations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
