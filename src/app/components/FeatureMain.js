import Image from "next/image";
import React from "react";
import { MdOutlineDelete } from "react-icons/md";

const FeatureMain = ({ isMobile }) => {
  return (
    <div
      className={`flex bg-slate-100 rounded-lg ${
        isMobile ? "flex-row" : "flex-col"
      } h-[calc(100vh-13rem)] overflow-y-auto custom-scrollbar justify-center px-10 py-5 gap-4 mx-6 mb-6`}
    >
      {isMobile ? (
        <>
          <div className="border-2 p-2 w-48 h-fit rounded-xl border-[#A6A6A6]">
            <img src="https://statestreetdebating.site/lauchswift/mobile/login-with-google.png" />
          </div>
          <div className="w-1/3 pt-3">
            <div className="flex gap-2">
              <p className="text-2xl font-semibold">Signup/login with email</p>
              <div className="w-7 p-[5px] h-7 rounded-full border-[1px] bg-white hover-bg-slate-50 items-center justify-center flex">
                <MdOutlineDelete />
              </div>
            </div>
            <div className="py-2">
              <p className="text-lg">$412.84</p>
              <p className="text-lg">2 days</p>
            </div>
            <div>
              <p className="text-md py-1">
                Users sign up on the application using their name, email, and
                password. They can then use these details to log in. Users can
                also reset passwords through the forgot password function.
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-center items-center">
            <Image
              width={450}
              height={300}
              className="h-[300px] w-[450px] mt-40 border-2 p-2 rounded-xl border-[#A6A6A6]"
              src="https://statestreetdebating.site/lauchswift/web/phone-login.png"
            />
          </div>
          <div className=" pt-3">
            <div className="flex gap-2">
              <p className="text-2xl font-semibold">Signup/login with email</p>
              <div className="bg-white cursor-pointer hover-bg-slate-50 w-7 h-7 rounded-md items-center justify-center flex border-[1px]">
                <MdOutlineDelete />
              </div>
            </div>
            <div className="py-2">
              <p className="text-lg">$412.84</p>
              <p className="text-lg">2 days</p>
            </div>
            <div>
              <p className="text-md py-1">
                Users sign up on the application using their name, email, and
                password. They can then use these details to log in. Users can
                also reset passwords through the forgot password function.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FeatureMain;
