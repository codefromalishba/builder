import React from "react";

const AppPlatform = () => {
  return (
    <div className="sm:p-mhelpPlaning p-header">
      <h2 class="text-4xl font-bold py-10 mb-8  text-center">
        An app platform for every type of business
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 items-center ">
        <div className="xs:text-left text-center">
          <h2 class="text-lg font-bold mb-4 ">Your Dream App, Made Real</h2>
          <p className="pb-4 text-pai">
            It takes weeks, not months to turn your idea into reality using
            Launch Swift. No code is required.
          </p>
          <a className="text-demo pb-3 border-b border-demo cursor-pointer">
            Learn More
          </a>
        </div>
        <div className="flex justify-center">
          <img
            className="xs:w-[248px] xs:h-[360px] w-[250px] h-[250px]"
            src="./images/platformImg.avif"
            alt="Platform Img"
          />
        </div>
        <div className="xs:text-left text-center">
          <p className="pb-4 text-pai">
            Our team will help throughout the process of customization so that
            the app meets your vision. You now own everything including code,
            and you finally have that dream app.
          </p>
          <h2 class="text-lg font-bold mb-4 ">Dr Hassan Yasin Moodit</h2>
          <a className="text-demo pb-3 border-b border-demo cursor-pointer">
            Read moodit case study
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppPlatform;
