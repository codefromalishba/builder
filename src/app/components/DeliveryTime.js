import React from "react";
import { FaRegCircle } from "react-icons/fa";

const DeliveryTime = () => {
  return (
    <div className="bg-slate-100 mt-10 grid grid-cols-3">
      <div className="col-span-2 p-10">
        <p className="text-2xl font-bold">When do you want the delivery?</p>
        <div className="pt-5 flex flex-col justify-between">
          <div className="flex items-center w-full gap-2">
            <div className="w-3/4">
              <div className="bg-white p-5 rounded-md h-40">
                <div className="h-10 flex justify-between">
                  <p className="text-xs mt-4">Relaxed</p>
                  <p className="text-xs mt-4">Slow</p>
                  <p className="text-xs mt-4 text-demo">Standard</p>
                  <p className="text-xs mt-4">Fast</p>
                  <p className="text-xs mt-4">Speedy</p>
                </div>
                <div className="border-[1px] border-black mt-4"></div>
                <div className="h-10 flex justify-between">
                  <div className="text-xs mt-4 text-center">
                    <p>$2,052</p>
                    <p className="pt-1">8 Weeks</p>
                  </div>
                  <div className="text-xs mt-4 text-center">
                    <p>$2,308</p>
                    <p className="pt-1">7 Weeks</p>
                  </div>
                  <div className="text-xs mt-4 text-demo text-center">
                    <p>$2,565</p>
                    <p className="pt-1">6 Weeks</p>
                  </div>
                  <div className="text-xs mt-4 text-center">
                    <p>$2,821</p>
                    <p className="pt-1">5 Weeks</p>
                  </div>
                  <div className="text-xs mt-4 text-center">
                    <p>$3,078</p>
                    <p className="pt-1">4 Weeks</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/4 ">
              <div className="bg-gray-300 w-48 p-2 rounded">
                <div className="flex flex-col p-3 justify-center items-center">
                  <p className="text-xs font-semibold">Standard</p>
                  <p className="text-xs text-center pt-1">
                    The perfect middle ground for anyone with a modest budget
                    and medium-term deadlines
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-5 flex ">
            <div className="bg-white p-5 rounded-md">
              <p className="font-bold">
                If you kick-off on
                <span className="text-demo"> 29-Sep-2024</span>
              </p>
              <p className="pt-2 text-sm text-gray-400">
                Estimated Final delivery:
                <span className="font-bold text-black"> 10-Nov-2024</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 m-10 flex-col border-[1px] border-gray-300 rounded-md p-5">
        <div className="flex items-center justify-between">
          <div>
            <img
              className="w-[140px] h-[26px]"
              src="./images/LaunchSwiftLogo.avif"
              alt="logo"
            />
          </div>
          <div>
            <FaRegCircle className="text-gray-400 text-2xl" />
          </div>
        </div>
        <div>
          <p className="pt-4 font-medium">
            Builder Cloud helps you scale your business
          </p>
          <ul className="list-disc pl-4">
            <li className="py-1 text-black text-xs">
              <span className="font-bold">Commitment-free savings: </span>
              Our customers saved over $4.5m, last year.
            </li>
            <li className="py-1 text-black text-xs">
              <span className="font-bold">World-class analytics: </span>
              Optimise your software and infrastructure.
            </li>
            <li className="py-1 text-black text-xs">
              <span className="font-bold">Best-in-class multi-cloud: </span>
              Azure, AWS, and more. Just one bill (for a lot less).
            </li>
          </ul>
        </div>
        <div className="bg-slate-200 mt-3 h-30 p-5 w-full rounded-md">
          <div className="flex justify-between items-center h-8">
            <p className="font-bold">Number of users</p>
            <p className="font-bold">50k+</p>
          </div>
          <div className="border-[1px] border-demo mt-4"></div>
          <div className="flex justify-between items-center h-8">
            <p className="text-xs mt-4 text-center">0-500</p>
            <p className="text-xs mt-4 text-center">500-5k</p>
            <p className="text-xs mt-4 text-center">5k-50k</p>
            <p className="text-xs mt-4 text-center">50k+</p>
          </div>
        </div>
        <div className="mt-4">
          <p className=" text-2xl">
            <span className="font-bold"> $1,000 + * </span> /month
          </p>
          <p className="text-xs text-gray-600 pt-5 font-thin">
            *This is an estimated price for cloud hosting and will vary
            according to usage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryTime;
