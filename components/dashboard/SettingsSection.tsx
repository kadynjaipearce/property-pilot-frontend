const SettingsSection = () => {
  const setupItems = [
    {
      name: "Email Forwarding",
      completed: true,
      description: "Redirect booking emails to Property Pilot",
    },
    {
      name: "Guest Communication",
      completed: true,
      description: "Set up automated messaging",
    },
    {
      name: "Calendar Sync",
      completed: false,
      description: "Connect your Airbnb calendar",
    },
    {
      name: "Pricing Rules",
      completed: false,
      description: "Set dynamic pricing strategies",
    },
  ];

  const completedItems = setupItems.filter((item) => item.completed).length;
  const progressPercentage = (completedItems / setupItems.length) * 100;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">
            Setup Progress
          </h3>
          <p className="text-gray-600 mt-1">
            Complete your setup to unlock all features
          </p>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-700">
              {completedItems} of {setupItems.length} completed
            </span>
            <span className="text-sm text-gray-500">
              {Math.round(progressPercentage)}%
            </span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
            <div
              className="bg-purple-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>

          <div className="space-y-4">
            {setupItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    item.completed ? "bg-green-500" : "bg-gray-200"
                  }`}
                >
                  {item.completed && (
                    <span className="text-white text-sm">✓</span>
                  )}
                </div>
                <div className="flex-1">
                  <h4
                    className={`font-medium ${
                      item.completed ? "text-gray-800" : "text-gray-600"
                    }`}
                  >
                    \{item.name}
                  </h4>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
                {!item.completed && (
                  <button className="text-[#a594f9] text-sm font-medium hover:text-[#a594f9] border-2 border-[#a594f9] bg-[#a594f9]/10 rounded-md focus:ring-2 focus:ring-[#a594f9] focus:outline-none transition-colors cursor-pointer">
                    Set up
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">
            Email Forwarding
          </h3>
          <div className="flex items-center space-x-2 mt-1">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm text-green-600 font-medium">Active</span>
            <span className="text-sm text-gray-500">
              • Last sync: 2 minutes ago
            </span>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Property Pilot Email
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value="john.doe.pp247@propertypilot.com"
                readOnly
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700"
              />
              <button className="px-4 py-2 bg-[#a594f9]/20 border-2 border-[#a594f9] text-[#a594f9] rounded-md text-sm font-medium hover:bg-[#a594f9]/40 focus:ring-2 focus:ring-[#a594f9] focus:outline-none transition-colors cursor-pointer">
                Copy
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Forward your Airbnb booking emails to this address to enable
              automation
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <h4 className="font-medium text-blue-900 mb-2">
              Setup Instructions
            </h4>
            <ol className="text-sm text-blue-800 space-y-1">
              <li>1. Go to your email provider's forwarding settings</li>
              <li>
                2. Add the Property Pilot email above as a forwarding address
              </li>
              <li>
                3. Set up a filter to forward emails from Airbnb automatically
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">
            Account Settings
          </h3>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-800">Email Notifications</h4>
              <p className="text-sm text-gray-600">
                Receive updates about bookings and messages
              </p>
            </div>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#a594f9]/20 border-2 border-[#a594f9] transition-colors focus:ring-2 focus:ring-[#a594f9] focus:outline-none cursor-pointer">
              <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6 transition-transform" />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-800">SMS Alerts</h4>
              <p className="text-sm text-gray-600">
                Get text messages for urgent matters
              </p>
            </div>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 border-2 border-[#a594f9] transition-colors focus:ring-2 focus:ring-[#a594f9] focus:outline-none cursor-pointer">
              <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-800">Auto-Reply Messages</h4>
              <p className="text-sm text-gray-600">
                Automatically respond to common guest questions
              </p>
            </div>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#a594f9]/20 border-2 border-[#a594f9] transition-colors focus:ring-2 focus:ring-[#a594f9] focus:outline-none cursor-pointer">
              <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsSection;
