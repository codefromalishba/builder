"use client";
import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import SummaryMain from "../components/SummaryMain";
import HeaderLayout from "../components/HeaderLayout";

const page = () => {
  return (
    <HeaderLayout>
      <div>
        {/* <DashboardHeader /> */}
        <SummaryMain />
      </div>
    </HeaderLayout>
  );
};

export default page;
