"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../firebase";
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { setProfile } from "../store/profileSlice";

const SignIn = ({ handleClosePopup }) => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();
  const db = getFirestore();
  const dispatch = useDispatch();

  const clearAllFields = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const createUser = (user) => {
    const userData = {
      uid: user.uid,
      name: name,
      email: email,
      buildCards: [],
    };
    console.log("createUser", createUser);

    setDoc(doc(db, "users", user.uid), userData)
      .then(() => {
        console.log("Success");

        // Only pass name and email to setProfile
        dispatch(setProfile(userData));

        router.push("/feature");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignIn) {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        const userDocRef = doc(db, "users", user.uid);
        const userSnapshot = await getDoc(userDocRef);

        if (userSnapshot.exists()) {
          const userData = userSnapshot.data();
          dispatch(setProfile(userData));
        }

        alert("Signed in!");
      } else {
        await createUserWithEmailAndPassword(auth, email, password).then(
          async (authUser) => {
            clearAllFields();
            createUser({ uid: authUser.user.uid });
          }
        );
        alert("Account created!");
      }

      handleClosePopup(); // Close popup if needed
      router.push("/feature");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full z-40 bg-black bg-opacity-60 flex justify-center items-center">
      <div className="grid sm:grid-cols-2 w-5/6 sm:w-3/6 h-3/4 z-50 bg-white rounded-lg shadow-lg">
        {/* Image Section */}
        <div className="bg-gray-100 hidden sm:block">
          <img
            src="./images/SignInImg.avif"
            alt="Launch Swift"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="w-full p-4 bg-white flex flex-col relative custom-scrollbar overflow-y-auto">
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

            {/* <form onSubmit={handleSubmit} className="space-y-4"> */}
            {!isSignIn && (
              <div>
                <label htmlFor="name" className="block text-gray-600 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-left text-gray-600 mb-2"
              >
                Company Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Company Email"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-left text-gray-600 mt-2 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={!email || !password}
              className={`w-full mt-3 py-3 rounded-lg text-white transition-all duration-300 ${
                !email || !password
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-demo hover:bg-demo/90"
              }`}
            >
              {isSignIn ? "Sign In" : "Create Account"}
            </button>
            {/* </form> */}

            <p className="mt-4 text-gray-600 flex justify-center">
              {isSignIn ? "Don't have an account?" : "Already have an account?"}
              &nbsp;
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
