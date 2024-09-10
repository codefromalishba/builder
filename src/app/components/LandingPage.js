import React from "react";
import AppDeveloper from "./AppDeveloper";
import BussinessNeed from "./BussinessNeed";
import DemoImg from "./DemoImg";
import HelpInPlaning from "./HelpInPlaning";
import Working from "./Working";
import DeployDesign from "./DeployDesign";
import DreamBuilder from "./DreamBuilder";
import AiUse from "./AiUse";
import AppPlatform from "./AppPlatform";
import FAQs from "./FAQs";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div>
      <AppDeveloper />
      {/* <DemoImg /> */}
      <BussinessNeed />
      <HelpInPlaning />
      <Working />
      <DeployDesign />
      <DreamBuilder />
      <AiUse />
      <AppPlatform />
      <FAQs />
      <Footer />
    </div>
  );
};

export default LandingPage;
