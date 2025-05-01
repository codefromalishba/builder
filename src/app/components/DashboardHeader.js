"use client";
import { signOut } from "firebase/auth";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { auth } from "../firebase";

const DashboardHeader = () => {
  const profile = useSelector((state) => state.profile);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Close dropdown on outside click (optional for UX)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".profile-dropdown")) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("recentBuildCardId");
    signOut(auth)
      .then(() => {
        dispatch(deleteUser());
        dispatch(deleteFeatures());
        dispatch(deleteBuildCard());
        router.push("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Get app name from the incomplete build card
  const currentAppName = profile.buildCards?.find(
    (card) => card.status === "incomplete"
  )?.name;
  return (
    <div>
      <div className="bg-black p-3 h-[4.5rem] flex items-center justify-between">
        <div className="flex items-center sm:gap-[7rem]">
          <img
            className="w-[140px] h-7"
            src="./images/LaunchSwiftLogo.avif"
            alt="logo"
          />
          <div>
            <p className="text-white font-bold">{currentAppName}</p>
          </div>
        </div>

        <div className=" flex gap-2">
          <div className="relative profile-dropdown">
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-11 h-10 rounded-md bg-demo flex items-center justify-center cursor-pointer"
            >
              <p className="text-white px-1 font-semibold text-xl">
                {profile?.name[0]?.toUpperCase()}
              </p>
            </div>

            {/* Log Out Dropdown */}
            {dropdownOpen && (
              <div className="absolute top-12 right-0 left-0 py-2 w-40 bg-white rounded-md shadow-xl z-50">
                <Link
                  href="#"
                  onClick={handleLogout}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Log Out
                </Link>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-white font-normal">{profile.name}</p>
            <p className="text-white font-medium text-xs">{profile.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
