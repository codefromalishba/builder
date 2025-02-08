"use client";
import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { sidebarData } from "../../data";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import Cart from "./Cart";
import FeatureView from "./FeatureView";
import { GoPlus } from "react-icons/go";
import { MdOutlineDelete } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addFeature,
  removeFeature,
  setSelectedFeature,
} from "../store/featureSlice";

const MainDashboard = () => {
  const dispatch = useDispatch();
  const { allFeatures, selectedFeature } = useSelector(
    (state) => state.feature
  );
  const [openDropDown, setOpenDropDown] = useState();
  // const allFeatures = useSelector((state) => state.feature);

  const handleAddFeature = (item) => {
    dispatch(setSelectedFeature(item));
    dispatch(addFeature(item));
  };

  const handleRemoveFeature = (itemId) => {
    const updatedFeatures = allFeatures.filter(
      (feature) => feature.id !== itemId
    );

    dispatch(removeFeature(itemId));

    if (updatedFeatures.length > 0) {
      dispatch(setSelectedFeature(updatedFeatures[0]));
    } else {
      dispatch(setSelectedFeature(null));
    }
  };

  const handleDispatchFeature = (item) => {
    dispatch(setSelectedFeature(item));
  };

  const handleShowFeatures = (id) => {
    console.log("id", id);
    if (openDropDown === id) {
      setOpenDropDown();
    } else setOpenDropDown(id);
  };
  return (
    <div className="flex h-[calc(100vh-4.5rem)]">
      <div className="grid w-full grid-cols-5 overflow-y-hidden">
        <div className="col-span-1 bg-slate-100 max-h-screen relative custom-scrollbar overflow-y-auto">
          <div className="flex items-center border border-gray-300 rounded-md m-2 bg-white p-2 gap-2">
            <IoMdSearch className="h-4 w-4 text-gray-600 text-xl" />
            <input
              placeholder="Search for a feature"
              className="bg-transparent text-sm"
            />
          </div>
          {sidebarData.map((item, index) => (
            <div key={index}>
              <div
                onClick={() => handleShowFeatures(index)}
                className="group p-4 hover:bg-slate-200 cursor-pointer duration-300 ease-in-out"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Image
                      src={item.img}
                      alt="dropDown img"
                      className="w-5 h-5 opacity-50 group-hover:opacity-100"
                    />
                    <p className="text-sm">{item.name}</p>
                  </div>
                  <IoIosArrowDown className="text-transparent group-hover:text-black" />
                </div>
              </div>
              {openDropDown === index && (
                <div className="max-h-[207px]">
                  <div className="bg-slate-100 flex justify-between items-center py-3 px-4">
                    <p className="text-gray-500 text-xs">
                      {`${
                        allFeatures.filter((feature) =>
                          item.dropDown.some((f) => f.id === feature.id)
                        ).length
                      }/${item.dropDown.length} features`}
                    </p>
                    <p
                      className="text-gray-500 text-xs cursor-pointer hover:underline"
                      onClick={() => {
                        const allSelected = item.dropDown.every((feature) =>
                          allFeatures.some((f) => f.id === feature.id)
                        );

                        if (allSelected) {
                          // If all are selected, remove them all
                          item.dropDown.forEach((feature) =>
                            dispatch(removeFeature(feature.id))
                          );
                          dispatch(setSelectedFeature(null));
                        } else {
                          // Otherwise, add all and set the first as selected
                          item.dropDown.forEach((feature) => {
                            if (!allFeatures.some((f) => f.id === feature.id)) {
                              dispatch(addFeature(feature));
                            }
                          });

                          // Set the first feature as selected
                          dispatch(setSelectedFeature(item.dropDown[0]));
                        }
                      }}
                    >
                      {item.dropDown.every((feature) =>
                        allFeatures.some((f) => f.id === feature.id)
                      )
                        ? "Unselect All"
                        : "Select All"}
                    </p>
                  </div>
                  <div className="overflow-y-auto custom-scrollbar max-h-[180px]">
                    {item.dropDown.map((feature, index) => {
                      const isSelected = allFeatures.some(
                        (f) => f.id === feature.id
                      );
                      const isUnderView = selectedFeature?.id === feature.id; // Check if feature is under view

                      return (
                        <div
                          key={index}
                          onClick={() => handleDispatchFeature(feature)}
                          className="flex flex-col w-full cursor-pointer"
                        >
                          <div
                            className={`bg-slate-100 flex justify-between items-center p-4  border-l-4 border-b-[1px] ${
                              isUnderView ? "border-l-demo" : ""
                            }`}
                          >
                            <div className="flex justify-between w-full">
                              <div className="flex gap-2">
                                <img
                                  src={feature.icon}
                                  alt="iconImg"
                                  className="w-5 h-5 cursor-pointer mt-2 opacity-50"
                                />
                                <div>
                                  <p className="text-sm cursor-pointer">
                                    {feature.name}
                                  </p>
                                  <p className="text-xs cursor-pointer text-gray-500">
                                    from {feature.price}
                                  </p>
                                  <p className="text-xs cursor-pointer text-gray-500">
                                    from {feature.timeline} days
                                  </p>
                                </div>
                              </div>
                              <div className="flex gap-2 cursor-pointer items-center ">
                                <div
                                  className={`w-7 p-[5px] h-7 rounded-full border-[1px]  items-center justify-center flex cursor-pointer ${
                                    isUnderView
                                      ? "bg-demo border-none "
                                      : "bg-white hover:bg-slate-100"
                                  }`}
                                >
                                  <IoEyeOutline
                                    className={`${
                                      isUnderView ? "text-white" : ""
                                    }`}
                                  />
                                </div>

                                <div
                                  className="w-7 p-[5px] h-7 rounded-full border-[1px] bg-white hover:bg-slate-50 items-center justify-center flex cursor-pointer"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    isSelected
                                      ? handleRemoveFeature(feature.id)
                                      : handleAddFeature(feature);
                                  }}
                                >
                                  {isSelected ? (
                                    <MdOutlineDelete />
                                  ) : (
                                    <GoPlus />
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div
          className={`${allFeatures.length > 0 ? "col-span-3" : "col-span-4"}`}
        >
          <FeatureView />
        </div>
        {allFeatures.length > 0 && (
          <div className="col-span-1">
            <Cart />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainDashboard;
