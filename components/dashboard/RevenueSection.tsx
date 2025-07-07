const RevenueSection = () => {
  const monthlyData = [
    { month: "Oct", earnings: 2400 },
    { month: "Nov", earnings: 3200 },
    { month: "Dec", earnings: 4100 },
  ];

  const upcomingBookings = [
    { date: "Dec 10-13", amount: 450 },
    { date: "Dec 15-18", amount: 380 },
    { date: "Dec 20-24", amount: 620 },
    { date: "Dec 28-31", amount: 550 },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white">
          <h3 className="text-sm font-medium opacity-90">This Month</h3>
          <p className="text-3xl font-bold">$4,100</p>
          <p className="text-sm opacity-90 mt-1">+28% from last month</p>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-sm font-medium text-gray-600">
            Avg. Nightly Rate
          </h3>
          <p className="text-2xl font-bold text-gray-800">$145</p>
          <p className="text-sm text-green-600 mt-1">+5% vs last month</p>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-sm font-medium text-gray-600">Occupancy Rate</h3>
          <p className="text-2xl font-bold text-gray-800">78%</p>
          <p className="text-sm text-gray-500 mt-1">Dec 2024</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">
            Monthly Earnings
          </h3>
        </div>

        <div className="p-6">
          <div className="flex items-end space-x-4 h-32">
            {monthlyData.map((data, index) => (
              <div
                key={data.month}
                className="flex-1 flex flex-col items-center"
              >
                <div
                  className="bg-purple-200 rounded-t w-full flex items-end justify-center pb-2"
                  style={{ height: `${(data.earnings / 4500) * 100}%` }}
                >
                  <span className="text-xs font-medium text-purple-800">
                    ${data.earnings}
                  </span>
                </div>
                <span className="text-sm text-gray-600 mt-2">{data.month}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">
            Upcoming Revenue
          </h3>
          <p className="text-gray-600 mt-1">Your confirmed bookings</p>
        </div>

        <div className="divide-y divide-gray-100">
          {upcomingBookings.map((booking, index) => (
            <div key={index} className="p-4 flex items-center justify-between">
              <span className="text-gray-700">{booking.date}</span>
              <span className="font-semibold text-gray-800">
                ${booking.amount}
              </span>
            </div>
          ))}
        </div>

        <div className="p-4 bg-green-50 border-t border-green-200">
          <div className="flex items-center justify-between">
            <span className="font-medium text-green-800">Total Expected</span>
            <span className="font-bold text-green-800">$2,000</span>
          </div>
        </div>
      </div>

      <div className="bg-[#a594f9]/10 rounded-lg p-6 border-2 border-[#a594f9]/20">
        <h4 className="font-semibold text-gray-800 mb-2">
          🔥 Peak Season Alert
        </h4>
        <p className="text-gray-700">
          December is looking hot! Consider raising your rates by 15-20% for New
          Year's week.
        </p>
      </div>
    </div>
  );
};

export default RevenueSection;
