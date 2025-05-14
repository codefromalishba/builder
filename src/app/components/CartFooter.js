"use client";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import delivery from "../delivery/page";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { calculateFeatureTotals } from "../utils/calculateTotal";
import { setProfile } from "../store/profileSlice";

const CartFooter = () => {
  const allFeatures = useSelector((state) => state.feature.allFeatures);

  const [loading, setLoading] = useState(false);
  const featureIds = allFeatures.map((f) => f.id);
  const db = getFirestore();
  const user = useSelector((state) => state.profile);
  const router = useRouter();

  const { fixedCost, customizationCost, totalCost, indicativeDurationInWeeks } =
    calculateFeatureTotals(allFeatures);

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
    console.log("newBuildCard", newBuildCard);

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

            // Save the id of the updated build card to local storage
            localStorage.setItem(
              "recentBuildCardId",
              userData.buildCards[incompleteBuildCardIndex].id
            );
          } else {
            // Add a new incomplete build card
            userData.buildCards.push(newBuildCard);

            // Save the id of the newly added build card to local storage
            localStorage.setItem("recentBuildCardId", newBuildCard.id);
          }

          updateDoc(userRef, { buildCards: userData.buildCards })
            .then(() => {
              console.log("Build card added/updated successfully");
              router.push(`/delivery`);
              // .then(() => setLoading(false));
              // dispatch(setProfile(userData));
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
    <div>
      <Link href="/delivery">
        <motion.div
          whileTap={{ scale: 0.95 }} // Slight shrink on click
          transition={{ duration: 0.2, ease: "easeInOut" }} // Smooth transition
          className="bg-demo flex justify-center py-6 cursor-pointer items-center h-full border border-gray-500 shadow-md"
        >
          <p
            onClick={addIncompleteBuildCard}
            className="font-semibold text-gray-800 transition-all duration-300"
          >
            Plan delivery
          </p>
        </motion.div>
      </Link>
    </div>
  );
};

export default CartFooter;
