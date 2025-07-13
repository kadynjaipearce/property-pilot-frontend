import {
  RiCalendarLine,
  RiMessage2Line,
  RiMoneyDollarCircleLine,
  RiStarLine,
  RiSettings3Line,
  RiMenuLine,
  RiHome6Line,
  RiDashboardLine,
} from "@remixicon/react";

const DashboardPreview = () => {
  const menuItems = [
    { id: "overview", label: "Overview", icon: RiDashboardLine },
    { id: "bookings", label: "Bookings", icon: RiCalendarLine },
    { id: "messaging", label: "Messaging", icon: RiMessage2Line },
    { id: "revenue", label: "Revenue", icon: RiMoneyDollarCircleLine },
    { id: "reviews", label: "Reviews", icon: RiStarLine },
    { id: "properties", label: "Properties", icon: RiHome6Line },
  ];

  const statIcons = [
    RiCalendarLine,
    RiMoneyDollarCircleLine,
    RiStarLine,
    RiHome6Line,
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-2 sm:p-4 lg:p-6">
      {/* Container with 16:9 aspect ratio */}
      <div className="w-full" style={{ aspectRatio: "16/9" }}>
        <div className="h-full bg-gray-50 rounded-[10px] overflow-hidden shadow-lg border border-gray-200 flex text-[10px] sm:text-xs md:text-sm">
          {/* Sidebar - Collapsed */}
          <div className="w-12 sm:w-14 md:w-16 bg-white border-r border-gray-200 flex flex-col">
            {/* Sidebar Header */}
            <div className="h-[12%] border-b border-gray-200 flex items-center justify-center px-1 sm:px-2">
              <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-primary rounded-md"></div>
            </div>

            {/* Sidebar Navigation */}
            <nav className="flex-1 px-1 sm:px-3 py-2 sm:py-3 flex flex-col">
              <ul className="space-y-1 sm:space-y-1.5">
                {menuItems.slice(0, 4).map((item, index) => {
                  const Icon = item.icon;
                  const isActive = index === 0; // First item appears active

                  return (
                    <li key={item.id}>
                      <div
                        className={`w-full flex items-center justify-center rounded-sm transition-colors px-1 sm:px-2 py-1 sm:py-1.5 cursor-pointer hover:bg-gray-100 ${
                          isActive
                            ? "bg-primary/20 text-primary"
                            : "text-gray-600"
                        }`}
                      >
                        <Icon size={10} className="sm:size-3 md:size-[18px]" />
                      </div>
                    </li>
                  );
                })}
              </ul>

              {/* Settings at bottom */}
              <div className="mt-auto">
                <div className="w-full flex items-center justify-center rounded-sm transition-colors px-1 sm:px-2 py-1 sm:py-1.5 text-gray-600 cursor-pointer hover:bg-gray-100">
                  <RiSettings3Line
                    size={10}
                    className="sm:size-3 md:size-[14px]"
                  />
                </div>
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <div className="h-[12%] flex items-center px-2 sm:px-4 md:px-6 border-b border-gray-200 bg-white/60">
              <div className="w-16 sm:w-20 md:w-24 h-2 sm:h-3 rounded bg-gray-200 mr-2 sm:mr-3" />
              <div className="w-10 sm:w-12 md:w-16 h-2 sm:h-3 rounded bg-gray-200" />
            </div>

            {/* Stat Cards Row */}
            <div className="flex gap-1 sm:gap-2 md:gap-3 px-2 sm:px-4 md:px-6 py-2 sm:py-3">
              {statIcons.map((Icon, i) => (
                <div
                  key={i}
                  className="flex-1 bg-white rounded-md sm:rounded-lg p-1 sm:p-2 md:p-3 flex items-center gap-1 sm:gap-2 border border-gray-200 shadow-sm min-w-0"
                >
                  <div className="p-1 sm:p-1.5 md:p-2 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <Icon
                      size={8}
                      className="sm:size-3 md:size-4 text-primary"
                    />
                  </div>
                  <div className="flex flex-col flex-1 gap-0.5 sm:gap-1 min-w-0">
                    <div className="w-6 sm:w-8 md:w-10 h-1 sm:h-2 rounded bg-gray-200" />
                    <div className="w-4 sm:w-6 md:w-8 h-1 sm:h-2 rounded bg-gray-300" />
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Bookings Table */}
            <div className="flex-1 px-2 sm:px-4 md:px-6 pb-2 sm:pb-4 md:pb-6 flex flex-col">
              <div className="w-12 sm:w-16 md:w-20 h-2 sm:h-3 rounded bg-gray-200 mb-2 sm:mb-3 mt-1 sm:mt-2" />
              <div className="flex flex-col gap-1 sm:gap-2 flex-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 sm:gap-3 bg-white rounded-md sm:rounded-lg p-1 sm:p-2 md:p-3 border border-gray-200 shadow-sm"
                  >
                    <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-md bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <RiHome6Line
                        size={6}
                        className="sm:size-2 md:size-3 text-primary"
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-0.5 sm:gap-1 min-w-0">
                      <div className="w-10 sm:w-12 md:w-16 h-1 sm:h-2 rounded bg-gray-200" />
                      <div className="w-8 sm:w-10 md:w-12 h-1 sm:h-2 rounded bg-gray-300" />
                    </div>
                    <div className="w-6 sm:w-8 md:w-10 h-2 sm:h-3 rounded bg-gray-200 flex-shrink-0" />
                    <div className="w-5 sm:w-6 md:w-8 h-2 sm:h-3 rounded bg-primary/20 flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;
