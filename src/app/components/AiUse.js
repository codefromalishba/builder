import React from "react";

const AiUse = () => {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-12 items-center p-header sm:p-helpPlaning">
      <div className="sm:p-aiuse xs:text-left text-center">
        <h2 class="text-4xl font-bold mb-4 ">AI at Your Fingertips</h2>
        <p className="pb-4 text-pai">
          We bring in AI with Launch Swift for fast and affordable app
          development. AI provides reusable capabilities from the selected
          template while allowing developers to personalize it for their own
          businesses. Enjoy transparent pricing with fixed costs and clear
          timelines based on features chosen.
        </p>
        <a className="text-demo pb-3 border-b border-demo cursor-pointer">
          How we use AI
        </a>
      </div>
      <div>
        <img
          className="rounded-7 shadow-xl"
          src="./images/AiSupportiveImg.avif"
        />
      </div>
    </div>
  );
};

export default AiUse;
