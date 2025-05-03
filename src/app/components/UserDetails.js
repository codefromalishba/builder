"use client";
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const UserDetails = ({ setShow }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  const isButtonDisabled = !name || !email || !company;

  const handleSubmit = () => {
    // Placeholder for actual submission logic
    alert(`Saved:\nName: ${name}\nEmail: ${email}\nCompany: ${company}`);
    setShow(false);
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
            onClick={handleSubmit}
            className={`mt-4 p-3 rounded ${
              isButtonDisabled
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-600 text-white"
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
