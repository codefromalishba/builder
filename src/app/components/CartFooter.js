"use client";
import Link from "next/link";
import React from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase"; // adjust path to your Firebase config
import { useSelector } from "react-redux";
import delivery from "../delivery/page";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const CartFooter = () => {
  const router = useRouter();
  const selectedFeatures = useSelector((state) => state.build.selectedFeatures); // adjust based on your state
  const userId = useSelector((state) => state.auth.userId); // or from Firebase auth

  const handleDeliveryClick = async () => {
    try {
      // Save selected features to Firebase
      await setDoc(doc(db, "userFeatures", userId), {
        features: selectedFeatures,
        timestamp: new Date(),
      });

      // Navigate to the delivery page
      router.push("/delivery");
    } catch (error) {
      console.error("Error saving to Firebase:", error);
    }
  };
  return (
    <div>
      <Link href="/delivery">
        <motion.div
          whileTap={{ scale: 0.95 }} // Slight shrink on click
          transition={{ duration: 0.2, ease: "easeInOut" }} // Smooth transition
          className="bg-demo flex justify-center py-6 cursor-pointer items-center h-full border border-gray-500 rounded-lg shadow-md"
        >
          <p className="font-semibold text-gray-800 transition-all duration-300">
            Plan delivery
          </p>
        </motion.div>
      </Link>
    </div>
  );
};

export default CartFooter;
