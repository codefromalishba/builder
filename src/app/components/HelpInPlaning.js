import React from "react";

const HelpInPlaning = () => {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:justify-between  sm:p-helpPlaning px-5 py-7 sm:items-center ">
      <div className="flex flex-col xs:text-left text-center ">
        <h3 className="text-demo sm:text-p text:sm font-bold">
          Need Help Building Your Vision?
        </h3>
        <h2 className="sm:text-h2 text-md font-bold  max-w-screen-md">
          Break it into smaller tasks and make your vision come to life
        </h2>
        <p className="sm:text-p text:sm font-bold">In just a few minutes</p>
      </div>
      <div className="flex justify-center ">
        <div className="border w-max p-btn bg-black text-white rounded-8 hover:bg-demo  cursor-pointer">
          <p>Help Me Find A Plan</p>
        </div>
      </div>
    </div>
  );
};

export default HelpInPlaning;
