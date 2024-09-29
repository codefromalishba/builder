import React, { useState } from "react";
import FeatureHeader from "./FeatureHeader";
import FeatureMain from "./FeatureMain";
import FeatureFooter from "./FeatureFooter";

const FeatureView = () => {
  const [isMobile, setIsMobile] = useState(true);

  const handleDeviceSelection = (device) => {
    setIsMobile(device);
  };
  return (
    <div>
      <div className="h-[calc(100vh-9rem)]">
        <FeatureHeader
          isMobile={isMobile}
          handleDeviceSelection={handleDeviceSelection}
        />
        <FeatureMain isMobile={isMobile} />
      </div>
      <FeatureFooter />
    </div>
  );
};

export default FeatureView;
