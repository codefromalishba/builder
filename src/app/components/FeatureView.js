import React, { useState } from "react";
import FeatureHeader from "./FeatureHeader";
import FeatureMain from "./FeatureMain";
import FeatureFooter from "./FeatureFooter";
import { useSelector } from "react-redux";

const FeatureView = () => {
  const [isMobile, setIsMobile] = useState(true);
  const { allFeatures, selectedFeature } = useSelector(
    (state) => state.feature
  );

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
      {(allFeatures.length > 0 || selectedFeature) && <FeatureFooter />}
    </div>
  );
};

export default FeatureView;
