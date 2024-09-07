import React from "react";

const DeployDesign = () => {
  return (
    <div
      className="relative h-[350px] md:h-[680px] bg-cover bg-center py-24"
      style={{
        backgroundImage:
          "url(https://webappbuilder.netlify.app/_next/static/media/banner.c995ec0e.png)",
      }}
    >
      <div className="relative top-1/3 flex items-center justify-center h-5 bg-demo w-5  rounded-6 "></div>
      <div className="cir cir2"></div>
      <div className="cir cir3"></div>
      <div className="cir cir4"></div>
      <div className=" flex justify-center ">
        <img className="w-[120px] h-[120px]" src="./images/DeployImg1.avif" />
      </div>
    </div>
  );
};

export default DeployDesign;
