"use client";
import React, { useState } from "react";
import { IoIosCheckmarkCircle, IoIosRadioButtonOff } from "react-icons/io";
import { TfiAndroid } from "react-icons/tfi";
import { FaApple } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { IoDesktop } from "react-icons/io5";
import { BsInfoCircle } from "react-icons/bs";
import { initialPhases } from "@/data";
import { useDispatch } from "react-redux";
import { addPhase, removePhase } from "../store/featureSlice";

const ProductPhase = ({ isOn }) => {
  // const [selectedPhase, setSelectedPhase] = useState(null);
  // const [expandedCards, setExpandedCards] = useState({});
  // const dispatch = useDispatch();

  // const toggleCard = (id) => {
  //   setExpandedCards((prev) => {
  //     const isNowExpanded = !prev[id];
  //     if (isNowExpanded) {
  //       dispatch(addPhase(id));
  //     } else {
  //       dispatch(removePhase(id));
  //     }
  //     return {
  //       ...prev,
  //       [id]: isNowExpanded,
  //     };
  //   });
  // };

  const [selectedPhase, setSelectedPhase] = useState(null);

  // Initialize expandedCards with default selected: Design and MVP
  const [expandedCards, setExpandedCards] = useState(() => {
    const initialState = {};
    initialPhases.forEach((phase) => {
      initialState[phase.id] = phase.name === "Design" || phase.name === "MVP";
    });
    return initialState;
  });

  const toggleCard = (id) => {
    const isCurrentlySelected = expandedCards[id];

    // Count how many are currently selected
    const selectedCount = Object.values(expandedCards).filter(Boolean).length;

    // Prevent deselecting the last remaining card
    if (isCurrentlySelected && selectedCount === 1) return;

    setExpandedCards((prev) => ({
      ...prev,
      [id]: !isCurrentlySelected,
    }));
  };

  return (
    <>
      {!isOn ? (
        <div className="grid grid-cols-5 px-10 py-5 gap-5">
          {initialPhases.map((phase) => (
            <div
              key={phase.id}
              className={`relative border border-demo rounded-md p-5 pt-6 bg-white shadow-md ${
                expandedCards[phase.id]
                  ? "border-demo h-auto"
                  : "border-gray-300 h-[80px] overflow-hidden"
              }`}
            >
              <div
                className="absolute top-1 right-1 cursor-pointer"
                onClick={() => toggleCard(phase.id)}
              >
                {expandedCards[phase.id] ? (
                  <IoIosCheckmarkCircle className="text-xl text-demo" />
                ) : (
                  <IoIosRadioButtonOff className="text-xl text-gray-400" />
                )}
              </div>

              <div className="flex gap-2">
                <div className="w-10 h-10">{phase.icon}</div>
                <div>
                  <div className="flex gap-1 pb-1">
                    <p className="font-bold text-demo max-w-[100px] text-sm">
                      {phase.name}
                    </p>

                    <div
                      className="ml-auto cursor-pointer"
                      onClick={() => setSelectedPhase(phase)}
                    >
                      <BsInfoCircle className="text-gray-400 h-[15px] w-[15px] hover:text-black" />
                    </div>
                  </div>

                  {expandedCards[phase.id] && (
                    <>
                      <p className="font-bold text-xs pb-1">
                        Estimated Duration:
                        <span className="font-normal"> 1 Week</span>
                      </p>
                      <p className="font-bold text-xs">
                        Estimated Delivery Date:
                        <span className="font-normal"> 05-Oct-2024</span>
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}

          {selectedPhase && (
            <div className="fixed inset-0 flex items-center justify-center bg-overlay">
              <div className="bg-gray-800 text-white px-6 py-4 rounded-lg shadow-lg w-96 relative">
                <button
                  onClick={() => setSelectedPhase(null)}
                  className="absolute top-4 right-2 text-white hover:text-white text-sm"
                >
                  ✖
                </button>

                <p className="font-bold text-lg text-center">
                  {selectedPhase.name}
                </p>

                <p className="text-gray-400 text-xs py-2">
                  {selectedPhase.description}
                </p>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* <div className="grid grid-cols-5 px-10 py-5 gap-5">
          {initialPhases.map((phase) => (
            <div
              key={phase.id}
              className={`relative border border-demo rounded-md p-5 pt-6 bg-white shadow-md ${
                expandedCards[phase.id]
                  ? "border-demo h-auto"
                  : "border-gray-300 h-[80px] overflow-hidden"
              }`}
            >
              <div
                className="absolute top-1 right-1 cursor-pointer"
                onClick={() => toggleCard(phase.id)}
              >
                {expandedCards[phase.id] ? (
                  <IoIosCheckmarkCircle className="text-xl text-demo" />
                ) : (
                  <IoIosRadioButtonOff className="text-xl text-gray-400" />
                )}
              </div>

              <div className="flex gap-2">
                <div className="w-10 h-10">{phase.icon}</div>
                <div>
                  <div className="flex gap-1 pb-1">
                    <p className="font-bold text-demo max-w-[100px] text-sm">
                      {phase.name}
                    </p>

                    <div
                      className="ml-auto cursor-pointer"
                      onClick={() => setSelectedPhase(phase)}
                    >
                      <BsInfoCircle className="text-gray-400 h-[15px] w-[15px] hover:text-black" />
                    </div>
                  </div>

                  {expandedCards[phase.id] && (
                    <>
                      <p className="font-bold text-xs pb-1">
                        Estimated Duration:
                        <span className="font-normal">1 Weeks</span>
                      </p>
                      <p className="font-bold text-xs">
                        Estimated Delivery Date:
                        <span className="font-normal"> 05-Oct-2024</span>
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}

          {selectedPhase && (
            <div className="fixed inset-0 flex items-center justify-center bg-overlay">
              <div className="bg-gray-800 text-white px-6 py-4 rounded-lg shadow-lg w-96 relative">
                <button
                  onClick={() => setSelectedPhase(null)}
                  className="absolute top-4 right-2 text-white hover:text-white text-sm"
                >
                  ✖
                </button>

                <p className="font-bold text-lg text-center">
                  {selectedPhase.name}
                </p>

                <p className="text-gray-400 text-xs py-2">
                  {selectedPhase.description}
                </p>
              </div>
            </div>
          )}
        </div> */
        <div className="grid grid-cols-5 px-10 py-5 gap-5">
          {initialPhases.map((phase) => (
            <div
              key={phase.id}
              className=" relative border-[1px] rounded-md h-fit border-demo"
            >
              <div
                className="absolute top-1 right-1 cursor-pointer"
                onClick={() => toggleCard(phase.id)}
              >
                {expandedCards[phase.id] ? (
                  <IoIosCheckmarkCircle className="text-xl text-demo" />
                ) : (
                  <IoIosRadioButtonOff className="text-xl text-gray-400" />
                )}
              </div>
              <div>
                <div className="rounded-md rounded-b-none p-5 bg-slate-200">
                  <div className="flex p-5 py-1 gap-1">
                    <div>{phase.icon}</div>
                    <p className="text-demo font-bold text-sm max-w-[100px]">
                      {phase.name}
                    </p>
                    <div
                      className="ml-auto cursor-pointer"
                      onClick={() => setSelectedPhase(phase)}
                    >
                      <BsInfoCircle className="text-gray-400 h-[15px] w-[15px] hover:text-black" />
                    </div>
                    {selectedPhase && (
                      <div className="fixed inset-0 flex items-center justify-center">
                        <div className="bg-gray-800 text-white px-6 py-4 rounded-lg shadow-lg w-96 relative">
                          <button
                            onClick={() => setSelectedPhase(null)}
                            className="absolute top-4 right-2 text-white hover:text-white text-sm"
                          >
                            ✖
                          </button>

                          <p className="font-bold mb-2 text-center text-white ">
                            {selectedPhase.name}
                          </p>

                          <p className="text-gray-400 text-xs py-2">
                            {selectedPhase.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex p-5 justify-between pt-5">
                  <p className="text-xs font-bold">Platform</p>
                </div>
                <div className="flex px-5 justify-start py-4 gap-4">
                  {phase.platform.includes("ios") && (
                    <div className="flex flex-col items-center">
                      <FaApple className="text-2xl" />
                      <p className="text-xs text-gray-400 pt-2">iOS</p>
                    </div>
                  )}
                  {phase.platform.includes("android") && (
                    <div className="flex flex-col items-center">
                      <TfiAndroid className="text-2xl" />
                      <p className="text-xs text-gray-400 pt-2">Android</p>
                    </div>
                  )}
                  {phase.platform.includes("web") && (
                    <div className="flex flex-col items-center">
                      <MdWeb className="text-2xl" />
                      <p className="text-xs text-gray-400 pt-2">Web</p>
                    </div>
                  )}
                  {phase.platform.includes("desktop") && (
                    <div className="flex flex-col items-center">
                      <IoDesktop className="text-2xl" />
                      <p className="text-xs text-gray-400 pt-2">Desktop</p>
                    </div>
                  )}
                </div>
                <div className="p-5 border-t-[1px] border-b-[1px]">
                  <p className="font-bold text-xs">Features</p>
                  <p className="text-gray-400 text-xs pt-2">
                    4 Features Selected{" "}
                  </p>
                </div>
                <div className="p-5">
                  <p className="font-bold text-xs">Estimated Duration:</p>
                  <p className="text-xs">1 Weeks</p>
                  <p className="font-bold text-xs pt-2">
                    Estimated Delivery Date:
                  </p>
                  <p className="text-xs">06-Oct-2024</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductPhase;
