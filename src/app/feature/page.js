"use client";
import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import MainDashboard from "../components/MainDashboard";
import HeaderLayout from "../components/HeaderLayout";

const page = () => {
  return (
    <HeaderLayout>
      <div>
        {/* <DashboardHeader /> */}
        <MainDashboard />
      </div>
    </HeaderLayout>
  );
};

export default page;
