"use client";
import React, { useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { TfiAndroid } from "react-icons/tfi";
import { FaApple } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { IoDesktop } from "react-icons/io5";
import { BsInfoCircle } from "react-icons/bs";

const ProductPhase = ({ isOn }) => {
  return (
    <>
      {!isOn ? (
        <div className="grid grid-cols-5 px-10 py-5 gap-5">
          <div className=" relative border-[1px] border-demo rounded-md p-5 ">
            <div className="absolute top-2 right-2 ">
              <div className="">
                <IoIosCheckmarkCircle className="text-2xl text-demo" />
              </div>
            </div>
            <div className=" flex gap-2 ">
              <div className="w-12 h-12 ">
                <img src="https://statestreetdebating.site/lauchswift/icons/login-with-google.png" />
              </div>
              <div>
                <div className="flex gap-1 py-1">
                  <p className="font-bold text-demo max-w-[100px] text-sm">
                    Product Roadmap
                  </p>
                  <BsInfoCircle className="text-gray-400" />
                </div>
                <p className="font-bold text-xs pb-1">
                  Estimated Duration:
                  <span className="font-normal">1 Weeks</span>
                </p>
                <p className="font-bold text-xs">
                  Estimated Delivery Date:
                  <span className="font-normal"> 05-Oct-2024</span>
                </p>
              </div>
            </div>
          </div>
          <div className=" relative border-[1px] border-demo rounded-md p-5 ">
            <div className="absolute top-2 right-2 ">
              <div className="">
                <IoIosCheckmarkCircle className="text-2xl text-demo" />
              </div>
            </div>
            <div className=" flex gap-2 ">
              <div className="w-12 h-12 ">
                <img src="https://statestreetdebating.site/lauchswift/icons/login-with-google.png" />
              </div>
              <div>
                <div className="flex gap-1 py-1">
                  <p className="font-bold text-demo max-w-[100px] text-sm">
                    Product Roadmap
                  </p>
                  <BsInfoCircle className="text-gray-400" />
                </div>
                <p className="font-bold text-xs pb-1">
                  Estimated Duration:
                  <span className="font-normal">1 Weeks</span>
                </p>
                <p className="font-bold text-xs">
                  Estimated Delivery Date:
                  <span className="font-normal"> 05-Oct-2024</span>
                </p>
              </div>
            </div>
          </div>
          <div className=" relative border-[1px] border-demo rounded-md p-5 ">
            <div className="absolute top-2 right-2 ">
              <div className="">
                <IoIosCheckmarkCircle className="text-2xl text-demo" />
              </div>
            </div>
            <div className=" flex gap-2 ">
              <div className="w-12 h-12 ">
                <img src="https://statestreetdebating.site/lauchswift/icons/login-with-google.png" />
              </div>
              <div>
                <div className="flex gap-1 py-1">
                  <p className="font-bold text-demo max-w-[100px] text-sm">
                    Product Roadmap
                  </p>
                  <BsInfoCircle className="text-gray-400" />
                </div>
                <p className="font-bold text-xs pb-1">
                  Estimated Duration:
                  <span className="font-normal">1 Weeks</span>
                </p>
                <p className="font-bold text-xs">
                  Estimated Delivery Date:
                  <span className="font-normal"> 05-Oct-2024</span>
                </p>
              </div>
            </div>
          </div>
          <div className=" relative border-[1px] border-demo rounded-md p-5 ">
            <div className="absolute top-2 right-2 ">
              <div className="">
                <IoIosCheckmarkCircle className="text-2xl text-demo" />
              </div>
            </div>
            <div className=" flex gap-2 ">
              <div className="w-12 h-12 ">
                <img src="https://statestreetdebating.site/lauchswift/icons/login-with-google.png" />
              </div>
              <div>
                <div className="flex gap-1 py-1">
                  <p className="font-bold text-demo max-w-[100px] text-sm">
                    Product Roadmap
                  </p>
                  <BsInfoCircle className="text-gray-400" />
                </div>
                <p className="font-bold text-xs pb-1">
                  Estimated Duration:
                  <span className="font-normal">1 Weeks</span>
                </p>
                <p className="font-bold text-xs">
                  Estimated Delivery Date:
                  <span className="font-normal"> 05-Oct-2024</span>
                </p>
              </div>
            </div>
          </div>
          <div className=" relative border-[1px] border-demo rounded-md p-5 ">
            <div className="absolute top-2 right-2 ">
              <div className="">
                <IoIosCheckmarkCircle className="text-2xl text-demo" />
              </div>
            </div>
            <div className=" flex gap-2 ">
              <div className="w-12 h-12 ">
                <img src="https://statestreetdebating.site/lauchswift/icons/login-with-google.png" />
              </div>
              <div>
                <div className="flex gap-1 py-1">
                  <p className="font-bold text-demo max-w-[100px] text-sm">
                    Product Roadmap
                  </p>
                  <BsInfoCircle className="text-gray-400" />
                </div>
                <p className="font-bold text-xs pb-1">
                  Estimated Duration:
                  <span className="font-normal">1 Weeks</span>
                </p>
                <p className="font-bold text-xs">
                  Estimated Delivery Date:
                  <span className="font-normal"> 05-Oct-2024</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-5 px-10 py-5 gap-5">
          <div className=" relative border-[1px] rounded-md h-fit border-demo">
            <div className="absolute top-2 right-2">
              <IoIosCheckmarkCircle className="text-2xl text-demo" />
            </div>
            <div>
              <div className="rounded-md rounded-b-none p-5 bg-slate-200">
                <div className="flex p-5 py-1 gap-1">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="text-4xl text-black"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.5 3.75a.25.25 0 0 1 .25-.25h13.5a.25.25 0 0 1 .25.25v10a.75.75 0 0 0 1.5 0v-10A1.75 1.75 0 0 0 17.25 2H3.75A1.75 1.75 0 0 0 2 3.75v16.5c0 .966.784 1.75 1.75 1.75h7a.75.75 0 0 0 0-1.5h-7a.25.25 0 0 1-.25-.25V3.75Z"></path>
                    <path d="M6.25 7a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Zm-.75 4.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm16.28 4.53a.75.75 0 1 0-1.06-1.06l-4.97 4.97-1.97-1.97a.75.75 0 1 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5.5-5.5Z"></path>
                  </svg>
                  <p className="text-demo font-bold text-sm max-w-[100px]">
                    Product Roadmap
                  </p>
                  <BsInfoCircle className="text-gray-400" />
                </div>
              </div>
              <div className="flex p-5 justify-between pt-5">
                <p className="text-xs font-bold">Platform</p>
              </div>
              <div className="flex px-5 justify-start py-4 gap-4">
                <div className="flex flex-col items-center">
                  <FaApple className="text-2xl" />
                  <p className="text-xs text-gray-400 pt-2">iOS</p>
                </div>
                <div className="flex flex-col items-center">
                  <MdWeb className="text-2xl" />
                  <p className="text-xs text-gray-400 pt-2">Web</p>
                </div>
              </div>
              <div className="p-5 border-t-[1px] border-b-[1px]">
                <p className="font-bold text-xs">Features</p>
                <p className="text-gray-400 text-xs pt-2">
                  4 Features Selected{" "}
                </p>
              </div>
              <div className="p-5">
                <p className="font-bold text-xs">Estimated Duration:</p>
                <p className="text-xs">1 Weeks</p>
                <p className="font-bold text-xs pt-2">
                  Estimated Delivery Date:
                </p>
                <p className="text-xs">06-Oct-2024</p>
              </div>
            </div>
          </div>
          <div className=" relative border-[1px] rounded-md h-fit border-demo">
            <div className="absolute top-2 right-2">
              <IoIosCheckmarkCircle className="text-2xl text-demo" />
            </div>
            <div>
              <div className="rounded-md rounded-b-none p-5 bg-slate-200">
                <div className="flex p-5 py-1 gap-1">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="text-4xl text-black"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.5 3.75a.25.25 0 0 1 .25-.25h13.5a.25.25 0 0 1 .25.25v10a.75.75 0 0 0 1.5 0v-10A1.75 1.75 0 0 0 17.25 2H3.75A1.75 1.75 0 0 0 2 3.75v16.5c0 .966.784 1.75 1.75 1.75h7a.75.75 0 0 0 0-1.5h-7a.25.25 0 0 1-.25-.25V3.75Z"></path>
                    <path d="M6.25 7a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Zm-.75 4.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm16.28 4.53a.75.75 0 1 0-1.06-1.06l-4.97 4.97-1.97-1.97a.75.75 0 1 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5.5-5.5Z"></path>
                  </svg>
                  <p className="text-demo font-bold text-sm max-w-[100px]">
                    Product Roadmap
                  </p>
                  <BsInfoCircle className="text-gray-400" />
                </div>
              </div>
              <div className="flex p-5 justify-between pt-5">
                <p className="text-xs font-bold">Platform</p>
              </div>
              <div className="flex px-5 justify-start py-4 gap-4">
                <div className="flex flex-col items-center">
                  <FaApple className="text-2xl" />
                  <p className="text-xs text-gray-400 pt-2">iOS</p>
                </div>
                <div className="flex flex-col items-center">
                  <MdWeb className="text-2xl" />
                  <p className="text-xs text-gray-400 pt-2">Web</p>
                </div>
              </div>
              <div className="p-5 border-t-[1px] border-b-[1px]">
                <p className="font-bold text-xs">Features</p>
                <p className="text-gray-400 text-xs pt-2">
                  4 Features Selected{" "}
                </p>
              </div>
              <div className="p-5">
                <p className="font-bold text-xs">Estimated Duration:</p>
                <p className="text-xs">1 Weeks</p>
                <p className="font-bold text-xs pt-2">
                  Estimated Delivery Date:
                </p>
                <p className="text-xs">06-Oct-2024</p>
              </div>
            </div>
          </div>
          <div className=" relative border-[1px] rounded-md h-fit border-demo">
            <div className="absolute top-2 right-2">
              <IoIosCheckmarkCircle className="text-2xl text-demo" />
            </div>
            <div>
              <div className="rounded-md rounded-b-none p-5 bg-slate-200">
                <div className="flex p-5 py-1 gap-1">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="text-4xl text-black"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.5 3.75a.25.25 0 0 1 .25-.25h13.5a.25.25 0 0 1 .25.25v10a.75.75 0 0 0 1.5 0v-10A1.75 1.75 0 0 0 17.25 2H3.75A1.75 1.75 0 0 0 2 3.75v16.5c0 .966.784 1.75 1.75 1.75h7a.75.75 0 0 0 0-1.5h-7a.25.25 0 0 1-.25-.25V3.75Z"></path>
                    <path d="M6.25 7a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Zm-.75 4.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm16.28 4.53a.75.75 0 1 0-1.06-1.06l-4.97 4.97-1.97-1.97a.75.75 0 1 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5.5-5.5Z"></path>
                  </svg>
                  <p className="text-demo font-bold text-sm max-w-[100px]">
                    Product Roadmap
                  </p>
                  <BsInfoCircle className="text-gray-400" />
                </div>
              </div>
              <div className="flex p-5 justify-between pt-5">
                <p className="text-xs font-bold">Platform</p>
              </div>
              <div className="flex px-5 justify-start py-4 gap-4">
                <div className="flex flex-col items-center">
                  <FaApple className="text-2xl" />
                  <p className="text-xs text-gray-400 pt-2">iOS</p>
                </div>
                <div className="flex flex-col items-center">
                  <MdWeb className="text-2xl" />
                  <p className="text-xs text-gray-400 pt-2">Web</p>
                </div>
              </div>
              <div className="p-5 border-t-[1px] border-b-[1px]">
                <p className="font-bold text-xs">Features</p>
                <p className="text-gray-400 text-xs pt-2">
                  4 Features Selected{" "}
                </p>
              </div>
              <div className="p-5">
                <p className="font-bold text-xs">Estimated Duration:</p>
                <p className="text-xs">1 Weeks</p>
                <p className="font-bold text-xs pt-2">
                  Estimated Delivery Date:
                </p>
                <p className="text-xs">06-Oct-2024</p>
              </div>
            </div>
          </div>
          <div className=" relative border-[1px] rounded-md h-fit border-demo">
            <div className="absolute top-2 right-2">
              <IoIosCheckmarkCircle className="text-2xl text-demo" />
            </div>
            <div>
              <div className="rounded-md rounded-b-none p-5 bg-slate-200">
                <div className="flex p-5 py-1 gap-1">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="text-4xl text-black"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.5 3.75a.25.25 0 0 1 .25-.25h13.5a.25.25 0 0 1 .25.25v10a.75.75 0 0 0 1.5 0v-10A1.75 1.75 0 0 0 17.25 2H3.75A1.75 1.75 0 0 0 2 3.75v16.5c0 .966.784 1.75 1.75 1.75h7a.75.75 0 0 0 0-1.5h-7a.25.25 0 0 1-.25-.25V3.75Z"></path>
                    <path d="M6.25 7a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Zm-.75 4.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm16.28 4.53a.75.75 0 1 0-1.06-1.06l-4.97 4.97-1.97-1.97a.75.75 0 1 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5.5-5.5Z"></path>
                  </svg>
                  <p className="text-demo font-bold text-sm max-w-[100px]">
                    Product Roadmap
                  </p>
                  <BsInfoCircle className="text-gray-400" />
                </div>
              </div>
              <div className="flex p-5 justify-between pt-5">
                <p className="text-xs font-bold">Platform</p>
              </div>
              <div className="flex px-5 justify-start py-4 gap-4">
                <div className="flex flex-col items-center">
                  <FaApple className="text-2xl" />
                  <p className="text-xs text-gray-400 pt-2">iOS</p>
                </div>
                <div className="flex flex-col items-center">
                  <MdWeb className="text-2xl" />
                  <p className="text-xs text-gray-400 pt-2">Web</p>
                </div>
              </div>
              <div className="p-5 border-t-[1px] border-b-[1px]">
                <p className="font-bold text-xs">Features</p>
                <p className="text-gray-400 text-xs pt-2">
                  4 Features Selected{" "}
                </p>
              </div>
              <div className="p-5">
                <p className="font-bold text-xs">Estimated Duration:</p>
                <p className="text-xs">1 Weeks</p>
                <p className="font-bold text-xs pt-2">
                  Estimated Delivery Date:
                </p>
                <p className="text-xs">06-Oct-2024</p>
              </div>
            </div>
          </div>
          <div className=" relative border-[1px] rounded-md h-fit border-demo">
            <div className="absolute top-2 right-2">
              <IoIosCheckmarkCircle className="text-2xl text-demo" />
            </div>
            <div>
              <div className="rounded-md rounded-b-none p-5 bg-slate-200">
                <div className="flex p-5 py-1 gap-1">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="text-4xl text-black"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.5 3.75a.25.25 0 0 1 .25-.25h13.5a.25.25 0 0 1 .25.25v10a.75.75 0 0 0 1.5 0v-10A1.75 1.75 0 0 0 17.25 2H3.75A1.75 1.75 0 0 0 2 3.75v16.5c0 .966.784 1.75 1.75 1.75h7a.75.75 0 0 0 0-1.5h-7a.25.25 0 0 1-.25-.25V3.75Z"></path>
                    <path d="M6.25 7a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Zm-.75 4.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm16.28 4.53a.75.75 0 1 0-1.06-1.06l-4.97 4.97-1.97-1.97a.75.75 0 1 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5.5-5.5Z"></path>
                  </svg>
                  <p className="text-demo font-bold text-sm max-w-[100px]">
                    Product Roadmap
                  </p>
                  <BsInfoCircle className="text-gray-400" />
                </div>
              </div>
              <div className="flex p-5 justify-between pt-5">
                <p className="text-xs font-bold">Platform</p>
              </div>
              <div className="flex px-5 justify-start py-4 gap-4">
                <div className="flex flex-col items-center">
                  <FaApple className="text-2xl" />
                  <p className="text-xs text-gray-400 pt-2">iOS</p>
                </div>
                <div className="flex flex-col items-center">
                  <MdWeb className="text-2xl" />
                  <p className="text-xs text-gray-400 pt-2">Web</p>
                </div>
              </div>
              <div className="p-5 border-t-[1px] border-b-[1px]">
                <p className="font-bold text-xs">Features</p>
                <p className="text-gray-400 text-xs pt-2">
                  4 Features Selected{" "}
                </p>
              </div>
              <div className="p-5">
                <p className="font-bold text-xs">Estimated Duration:</p>
                <p className="text-xs">1 Weeks</p>
                <p className="font-bold text-xs pt-2">
                  Estimated Delivery Date:
                </p>
                <p className="text-xs">06-Oct-2024</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPhase;
