import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import MainDelivery from "../components/MainDelivery";
import DeliveryFooter from "../components/DeliveryFooter";
import DeliveryTime from "../components/DeliveryTime";

const page = () => {
  return (
    <div>
      <DashboardHeader />
      <MainDelivery />
      <DeliveryTime />
      <DeliveryFooter />
    </div>
  );
};

export default page;
