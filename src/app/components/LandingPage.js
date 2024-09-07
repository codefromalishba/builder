import React from "react";
import AppDeveloper from "./AppDeveloper";
import BussinessNeed from "./BussinessNeed";
import DemoImg from "./DemoImg";
import HelpInPlaning from "./HelpInPlaning";
import Working from "./Working";
import DeployDesign from "./DeployDesign";
import DreamBuilder from "./DreamBuilder";
import AiUse from "./AiUse";

const LandingPage = () => {
  return (
    <div>
      <AppDeveloper />
      {/* <DemoImg /> */}
      <BussinessNeed />
      <HelpInPlaning />
      <Working />
      {/* <DeployDesign /> */}
      <DreamBuilder />
      <AiUse />
    </div>
  );
};

export default LandingPage;
