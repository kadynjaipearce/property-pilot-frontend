import { RiCheckboxCircleFill, RiSettings3Line } from "@remixicon/react";
import { useState } from "react";

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

  const [profile] = useState({
    fullName: "Kadyn Pearce",
    email: "kadyn.pearce@propertypilot.com",
    phone: "+61 412 345 678",
  });

  // Switch states for Account Settings
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(false);
  const [autoReply, setAutoReply] = useState(true);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-1">
            Configure your account and manage preferences.
          </p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <RiSettings3Line size={16} />
          <span>Last updated: {new Date().toLocaleDateString()}</span>
        </div>
      </div>

      {/* Profile Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-secondary">
            Profile Information
          </h3>
          <button
            type="button"
            className="px-3 py-1.5 rounded-md border-2 border-[#a594f9] text-[#a594f9] bg-white text-sm font-medium hover:bg-[#a594f9]/10 transition-colors cursor-pointer"
          >
            Edit Profile
          </button>
        </div>

        <div className="flex items-start space-x-4">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-gradient-to-br from-[#a594f9] to-purple-600 rounded-lg flex items-center justify-center text-2xl font-bold text-white select-none">
              KP
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 space-y-3">
            <div>
              <label className="block text-xs font-medium text-[#a594f9] mb-1">
                Full Name
              </label>
              <p className="text-sm text-secondary font-medium">
                {profile.fullName}
              </p>
            </div>
            <div>
              <label className="block text-xs font-medium text-[#a594f9] mb-1">
                Email
              </label>
              <p className="text-sm text-secondary font-medium">
                {profile.email}
              </p>
            </div>
            <div>
              <label className="block text-xs font-medium text-[#a594f9] mb-1">
                Phone
              </label>
              <p className="text-sm text-secondary font-medium">
                {profile.phone}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Setup Progress
          </h3>
          <p className="text-gray-600 mt-1">
            Complete your setup to unlock all features
          </p>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-900">
              {completedItems} of {setupItems.length} completed
            </span>
            <span className="text-sm text-gray-600">
              {Math.round(progressPercentage)}%
            </span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>

          <div className="space-y-4">
            {setupItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    item.completed
                      ? "bg-green-500"
                      : "bg-gray-100 border-2 border-gray-300"
                  }`}
                >
                  {item.completed && (
                    <RiCheckboxCircleFill className="text-white" size={20} />
                  )}
                </div>
                <div className="flex-1">
                  <h4
                    className={`font-medium ${
                      item.completed ? "text-gray-900" : "text-gray-600"
                    }`}
                  >
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                {!item.completed && (
                  <button className="text-gray-600 text-sm font-medium border-2 border-gray-300 bg-gray-50 rounded-md transition-colors cursor-pointer px-4 py-2 hover:bg-gray-100">
                    Set up
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
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
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Your Property Pilot Email
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value="kadyn.pearce@propertypilot.com"
                readOnly
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-900"
              />
              <button className="px-4 py-2 bg-gray-100 border-2 border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer">
                Copy
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Forward your Airbnb booking emails to this address to enable
              automation
            </p>
          </div>

          <div className="bg-[#a594f9]/10 rounded-lg p-4 border border-[#a594f9]/20">
            <h4 className="font-medium text-[#a594f9] mb-2">
              Setup Instructions
            </h4>
            <ol className="text-sm text-gray-700 space-y-1">
              <li>1. Go to your email provider&apos;s forwarding settings</li>
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

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-[#a594f9]/20">
          <h3 className="text-lg font-semibold text-secondary">
            Account Settings
          </h3>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-secondary">
                Email Notifications
              </h4>
              <p className="text-sm text-[#a594f9]">
                Receive updates about bookings and messages
              </p>
            </div>
            <button
              type="button"
              onClick={() => setEmailNotifications((v) => !v)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                emailNotifications ? "bg-[#a594f9]" : "bg-gray-200"
              }`}
              aria-pressed={emailNotifications}
              aria-label="Toggle email notifications"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  emailNotifications ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-[#22223b]">SMS Alerts</h4>
              <p className="text-sm text-[#a594f9]">
                Get text messages for urgent matters
              </p>
            </div>
            <button
              type="button"
              onClick={() => setSmsAlerts((v) => !v)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                smsAlerts ? "bg-[#a594f9]" : "bg-gray-200"
              }`}
              aria-pressed={smsAlerts}
              aria-label="Toggle SMS alerts"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  smsAlerts ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-[#22223b]">
                Auto-Reply Messages
              </h4>
              <p className="text-sm text-[#a594f9]">
                Automatically respond to common guest questions
              </p>
            </div>
            <button
              type="button"
              onClick={() => setAutoReply((v) => !v)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                autoReply ? "bg-[#a594f9]" : "bg-gray-200"
              }`}
              aria-pressed={autoReply}
              aria-label="Toggle auto-reply messages"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  autoReply ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsSection;
