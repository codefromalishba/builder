import React from "react";

const DreamBuilder = () => {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-12 items-center p-header sm:p-helpPlaning">
      <div>
        <img
          className="rounded-7 shadow-xl"
          src="./images/DreamBuildImg.avif"
        />
      </div>
      <div className="sm:p-dreambuilder">
        <h2 class="text-4xl font-bold mb-4 ">
          Build Your Dream App, No Coding Required
        </h2>
        <p className="text-pai">
          Without being a programmer, Launch Swift will help you design your
          custom apps smoothly. Combining the simplicity of a no-code app
          builder with the technical sophistication of a development studio,
          Launch Swift ensures your app vision becomes a reality.
        </p>
      </div>
    </div>
  );
};

export default DreamBuilder;
