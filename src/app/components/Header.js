"use client";
import React, { useEffect, useState } from "react";
import SignIn from "./SignIn";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { resetProfile } from "../store/profileSlice";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setDropdownOpen(false);
        setIsLoggedIn(true);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(resetProfile());
        toast.success("Logged out successfully");
        setIsLoggedIn(false);
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <>
      <div className="bg-black p-header flex justify-between">
        <img
          className="w-[202px] h-10 cursor-pointer"
          src="./images/LaunchSwiftLogo.avif"
          alt="logo"
        />

        {loggedIn && profile ? (
          <div className="flex justify-center gap-2 items-center">
            <Link href="/feature">
              <p className="text-white h-10 px-2 flex items-center cursor-pointer border rounded-8 border-demo bg-demo hover:bg-hdemo duration-150">
                Create Build Card
              </p>
            </Link>
            {profile && (
              <div className=" flex gap-2">
                <div className="relative profile-dropdown">
                  {profile?.name[0] && (
                    <div
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="w-11 h-10 rounded-md bg-demo hover:bg-hdemo duration-150 flex items-center justify-center cursor-pointer"
                    >
                      <p className="text-white px-1 font-semibold text-xl">
                        {profile?.name[0]?.toUpperCase()}
                      </p>
                    </div>
                  )}

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
                  <p className="text-white font-medium text-xs">
                    {profile.email}
                  </p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex justify-end gap-8 items-center text-p">
            <p className="text-white cursor-pointer" onClick={handleOpenPopup}>
              Sign in
            </p>
            <p
              className="text-white cursor-pointer border rounded-8 border-demo bg-demo hover:bg-hdemo duration-150 p-btn hover:bg-black"
              onClick={handleOpenPopup}
            >
              Get Free Demo
            </p>
          </div>
        )}
      </div>

      {/* Step 4: Render popup conditionally */}
      {isPopupOpen && <SignIn handleClosePopup={handleClosePopup} />}
    </>
  );
};

export default Header;
