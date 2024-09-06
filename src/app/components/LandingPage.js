import React from "react";
import AppDeveloper from "./AppDeveloper";
import BussinessNeed from "./BussinessNeed";
import DemoImg from "./DemoImg";
import HelpInPlaning from "./HelpInPlaning";

const LandingPage = () => {
  return (
    <div>
      <AppDeveloper />
      {/* <DemoImg /> */}
      <BussinessNeed />
      <HelpInPlaning />
    </div>
  );
};

export default LandingPage;
