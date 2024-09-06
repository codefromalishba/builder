import React from "react";

const Header = () => {
  return (
    <div className="bg-black p-header flex justify-between">
      <img
        className=" w-[202px] h-10"
        src="./images/LaunchSwiftLogo.avif"
        alt="logo"
      />
      <div className="flex justify-end gap-8  items-center text-p">
        <p className="text-white">Sign in</p>
        <p className="text-white border rounded-8 border-demo bg-demo p-btn ">
          Get Free Demo
        </p>
      </div>
    </div>
  );
};

export default Header;
