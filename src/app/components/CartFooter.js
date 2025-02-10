"use client";
import Link from "next/link";
import React from "react";
import delivery from "../delivery/page";
import { motion } from "framer-motion";

const CartFooter = () => {
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
