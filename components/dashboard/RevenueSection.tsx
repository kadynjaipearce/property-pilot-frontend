import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const RevenueSection = () => {
  const monthlyData = [
    { month: "Dec '24", earnings: 4100, expenses: 1800 },
    { month: "Jan '25", earnings: 3900, expenses: 1700 },
    { month: "Feb '25", earnings: 3500, expenses: 1600 },
    { month: "Mar '25", earnings: 3700, expenses: 1650 },
    { month: "Apr '25", earnings: 4000, expenses: 1750 },
    { month: "May '25", earnings: 4200, expenses: 1850 },
    { month: "Jun '25", earnings: 4400, expenses: 1900 },
    { month: "Jul '25", earnings: 4600, expenses: 2000 },
  ];

  // Use the last month as 'this month'
  const thisMonth = monthlyData[monthlyData.length - 1];

  // Use the last 4 months for upcoming bookings
  const upcomingBookings = monthlyData.slice(-4).map((data) => ({
    date: data.month,
    amount: data.earnings,
  }));

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#6ee7b7]/20 border-2 border-[#6ee7b7] rounded-lg p-6 text-white">
          <h3 className="text-sm font-medium opacity-90 text-[#22223b]">
            This Month
          </h3>
          <p className="text-3xl font-bold text-[#6ee7b7]">
            ${thisMonth.earnings.toLocaleString()}
          </p>
          <p className="text-sm opacity-90 mt-1 text-[#6ee7b7]">
            +
            {Math.round(
              ((thisMonth.earnings -
                monthlyData[monthlyData.length - 2].earnings) /
                monthlyData[monthlyData.length - 2].earnings) *
                100
            )}
            % from last month
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-[#a594f9]/20">
          <h3 className="text-sm font-medium text-[#22223b]">
            Avg. Nightly Rate
          </h3>
          <p className="text-2xl font-bold text-[#22223b]">$145</p>
          <p className="text-sm text-[#a594f9] mt-1">+5% vs last month</p>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-[#a594f9]/20">
          <h3 className="text-sm font-medium text-[#22223b]">Occupancy Rate</h3>
          <p className="text-2xl font-bold text-[#22223b]">78%</p>
          <p className="text-sm text-[#a594f9] mt-1">Dec '24 - Jul '25</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border-2 border-[#a594f9]/20">
        <div className="p-6 border-b border-[#a594f9]/20">
          <h3 className="text-lg font-semibold text-[#22223b]">
            Monthly Earnings vs Expenses
          </h3>
        </div>
        <div className="p-6">
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={monthlyData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#a594f9" />
                <XAxis
                  dataKey="month"
                  tick={{ fill: "#22223b", fontSize: 14 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "#22223b", fontSize: 14 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    background: "#fff",
                    border: "1px solid #a594f9",
                    borderRadius: 8,
                    color: "#22223b",
                  }}
                  cursor={{ fill: "#a594f9", fillOpacity: 0.08 }}
                  formatter={(value, name) => [
                    name === "Earnings" ? (
                      <span style={{ color: "#22223b", fontWeight: 600 }}>
                        ${value.toLocaleString()}
                      </span>
                    ) : (
                      <span style={{ color: "#22223b" }}>
                        ${value.toLocaleString()}
                      </span>
                    ),
                    name,
                  ]}
                />
                <Legend
                  wrapperStyle={{ fontSize: 14 }}
                  formatter={(value) =>
                    value === "Earnings" ? (
                      <span style={{ color: "#a594f9", fontWeight: 600 }}>
                        {value}
                      </span>
                    ) : (
                      <span style={{ color: "#22223b" }}>{value}</span>
                    )
                  }
                />
                <Bar
                  dataKey="earnings"
                  name="Earnings"
                  fill="#a594f9"
                  radius={[6, 6, 0, 0]}
                  barSize={32}
                  legendType="rect"
                />
                <Bar
                  dataKey="expenses"
                  name="Expenses"
                  fill="#22223b"
                  radius={[6, 6, 0, 0]}
                  barSize={32}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border-2 border-[#a594f9]/20">
        <div className="p-6 border-b border-[#a594f9]/20">
          <h3 className="text-lg font-semibold text-[#22223b]">
            Upcoming Revenue
          </h3>
          <p className="text-[#a594f9] mt-1">Your confirmed bookings</p>
        </div>

        <div className="divide-y divide-[#a594f9]/10">
          {upcomingBookings.map((booking, index) => (
            <div key={index} className="p-4 flex items-center justify-between">
              <span className="text-[#22223b]">{booking.date}</span>
              <span className="font-semibold text-[#a594f9]">
                ${booking.amount.toLocaleString()}
              </span>
            </div>
          ))}
        </div>

        <div className="p-4 bg-[#a594f9]/10 border-t border-[#a594f9]/20">
          <div className="flex items-center justify-between">
            <span className="font-medium text-[#22223b]">Total Expected</span>
            <span className="font-bold text-[#6ee7b7]">
              $
              {upcomingBookings
                .reduce((sum, b) => sum + b.amount, 0)
                .toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-[#a594f9]/10 rounded-lg p-6 border-2 border-[#a594f9]/20">
        <h4 className="font-semibold text-[#22223b] mb-2">
          🔥 Peak Season Alert
        </h4>
        <p className="text-[#22223b]">
          December is looking hot! Consider raising your rates by 15-20% for New
          Year's week.
        </p>
      </div>
    </div>
  );
};

export default RevenueSection;
