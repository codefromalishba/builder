import React, { useState } from "react";
import AppName from "./AppName";
import { useDispatch, useSelector } from "react-redux";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { setProfile } from "../store/profileSlice";
import { calculateFeatureTotals } from "../utils/calculateTotal";

const DeliveryFooter = () => {
  const user = useSelector((state) => state.profile);
  const [name, setName] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isAppNamePopupOpen, setIsAppNamePopupOpen] = useState(false);
  const dispatch = useDispatch();
  const db = getFirestore();
  const { allFeatures, selectedPhases, initialPhases, speed } = useSelector(
    (state) => state.feature
  );

  const { fixedCost, customizationCost, totalCost, indicativeDurationInWeeks } =
    calculateFeatureTotals(allFeatures, selectedPhases, initialPhases, speed);

  const durationLabel = `${indicativeDurationInWeeks} ${
    indicativeDurationInWeeks === 1 ? "week" : "weeks"
  }`;

  const handleOpenAppNamePopup = () => {
    setIsAppNamePopupOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const handleCloseAppNamePopup = () => {
    setIsAppNamePopupOpen(false);
    document.body.classList.remove("overflow-hidden"); // typo fixed
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
              selected: selectedPhases.includes(String(phase.id)),
            }));

            userData.buildCards[incompleteBuildCardIndex] = {
              ...userData.buildCards[incompleteBuildCardIndex],
              name,
              platforms: platforms,
              speed,
              phases: phasesSelected,
              duration: indicativeDurationInWeeks,
              fixedCost: fixedCost,
              customizationCost: customizationCost,
              totalCost: totalCost,
              updatedAt: new Date().toISOString(),
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
              handleCloseAppNamePopup();
              router.push(`/summary`);
              dispatch(setProfile(userData));
            })

            .catch((error) => {
              setLoading(false);
              console.error("Error updating document: ", error);
              handleCloseAppNamePopup();
            });
        } else {
          console.error("User document does not exist");
          handleCloseAppNamePopup();
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
          onClick={handleOpenAppNamePopup}
          className="bg-demo col-span-1 flex justify-center py-6 cursor-pointer items-center h-full border border-gray-500"
        >
          <p>Done</p>
        </div>
      </div>
      {isAppNamePopupOpen && (
        <AppName
          name={name}
          setName={setName}
          handleCloseAppNamePopup={handleCloseAppNamePopup}
          handleUpdateDelivery={handleUpdateDelivery}
        />
      )}
    </>
  );
};

export default DeliveryFooter;
