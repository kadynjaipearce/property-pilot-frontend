import { RiNotification3Line } from "@remixicon/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const notifications = [
    {
      id: 1,
      title: "New booking confirmed",
      message: "Sarah Johnson booked for Dec 15-18",
      time: "2 minutes ago",
      unread: true,
    },
    {
      id: 2,
      title: "Guest message received",
      message: "Mike Chen sent you a message",
      time: "15 minutes ago",
      unread: true,
    },
    {
      id: 3,
      title: "Review posted",
      message: "Emma Williams left a 5-star review",
      time: "1 hour ago",
      unread: false,
    },
    {
      id: 4,
      title: "Payment received",
      message: "Payment of $450 received for booking #1234",
      time: "2 hours ago",
      unread: false,
    },
  ];

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10 h-16 flex items-center">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-3">
          <div>
            <h1 className="text-sm font-bold text-gray-800">Dashboard</h1>
            <p className="text-gray-600">
              Welcome back! Here&apos;s what&apos;s happening today 👋
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="relative flex items-center gap-2 p-2 hover:bg-primary/10 rounded-md transition-colors cursor-pointer focus:outline-none">
                <RiNotification3Line
                  size={22}
                  className="text-gray-600 hover:text-primary transition-colors"
                />
                <span className="text-xs font-medium text-gray-600 hover:text-primary transition-colors">
                  {unreadCount > 0
                    ? `${unreadCount} New Notifications`
                    : "No New Notifications"}
                </span>
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-white"></span>
                )}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-80 bg-white border-2 border-primary"
            >
              <div className="p-3 border-b border-gray-100">
                <h3 className="font-semibold text-gray-800">Notifications</h3>
                <p className="text-sm text-gray-600">{unreadCount} unread</p>
              </div>
              <div className="max-h-64 overflow-y-auto hide-scrollbar">
                {notifications.map((notification) => (
                  <DropdownMenuItem
                    key={notification.id}
                    className="p-3 cursor-pointer hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <div className="flex items-start space-x-3 w-full">
                      <div
                        className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          notification.unread ? "bg-primary" : "bg-gray-300"
                        }`}
                      ></div>
                      <div className="flex-1 min-w-0">
                        <p
                          className={`text-sm font-medium ${
                            notification.unread
                              ? "text-gray-800"
                              : "text-gray-600"
                          }`}
                        >
                          {notification.title}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          {notification.message}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          {notification.time}
                        </p>
                      </div>
                    </div>
                  </DropdownMenuItem>
                ))}
              </div>
              <div className="p-3 border-t border-gray-100">
                <button className="w-full text-sm text-primary hover:bg-primary/10 hover:text-primary font-medium rounded-md transition-colors">
                  View all notifications
                </button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-semibold text-sm">KP</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
