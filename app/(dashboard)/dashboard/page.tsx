"use client";

import { useState } from "react";
import Sidebar from "../../../components/dashboard/Sidebar";
import Header from "../../../components/dashboard/Header";
import OverviewSection from "../../../components/dashboard/OverviewSection";
import BookingsSection from "../../../components/dashboard/BookingsSection";
import MessagingSection from "../../../components/dashboard/MessagingSection";
import RevenueSection from "../../../components/dashboard/RevenueSection";
import ReviewsSection from "../../../components/dashboard/ReviewsSection";
import SettingsSection from "../../../components/dashboard/SettingsSection";
import PropertiesSection from "@/components/dashboard/PropertiesSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const renderSection = () => {
    switch (activeSection) {
      case "overview":
        return <OverviewSection />;
      case "bookings":
        return <BookingsSection />;
      case "messaging":
        return <MessagingSection />;
      case "revenue":
        return <RevenueSection />;
      case "reviews":
        return <ReviewsSection />;
      case "settings":
        return <SettingsSection />;
      case "properties":
        return <PropertiesSection />;
      default:
        return <OverviewSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6">
          <div className="mx-auto max-w-full">{renderSection()}</div>
        </main>
      </div>
    </div>
  );
};

export default Index;
