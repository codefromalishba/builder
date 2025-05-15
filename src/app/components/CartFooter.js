"use client";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import delivery from "../delivery/page";
import { useSelector } from "react-redux";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useFeatureTotals } from "../utils/calculateTotal";
import { setProfile } from "../store/profileSlice";
import toast from "react-hot-toast";

const CartFooter = () => {
  const allFeatures = useSelector((state) => state.feature.allFeatures);

  const [loading, setLoading] = useState(false);
  const featureIds = allFeatures.map((f) => f.id);
  const db = getFirestore();
  const user = useSelector((state) => state.profile);
  const router = useRouter();

  const { fixedCost, customizationCost, totalCost, indicativeDurationInWeeks } =
    useFeatureTotals(allFeatures);

  const defaultPhases = [
    {
      id: 1,
      name: "Product Roadmap",
      selected: false,
    },
    {
      id: 2,
      name: "Design",
      selected: true,
    },
    {
      id: 3,
      name: "Professional Prototype",
      selected: false,
    },
    {
      id: 4,
      name: "MVP",
      selected: true,
    },
    {
      id: 5,
      name: "Full Build",
      selected: false,
    },
  ];
  const addIncompleteBuildCard = () => {
    setLoading(true);
    const userRef = doc(db, "users", user.uid);
    const newBuildCard = {
      id: uuidv4(),
      name: "My Project Name",
      status: "incomplete",
      fixedCost: fixedCost,
      customizationCost: customizationCost,
      totalCost: totalCost,
      platforms: ["web"],
      speed: 3,
      duration: indicativeDurationInWeeks,
      phases: defaultPhases,
      deliveryDate: "",
      features: featureIds,
      customFeatures: "null",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      details: "",
    };

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

          if (incompleteBuildCardIndex !== -1) {
            console.log("updating existing...");

            userData.buildCards[incompleteBuildCardIndex] = {
              ...userData.buildCards[incompleteBuildCardIndex],
              platforms: ["ios"],
              features: featureIds,
              customFeatures: "null",
              duration: indicativeDurationInWeeks,
              fixedCost: fixedCost,
              customizationCost: customizationCost,
              totalCost: totalCost,
              details: "",
            };
          } else {
            userData.buildCards.push(newBuildCard);
          }

          updateDoc(userRef, { buildCards: userData.buildCards })
            .then(() => {
              toast.success("Build card added/updated successfully!");
              router.push(`/delivery`);
            })

            .catch((error) => {
              toast.error("Something went wrong!");
              setLoading(false);
            });
        } else {
          toast.error("Something went wrong!");
          setLoading(false);
        }
      })
      .catch((error) => {
        toast.error("Something went wrong!");
        setLoading(false);
      });
  };

  return (
    <div>
      <Link href="/delivery">
        <div className="bg-demo hover:bg-hdemo duration-150 flex justify-center py-6 cursor-pointer items-center h-full shadow-md">
          <p
            onClick={addIncompleteBuildCard}
            className="text-xl text-white font-semibold transition-all duration-300"
          >
            {loading ? "Updating..." : "Plan delivery"}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CartFooter;
