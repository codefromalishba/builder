"use client";
import React, { useState } from "react";
import SignIn from "./SignIn";

const Header = () => {
  // Step 1: Set up state to track the popup visibility
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
    document.body.classList.add("overflow-hidden"); // Prevent scrolling
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    document.body.classList.remove("overflow-hidden"); // Re-enable scrolling
  };

  return (
    <>
      {/* Header */}
      <div className="bg-black p-header flex justify-between">
        <img
          className="w-[202px] h-10"
          src="./images/LaunchSwiftLogo.avif"
          alt="logo"
        />

        <div className="flex justify-end gap-8 items-center text-p">
          {/* Step 3: Use onClick in JSX */}
          <p
            className="text-white cursor-pointer"
            onClick={handleOpenPopup} // Open popup when Sign in is clicked
          >
            Sign in
          </p>
          <p
            className="text-white cursor-pointer border rounded-8 border-demo bg-demo p-btn hover:bg-black"
            onClick={handleOpenPopup}
          >
            Get Free Demo
          </p>
        </div>
      </div>

      {/* Step 4: Render popup conditionally */}
      {isPopupOpen && <SignIn handleClosePopup={handleClosePopup} />}
    </>
  );
};

export default Header;
