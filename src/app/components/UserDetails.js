"use client";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { setProfile } from "../store/profileSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const UserDetails = ({ setShow }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.profile);

  const dispatch = useDispatch();
  const router = useRouter();
  const db = getFirestore();
  const isButtonDisabled = !name || !email || !company;

  // const handleSubmit = () => {
  //   // Placeholder for actual submission logic
  //   alert(`Saved:\nName: ${name}\nEmail: ${email}\nCompany: ${company}`);
  //   setShow(false);
  // };

  const handleUserDetails = () => {
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

            userData.buildCards[incompleteBuildCardIndex] = {
              ...userData.buildCards[incompleteBuildCardIndex],
              customerDetails: {
                name,
                email,
                company,
              },
              status: "complete",
            };

            // Save the id of the updated build card to local storage
            localStorage.setItem(
              "recentBuildCardId",
              userData.buildCards[incompleteBuildCardIndex].id
            );
          }

          updateDoc(userRef, { buildCards: userData.buildCards })
            .then(() => {
              console.log("Build card completed successfully");
              router.push(`/summary`);
              setShow(false);
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
    <div className="fixed w-[450px] h-[360px] z-50 bg-white top-[50%] left-1/2 transform -translate-x-[50%] -translate-y-[40%] shadow-lg rounded-md">
      <div className="p-5 w-full h-full">
        <h1 className="text-black px-8 font-semibold text-lg mb-2">
          User Details
        </h1>
        <div className="px-8 flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-black font-bold text-sm">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter your name"
              className="border text-sm border-gray-300 outline-none text-black rounded p-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-black font-bold text-sm">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className="border text-sm border-gray-300 outline-none text-black rounded p-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-black font-bold text-sm">Company</label>
            <input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              type="text"
              placeholder="Enter your company name"
              className="border text-sm border-gray-300 outline-none text-black rounded p-2"
            />
          </div>
          <button
            disabled={isButtonDisabled}
            onClick={handleUserDetails}
            className={`mt-4 p-3 rounded ${
              isButtonDisabled
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-demo text-white"
            }`}
          >
            Save
          </button>
        </div>
      </div>
      <div
        onClick={() => setShow(false)}
        className="absolute top-5 right-5 border border-gray-300 flex justify-center items-center cursor-pointer rounded-full w-8 h-8"
      >
        <IoCloseOutline className="text-gray-500 text-2xl" />
      </div>
    </div>
  );
};

export default UserDetails;
