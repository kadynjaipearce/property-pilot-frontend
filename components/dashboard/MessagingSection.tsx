import { useState } from "react";
import { RiMessage2Line } from "@remixicon/react";

const MessagingSection = () => {
  const [automations, setAutomations] = useState([
    {
      id: 1,
      name: "Welcome Message",
      description: "Sent 3 hours after booking confirmation",
      enabled: true,
      scheduled: 2,
    },
    {
      id: 2,
      name: "Check-in Instructions",
      description: "Sent 1 day before arrival",
      enabled: true,
      scheduled: 3,
    },
    {
      id: 3,
      name: "Checkout Reminder",
      description: "Sent on checkout day at 9 AM",
      enabled: false,
      scheduled: 0,
    },
    {
      id: 4,
      name: "Review Request",
      description: "Sent 2 days after checkout",
      enabled: true,
      scheduled: 1,
    },
  ]);

  const handleToggle = (id: number) => {
    setAutomations((prev) =>
      prev.map((auto) =>
        auto.id === id ? { ...auto, enabled: !auto.enabled } : auto
      )
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Messaging</h1>
          <p className="text-gray-600 mt-1">
            Automate guest communications and manage message templates.
          </p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <RiMessage2Line size={16} />
          <span>Last updated: {new Date().toLocaleDateString()}</span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">
            Message Automations
          </h3>
          <p className="text-gray-600 mt-1">
            Keep your guests informed automatically
          </p>
        </div>

        <div className="divide-y divide-gray-100">
          {automations.map((automation) => (
            <div key={automation.id} className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        automation.enabled ? "bg-[#6ee7b7]" : "bg-gray-300"
                      }`}
                    ></div>
                    <div>
                      <h4 className="font-medium text-gray-800">
                        {automation.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {automation.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  {automation.scheduled > 0 && (
                    <span className="text-sm text-[#a594f9] bg-[#a594f9]/10 px-2 py-1 rounded">
                      {automation.scheduled} scheduled
                    </span>
                  )}

                  <button
                    onClick={() => handleToggle(automation.id)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                      automation.enabled ? "bg-[#a594f9]" : "bg-gray-200"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        automation.enabled ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#a594f9]/10 to-purple-100 rounded-lg p-6 border border-[#a594f9]/20">
        <h4 className="font-semibold text-gray-800 mb-2">Pro Tip 💡</h4>
        <p className="text-gray-700">
          Personalize your messages by including guest names and property
          details. Guests love the personal touch!
        </p>
      </div>
    </div>
  );
};

export default MessagingSection;
