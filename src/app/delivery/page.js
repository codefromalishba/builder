"use client";
import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import MainDelivery from "../components/MainDelivery";
import DeliveryFooter from "../components/DeliveryFooter";
import DeliveryTime from "../components/DeliveryTime";
import HeaderLayout from "../components/HeaderLayout";

const Page = () => {
  return (
    <HeaderLayout>
      <div className="flex flex-col h-screen">
        {/* Fixed Header */}
        <div className="fixed top-0 left-0 right-0 z-50">
          {/* <DashboardHeader /> */}
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto mt-[72px] mb-[80px]">
          {/* Adjust mt and mb according to actual header/footer height */}
          <MainDelivery />
          <DeliveryTime />
        </div>

        {/* Fixed Footer */}
        <div className="fixed bottom-0 left-0 right-0 z-50">
          <DeliveryFooter />
        </div>
      </div>
    </HeaderLayout>
  );
};

export default Page;
