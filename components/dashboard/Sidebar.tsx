import {
  RiCalendarLine,
  RiMessage2Line,
  RiMoneyDollarCircleLine,
  RiStarLine,
  RiSettings3Line,
  RiMenuLine,
  RiCloseLine,
  RiHome6Line,
} from "@remixicon/react";
import { useState } from "react";
import Image from "next/image";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { id: "properties", label: "Properties", icon: RiHome6Line },
    { id: "bookings", label: "Bookings", icon: RiCalendarLine },
    { id: "messaging", label: "Messaging", icon: RiMessage2Line },
    { id: "revenue", label: "Revenue", icon: RiMoneyDollarCircleLine },
    { id: "reviews", label: "Reviews", icon: RiStarLine },
    // Settings will be rendered separately at the bottom
  ];

  return (
    <div
      className={`bg-white border-r border-gray-200 ${
        isCollapsed ? "w-16" : "w-64"
      } min-h-screen sticky top-0 h-screen overflow-y-auto flex flex-col`}
    >
      <div
        className={`${
          isCollapsed ? "p-2" : "p-4"
        } border-b border-gray-200 h-16 flex items-center`}
      >
        <div
          className={`flex items-center ${
            isCollapsed ? "justify-center" : "justify-between"
          } w-full`}
        >
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Property Pilot Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="font-semibold text-gray-800 text-sm">
                Property Pilot
              </span>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 hover:bg-gray-100 rounded-md transition-colors cursor-pointer"
          >
            {isCollapsed ? <RiMenuLine size={20} /> : <RiCloseLine size={20} />}
          </button>
        </div>
      </div>

      <nav className={`${isCollapsed ? "p-2" : "p-4"} flex-1 flex flex-col`}>
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <li key={item.id}>
                <button
                  onClick={() => onSectionChange(item.id)}
                  className={`w-full flex items-center rounded-lg transition-colors cursor-pointer ${
                    isCollapsed ? "px-2 py-2 justify-center" : "px-3 py-2"
                  } ${
                    isActive
                      ? "bg-[#a594f9]/20 border-2 border-[#a594f9] text-[#a594f9]"
                      : "text-gray-600 hover:bg-[#a594f9]/10 border-2 border-transparent"
                  }`}
                  style={{ minHeight: 40 }}
                >
                  <Icon size={20} />
                  {!isCollapsed && <span className="ml-3">{item.label}</span>}
                </button>
              </li>
            );
          })}
        </ul>
        {/* Settings at the bottom */}
        <div className="mt-auto pt-4">
          <button
            onClick={() => onSectionChange("settings")}
            className={`w-full flex items-center rounded-lg transition-colors cursor-pointer ${
              isCollapsed ? "px-2 py-2 justify-center" : "px-3 py-2"
            } ${
              activeSection === "settings"
                ? "bg-[#a594f9]/20 border-2 border-[#a594f9] text-[#a594f9]"
                : "text-gray-600 hover:bg-[#a594f9]/10 border-2 border-transparent"
            }`}
            style={{ minHeight: 40 }}
          >
            <RiSettings3Line size={20} />
            {!isCollapsed && <span className="ml-3">Settings</span>}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
