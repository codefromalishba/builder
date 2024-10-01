import React from "react";

const DemoImg = () => {
  return (
    <div className="flex min-h-[50vh] relative sm:m-img">
      <img
        className=" absolute -top-1/3  rounded-7 shadow-xl"
        src="./images/demoimg.avif"
        alt="Demo Img"
      />
    </div>
  );
};

export default DemoImg;
