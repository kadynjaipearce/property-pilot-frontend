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
import { RiMoneyDollarCircleLine } from "@remixicon/react";

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
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Revenue</h1>
          <p className="text-gray-600 mt-1">
            Track your earnings, expenses, and financial performance.
          </p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <RiMoneyDollarCircleLine size={16} />
          <span>Last updated: {new Date().toLocaleDateString()}</span>
        </div>
      </div>

      <div className="bg-primary/10 rounded-lg p-6 border-2 border-primary/20">
        <h4 className="font-semibold text-primary mb-2">
          🔥 Peak Season Alert
        </h4>
        <p className="text-secondary">
          December is looking hot! Consider raising your rates by 15-20% for New
          Year's week.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
          <h3 className="text-sm font-medium text-gray-600">This Month</h3>
          <p className="text-3xl font-bold text-green-600">
            ${thisMonth.earnings.toLocaleString()}
          </p>
          <p className="text-sm text-green-600 mt-1">
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

        <div className="bg-primary/10 rounded-lg p-6 border-2 border-primary/20">
          <h3 className="text-sm font-medium text-gray-600">
            Avg. Nightly Rate
          </h3>
          <p className="text-2xl font-bold text-gray-900">$145</p>
          <p className="text-sm text-gray-600 mt-1">+5% vs last month</p>
        </div>

        <div className="bg-primary/10 rounded-lg p-6 border-2 border-primary/20">
          <h3 className="text-sm font-medium text-gray-600">Occupancy Rate</h3>
          <p className="text-2xl font-bold text-gray-900">78%</p>
          <p className="text-sm text-gray-600 mt-1">
            Dec &apos;24 - Jul &apos;25
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-primary/20">
        <div className="p-6 border-b border-primary/20">
          <h3 className="text-lg font-semibold text-gray-900">
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
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="month"
                  tick={{ fill: "#374151", fontSize: 14 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "#374151", fontSize: 14 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    background: "#fff",
                    border: "1px solid #d1d5db",
                    borderRadius: 8,
                    color: "#374151",
                  }}
                  cursor={{ fill: "#3b82f6", fillOpacity: 0.08 }}
                  formatter={(value, name) => [
                    name === "Earnings" ? (
                      <span style={{ color: "#374151", fontWeight: 600 }}>
                        ${value.toLocaleString()}
                      </span>
                    ) : (
                      <span style={{ color: "#374151" }}>
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
                      <span style={{ color: "#3b82f6", fontWeight: 600 }}>
                        {value}
                      </span>
                    ) : (
                      <span style={{ color: "#374151" }}>{value}</span>
                    )
                  }
                />
                <Bar
                  dataKey="earnings"
                  name="Earnings"
                  fill="#3b82f6"
                  radius={[6, 6, 0, 0]}
                  barSize={32}
                  legendType="rect"
                />
                <Bar
                  dataKey="expenses"
                  name="Expenses"
                  fill="#6b7280"
                  radius={[6, 6, 0, 0]}
                  barSize={32}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-primary/20">
        <div className="p-6 border-b border-primary/20">
          <h3 className="text-lg font-semibold text-gray-900">
            Upcoming Revenue
          </h3>
          <p className="text-gray-600 mt-1">Your confirmed bookings</p>
        </div>

        <div className="divide-y divide-gray-100">
          {upcomingBookings.map((booking, index) => (
            <div key={index} className="p-4 flex items-center justify-between">
              <span className="text-gray-900">{booking.date}</span>
              <span className="font-semibold text-blue-600">
                ${booking.amount.toLocaleString()}
              </span>
            </div>
          ))}
        </div>

        <div className="p-4 bg-gray-50 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-900">Total Expected</span>
            <span className="font-bold text-green-600">
              $
              {upcomingBookings
                .reduce((sum, b) => sum + b.amount, 0)
                .toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueSection;
