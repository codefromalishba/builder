import React from "react";
import FaqPart from "./FaqPart";

const FAQs = () => {
  return (
    <div className="p-helpPlaning">
      <div className="sm:text-left text-center">
        <h3 className="text-demo font-bold text-lg m-0">BASIC KNOWLEDGE</h3>
        <h2 class="text-4xl font-bold mb-14">Frequently Asked Questions</h2>
      </div>
      <FaqPart />
    </div>
  );
};

export default FAQs;
