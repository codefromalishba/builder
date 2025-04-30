import React from "react";
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeFeature, setSelectedFeature } from "../store/featureSlice";

const CartMain = ({ isMobile }) => {
  const dispatch = useDispatch();
  const { allFeatures, selectedFeature } = useSelector(
    (state) => state.feature
  );

  const handleRemoveFeature = (featureId) => {
    console.log("featureId", featureId);
    dispatch(removeFeature(featureId));
  };

  return (
    <div>
      {allFeatures.map((feature, index) => (
        <div key={index} className="px-5 pb-5 pt-5">
          <div
            onClick={() => dispatch(setSelectedFeature(feature))}
            className="flex pb-4 border-b border-b-gray-[#A6A6A6]  cursor-pointer group"
          >
            <div className="flex justify-between  items-center gap-3">
              <div
                className={`border-2 w-12 rounded-lg ${
                  selectedFeature?.id === feature.id
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
              >
                {/* <img
                  className="p-1 h-full rounded-lg"
                  src={feature?.mobile}
                  alt="cartImg 1"
                /> */}
              </div>
              <div className="">
                <div className="flex items-center gap-2 w-20">
                  <p className="text-sm">{feature?.name}</p>
                  <div
                    onClick={() => handleRemoveFeature(feature?.id)}
                    className="w-7 p-[5px] h-7 cursor-pointer rounded-full border-[1px] bg-white hover-bg-slate-50 items-center justify-center flex "
                  >
                    <MdOutlineDelete />
                  </div>
                </div>
                <div className="py-1">
                  <p className="text-xs text-gray-400">
                    from ${feature?.price}
                  </p>
                  <p className="text-xs text-gray-400">
                    {feature?.timeline} days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartMain;
