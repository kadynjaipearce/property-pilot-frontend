import {
  RiListUnordered,
  RiCalendarLine,
  RiFilter3Line,
  RiSearchLine,
} from "@remixicon/react";

const DemoPreview = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-2 sm:p-4 lg:p-6">
      {/* Container with 16:9 aspect ratio */}
      <div className="w-full" style={{ aspectRatio: "16/9" }}>
        <div className="h-full bg-gray-50 rounded-t-lg overflow-hidden shadow-lg flex text-[10px] sm:text-xs md:text-sm">
          {/* Sidebar - Collapsed */}
          <div className="w-12 sm:w-14 md:w-16 bg-white border-r border-gray-200 flex flex-col">
            {/* Sidebar Header */}
            <div className="h-[20%] border-b border-gray-200 flex items-center justify-center px-1 sm:px-2">
              <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-primary rounded-md"></div>
            </div>

            {/* Sidebar Navigation */}
            <nav className="flex-1 px-1 sm:px-2 py-2 sm:py-3 flex flex-col">
              <ul className="space-y-1 sm:space-y-1.5">
                <li>
                  <div className="w-full flex items-center justify-center rounded-sm transition-colors px-1 sm:px-2 py-1 sm:py-1.5 text-gray-600">
                    <RiListUnordered
                      size={10}
                      className="sm:size-3 md:size-[14px]"
                    />
                  </div>
                </li>
                <li>
                  <div className="w-full flex items-center justify-center rounded-sm transition-colors px-1 sm:px-2 py-1 sm:py-1.5 bg-primary/20 text-primary">
                    <RiCalendarLine
                      size={10}
                      className="sm:size-3 md:size-[14px]"
                    />
                  </div>
                </li>
                <li>
                  <div className="w-full flex items-center justify-center rounded-sm transition-colors px-1 sm:px-2 py-1 sm:py-1.5 text-gray-600">
                    <RiSearchLine
                      size={10}
                      className="sm:size-3 md:size-[14px]"
                    />
                  </div>
                </li>
                <li>
                  <div className="w-full flex items-center justify-center rounded-sm transition-colors px-1 sm:px-2 py-1 sm:py-1.5 text-gray-600">
                    <RiFilter3Line
                      size={10}
                      className="sm:size-3 md:size-[14px]"
                    />
                  </div>
                </li>
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col bg-white">
            {/* Header */}
            <div className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="w-16 sm:w-20 md:w-24 h-3 sm:h-4 md:h-5 rounded bg-gray-200 mb-1 sm:mb-2" />
                  <div className="w-24 sm:w-32 md:w-40 h-2 sm:h-3 rounded bg-gray-300" />
                </div>
                <div className="w-16 sm:w-20 md:w-24 h-2 sm:h-3 rounded bg-gray-300" />
              </div>
            </div>

            {/* Success Banner */}
            <div className="px-2 sm:px-4 md:px-6 py-2 sm:py-3">
              <div className="bg-primary/10 rounded-md sm:rounded-lg p-2 sm:p-3 md:p-4 border border-primary/20">
                <div className="w-32 sm:w-40 md:w-48 h-3 sm:h-4 rounded bg-primary/30 mb-1 sm:mb-2" />
                <div className="w-24 sm:w-32 md:w-40 h-2 sm:h-3 rounded bg-primary/20" />
              </div>
            </div>

            {/* Bookings Section */}
            <div className="flex-1 px-2 sm:px-4 md:px-6 pb-2 sm:pb-4 md:pb-6 flex flex-col">
              {/* Section Header with Controls */}
              <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
                <div className="w-20 sm:w-24 md:w-32 h-3 sm:h-4 rounded bg-gray-200" />
                <div className="flex items-center gap-1 sm:gap-2">
                  {/* View Toggle Buttons */}
                  <div className="flex gap-1">
                    <div className="px-2 py-1 bg-primary/20 border border-primary rounded-sm flex items-center gap-1">
                      <RiListUnordered
                        size={8}
                        className="sm:size-3 md:size-4 text-primary"
                      />
                      <div className="w-6 sm:w-8 h-1 sm:h-2 rounded bg-primary" />
                    </div>
                    <div className="px-2 py-1 border border-primary rounded-sm flex items-center gap-1">
                      <RiCalendarLine
                        size={8}
                        className="sm:size-3 md:size-4 text-primary"
                      />
                      <div className="w-8 sm:w-10 h-1 sm:h-2 rounded bg-primary" />
                    </div>
                  </div>
                  {/* Filter Buttons */}
                  <div className="flex gap-1">
                    <div className="px-2 py-1 border border-primary rounded-sm flex items-center gap-1">
                      <RiSearchLine
                        size={8}
                        className="sm:size-3 md:size-4 text-primary"
                      />
                      <div className="w-6 sm:w-8 h-1 sm:h-2 rounded bg-primary" />
                    </div>
                    <div className="px-2 py-1 border border-primary rounded-sm flex items-center gap-1">
                      <RiFilter3Line
                        size={8}
                        className="sm:size-3 md:size-4 text-primary"
                      />
                      <div className="w-6 sm:w-8 h-1 sm:h-2 rounded bg-primary" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Cards */}
              <div className="flex flex-col gap-1 sm:gap-2 flex-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 sm:gap-3 bg-white rounded-md sm:rounded-lg p-2 sm:p-3 border border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    {/* Property Image */}
                    <div className="w-8 h-6 sm:w-10 sm:h-8 md:w-12 md:h-10 rounded-sm bg-gray-200 flex-shrink-0" />

                    {/* Property Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          {/* Property Name */}
                          <div className="w-20 sm:w-24 md:w-32 h-2 sm:h-3 rounded bg-gray-200 mb-1" />
                          {/* Property Address */}
                          <div className="w-16 sm:w-20 md:w-24 h-1 sm:h-2 rounded bg-gray-300 mb-1 sm:mb-2" />
                          {/* Property Type & Details */}
                          <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                            <div className="w-8 sm:w-10 h-1 sm:h-2 rounded bg-gray-300" />
                            <div className="w-1 h-1 rounded-full bg-gray-300" />
                            <div className="w-6 sm:w-8 h-1 sm:h-2 rounded bg-gray-300" />
                            <div className="w-1 h-1 rounded-full bg-gray-300" />
                            <div className="w-6 sm:w-8 h-1 sm:h-2 rounded bg-gray-300" />
                          </div>

                          {/* Guest Info */}
                          <div className="flex items-center gap-1 sm:gap-2">
                            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gray-200 flex-shrink-0" />
                            <div className="flex flex-col gap-0.5 sm:gap-1">
                              <div className="w-12 sm:w-16 h-1 sm:h-2 rounded bg-gray-200" />
                              <div className="w-8 sm:w-10 h-1 sm:h-2 rounded bg-gray-300" />
                            </div>
                          </div>
                        </div>

                        {/* Status & Dates */}
                        <div className="flex flex-col items-end gap-1 sm:gap-2 flex-shrink-0">
                          {/* Status Badge */}
                          <div
                            className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border ${
                              i === 0
                                ? "bg-[#6ee7b7]/20 border-[#6ee7b7]/30"
                                : "bg-[#b8c0ff]/20 border-[#b8c0ff]/30"
                            }`}
                          >
                            <div
                              className={`w-10 sm:w-12 h-1 sm:h-2 rounded ${
                                i === 0 ? "bg-[#6ee7b7]" : "bg-[#b8c0ff]"
                              }`}
                            />
                          </div>

                          {/* Check-in/out Dates */}
                          <div className="text-right">
                            <div className="w-12 sm:w-16 h-1 sm:h-2 rounded bg-gray-200 mb-0.5 sm:mb-1" />
                            <div className="w-10 sm:w-12 h-1 sm:h-2 rounded bg-gray-300" />
                          </div>
                        </div>
                      </div>
                    </div>
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

export default DemoPreview;
