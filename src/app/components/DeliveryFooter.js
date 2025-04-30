import React, { useState } from "react";
import AppName from "./AppName";
import { useDispatch, useSelector } from "react-redux";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { setProfile } from "../store/profileSlice";
import { calculateFeatureTotals } from "../utils/calculateTotal";
import { initialPhases } from "@/data";

const DeliveryFooter = () => {
  const user = useSelector((state) => state.profile);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isAppNamePopupOpen, setIsAppNamePopupOpen] = useState(false);
  const dispatch = useDispatch();
  const db = getFirestore();
  const { allFeatures, selectedPhases, speed } = useSelector(
    (state) => state.feature
  );

  const uniqueFeatures = allFeatures.filter(
    (feature, index, self) =>
      index === self.findIndex((f) => f.id === feature.id)
  );

  const { fixedCost, customizationCost, totalCost, indicativeDurationInWeeks } =
    calculateFeatureTotals(
      uniqueFeatures,
      false,
      selectedPhases,
      initialPhases,
      speed
    );

  const durationLabel = `${indicativeDurationInWeeks} ${
    indicativeDurationInWeeks === 1 ? "week" : "weeks"
  }`;

  const handleOpenAppNamePopup = () => {
    setIsAppNamePopupOpen(true);
    document.body.classNameList.add("overflow-hidden"); // Prevent scrolling
  };

  const handleCloseAppNamePopup = () => {
    setIsAppNamePopupOpen(false);
    document.body.classNameList.remove("overflow-hidden"); // Re-enable scrolling
  };

  const handleUpdateDelivery = () => {
    // setLoading(true);
    const userRef = doc(db, "users", user.uid);

    getDoc(userRef)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          const userData = docSnapshot.data();

          userData.buildCards = Array.isArray(userData.buildCards)
            ? userData.buildCards
            : [];

          const incompleteBuildCardIndex = userData.buildCards.findIndex(
            (card) => card.status === "incomplete"
          );

          console.log("incompleteBuildCardIndex", incompleteBuildCardIndex);
          if (incompleteBuildCardIndex !== -1) {
            console.log("updating existing...");

            const platforms = initialPhases[0].platform;

            const phasesSelected = initialPhases.map((phase) => ({
              id: phase.id,
              name: phase.name,
              selected: selectedPhases.includes(parseInt(phase.id)),
            }));

            console.log("initialPhases", initialPhases);

            console.log("phasesSelected", phasesSelected);
            userData.buildCards[incompleteBuildCardIndex] = {
              ...userData.buildCards[incompleteBuildCardIndex],
              platforms: platforms,
              speed,
              phases: phasesSelected,
              duration: indicativeDurationInWeeks,
              fixedCost: fixedCost,
              customizationCost: customizationCost,
              totalCost: totalCost,
            };

            // Save the id of the updated build card to local storage
            localStorage.setItem(
              "recentBuildCardId",
              userData.buildCards[incompleteBuildCardIndex].id
            );
          }

          updateDoc(userRef, { buildCards: userData.buildCards })
            .then(() => {
              console.log("Build card added/updated successfully");
              router.push(`/delivery`);
              // .then(() => setLoading(false));
              dispatch(setProfile(userData));
            })

            .catch((error) => {
              setLoading(false);
              console.error("Error updating document: ", error);
            });
        } else {
          console.error("User document does not exist");
          setLoading(false);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error getting document:", error);
      });
  };

  return (
    <>
      <div className=" grid grid-cols-4  h-[80px]">
        <div className=" flex justify-between bg-white gap-7 col-span-3 pt-4 pb-4 px-20">
          <div className="flex flex-col gap-2 px-2 justify-start ">
            <p className="text-xs">Customization Cost</p>
            <p className="font-extrabold text-xl">
              {customizationCost.toFixed(0)} $
            </p>
          </div>
          <div>
            <p className="text-2xl text-[#A6A6A6] ">+</p>
          </div>
          <div className="flex flex-col gap-2 px-2 justify-start ">
            <p className="text-xs">Fixed Cost</p>
            <p className="font-extrabold text-xl">{fixedCost.toFixed(0)} $</p>
          </div>
          <div>
            <p className="text-2xl text-[#A6A6A6] ">=</p>
          </div>
          <div className="flex flex-col gap-2 px-2 justify-start ">
            <p className="text-xs">Total Cost</p>
            <p className="font-extrabold text-xl">{totalCost} $</p>
          </div>
          <div className="flex flex-col gap-2 px-2 justify-start  border-l-[3px]  pl-7 border-[#A6A6A6]">
            <p className="text-xs">Indicative Duration</p>
            <p className="font-extrabold text-xl">{durationLabel}</p>
          </div>
        </div>
        <div
          onClick={handleUpdateDelivery}
          className="bg-demo col-span-1 flex justify-center py-6 cursor-pointer items-center h-full border border-gray-500"
        >
          <p className=" ">Done</p>
        </div>
      </div>
      {/* {isAppNamePopupOpen && (
        <AppName handleCloseAppNamePopup={handleCloseAppNamePopup} />
      )} */}
    </>
  );
};

export default DeliveryFooter;
