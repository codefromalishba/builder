"use client";
import React, { useEffect, useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { TfiAndroid } from "react-icons/tfi";
import { FaApple } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { IoDesktop } from "react-icons/io5";
import ProductPhase from "./ProductPhase";
// import { initialPhases } from "@/data";
import { useDispatch, useSelector } from "react-redux";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import {
  setPhases,
  updateInitialPhases,
  updatePlatforms,
} from "../store/featureSlice";

const MainDelivery = () => {
  const [selectedPhase, setSelectedPhase] = useState(null);
  const [selectedPhase2, setSelectedPhase2] = useState(null);
  const [isOn, setIsOn] = useState(false);
  const { selectedPlatformss, initialPhases } = useSelector(
    (state) => state.feature
  );
  const [selectedPlatforms, setSelectedPlatforms] =
    useState(selectedPlatformss); // Default at least one selected
  const [phases, setPhasesLocally] = useState();
  const user = useSelector((state) => state.profile);

  // console.log("initialPhases", initialPhases);

  // console.log("phases", phases);

  const dispatch = useDispatch();

  const handlePlatformClick = (platform) => {
    setSelectedPlatforms((prevSelected) => {
      const updated = prevSelected.includes(platform)
        ? prevSelected.length > 1
          ? prevSelected.filter((p) => p !== platform)
          : prevSelected
        : [...prevSelected, platform];

      // Update platforms in all phases (or filter based on condition if needed)
      const updatedPhases = phases?.map((phase) => ({
        ...phase,
        platform: updated,
      }));
      // console.log("updated", updated);
      // dispatch(updateInitialPhases(updatedPhases));
      dispatch(updatePlatforms(updated));

      setPhasesLocally(updatedPhases);
      return updated;
    });
  };

  // useEffect(() => {
  //   const fetchSelectedPlatforms = async () => {
  //     if (!user?.uid) return; // Wait until user data is loaded

  //     const db = getFirestore();
  //     const userRef = doc(db, "users", user.uid);
  //     try {
  //       const userSnap = await getDoc(userRef);
  //       if (userSnap.exists()) {
  //         const userData = userSnap.data();

  //         const recentBuildCardId = localStorage.getItem("recentBuildCardId");

  //         const buildCard = userData.buildCards.find(
  //           (card) => card.id === recentBuildCardId
  //         );

  //         const defaultPhases = buildCard?.phases;

  //         console.log("defaultPhases", defaultPhases);

  //         setPhasesLocally(defaultPhases);

  //         dispatch(setPhases(defaultPhases));
  //         if (buildCard && buildCard.platforms) {
  //           // console.log("Found saved platforms:", buildCard.platforms);
  //           setSelectedPlatforms(buildCard.platforms);
  //         } else {
  //           console.log("No saved platforms, fallback");
  //           setSelectedPlatforms(["ios"]); // fallback default
  //         }
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user buildCard:", error);
  //     }
  //   };

  //   fetchSelectedPlatforms();
  // }, [user]);

  const icons = [
    { id: "android", icon: <TfiAndroid className="text-4xl" /> },
    { id: "ios", icon: <FaApple className="text-4xl" /> },
    { id: "web", icon: <MdWeb className="text-4xl" /> },
    { id: "desktop", icon: <IoDesktop className="text-4xl" /> },
  ];

  const phaseInfo2 = {
    description: `Essential meeting that kicks off your project. We set everyone's roles, understand your objectives and make sure the app will be exactly how you want it.
    `,
  };
  const phaseInfo = {
    name: "Devices",
    description: `Our apps are designed for the last 3 versions of iOS & Android (at the time your project kicks off). 
    We test on flagship Apple, Samsung & Google devices.

    (Need testing for a specific device? Ask your delivery team.)

    Browsers
    For web apps, our testing process covers the last 3 major versions of these browsers:
    - Chrome
    - Safari
    - Firefox
    - Edge

    Responsiveness
    - **Desktop displays:** (1280 x 720) to (1920 x 1080)
    - **Mobile displays:** (360 x 640) to (414 x 896)
    - **Tablet displays:** (601 x 962) to (1280 x ?)
    `,
  };

  return (
    <div className="pt-4">
      <div className="flex justify-between items-center px-10 ">
        <div className="flex flex-col gap-2">
          <p className="font-bold text-2xl">Decide your deliverables</p>
          <div className="flex items-center gap-2">
            <p className="font-md">Select platform for your product</p>
            <BsInfoCircle
              className="text-gray-400 cursor-pointer"
              onClick={() => setSelectedPhase(phaseInfo)}
            />
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-2">
            <p>Expected kick-off date</p>
            <BsInfoCircle
              className="text-gray-400 cursor-pointer"
              onClick={() => setSelectedPhase2(phaseInfo2)}
            />
          </div>
          <div>
            <p className="text-xs">28 Sep 2024 (Today)</p>
          </div>
        </div>
      </div>
      {selectedPhase2 && (
        <div className="fixed z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 pointer-events-auto w-80 h-auto rounded-lg bg-gray-700 p-4 transition-opacity duration-1000 ease-in-out">
          <div className=" text-white px-6 py-4 rounded-lg shadow-lg  relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhase2(null)}
              className="absolute top-3 right-3 text-white text-sm"
            >
              ✖
            </button>

            {/* Modal Description */}
            <p className="text-white text-sm  whitespace-pre-line">
              {selectedPhase2.description}
            </p>
          </div>
        </div>
      )}
      {selectedPhase && (
        <div className="fixed z-20 inset-0 flex items-center justify-center">
          <div className="bg-gray-800 text-white px-6 py-4 rounded-lg shadow-lg w-96 relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhase(null)}
              className="absolute top-3 right-3 text-white text-lg"
            >
              ✖
            </button>

            {/* Modal Title */}
            <p className="font-bold text-lg ">{selectedPhase.name}</p>

            {/* Modal Description */}
            <p className="text-gray-400 text-xs py-2 whitespace-pre-line">
              {selectedPhase.description}
            </p>
          </div>
        </div>
      )}
      <div className="flex justify-start items-center py-4 px-10 gap-4">
        {icons.map(({ id, icon }) => (
          <div
            key={id}
            className={`border-[1px] h-20 w-20 cursor-pointer rounded-md flex justify-center items-center border-gray-300 ${
              selectedPlatformss.includes(id) ? "bg-black" : ""
            }`}
            onClick={() => handlePlatformClick(id)}
          >
            <div className="p-3">
              {React.cloneElement(icon, {
                className: `text-4xl flex justify-center items-center ${
                  selectedPlatforms.includes(id)
                    ? "text-white"
                    : "text-[#B4B6B7]"
                }`,
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center px-10 pt-6">
        <p className="font-md">Select phases for your product</p>
        <div className="flex items-center gap-2">
          <p>Advanced</p>
          <button
            onClick={() => setIsOn(!isOn)}
            className={`relative w-12 h-6 rounded-full ${
              isOn ? "bg-demo hover:bg-hdemo duration-150" : "bg-gray-400"
            }`}
          >
            <div
              className={`absolute bottom-[2px] ${
                !isOn && "left-1"
              } w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                isOn ? "translate-x-6" : "translate-x-0"
              }`}
            ></div>
          </button>
        </div>
      </div>
      <ProductPhase isOn={isOn} initialPhases={phases} />
    </div>
  );
};

export default MainDelivery;
