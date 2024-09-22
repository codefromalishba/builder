"use client";
import React, { useState } from "react";

const SignIn = ({ handleClosePopup }) => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="fixed inset-0 w-full h-full z-40 bg-black bg-opacity-60 flex justify-center items-center">
      <div className=" grid sm:grid-cols-2 w-5/6 sm:w-3/6 h-3/4 z-50 bg-white rounded-lg shadow-lg">
        <div className="bg-gray-100 hidden sm:block">
          <img
            src="./images/SignInImg.avif"
            alt="Launch Swift"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full p-4 bg-white flex flex-col relative overflow-y-auto">
          <button
            onClick={handleClosePopup}
            className="absolute top-4 right-4 text-gray-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="md:py-8 flex-grow flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {isSignIn ? "Sign in" : "Sign up"}
            </h2>
            <p className="text-gray-500 mb-6">
              {isSignIn ? "Sign in with email!" : "Sign up with email!"}
            </p>

            <form action="#" method="POST" className="space-y-4">
              {!isSignIn && (
                <div>
                  <label htmlFor="text" className="block text-gray-600 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="text"
                    name="text"
                    placeholder="Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                    required
                  />
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-gray-600 mb-2">
                  Company Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Company Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-gray-600 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter password"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-400 text-white py-3 rounded-lg hover:bg-demo"
              >
                {isSignIn ? "Sign In" : "Create Account"}
              </button>
            </form>

            <p className="mt-4 text-gray-600 flex justify-center">
              {isSignIn ? "Don't have an account?" : "Already have an account?"}
              <span
                onClick={() => setIsSignIn(!isSignIn)}
                className="text-demo hover:underline cursor-pointer"
              >
                {isSignIn ? " Sign Up" : " Sign In"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
