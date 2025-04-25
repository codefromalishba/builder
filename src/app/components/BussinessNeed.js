import React from "react";

const BussinessNeed = () => {
  return (
    <section className="py-20 px-5 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold py-10 mb-8">My business needs</h2>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4  gap-3 2xl:gap-10 items-center">
          <div className="border lg:h-[304px]  xl:h-[304px] border-green-400 rounded-md shadow-lg p-bussinessbox text-left bg-white">
            <h3 className="font-semibold text-xl mb-4">Launch Swift Studio</h3>
            <p className="text-gray-600 text-sm">
              Collaborate seamlessly with our product experts throughout the app
              development journey, ensuring a tailor-made solution for your
              business needs.
            </p>
          </div>

          <div className="border lg:h-[304px]  xl:h-[304px] border-green-400 rounded-md shadow-lg p-bussinessbox text-left bg-white">
            <h3 className="font-semibold text-xl mb-4">Studio Store</h3>
            <p className="text-gray-600 text-sm">
              Find ready-to-go components for your e-commerce store with Launch
              Swift Store. Enjoy all the essential features for your business,
              including apps and a website, without profit-sharing commitments.
            </p>
          </div>

          <div className="border lg:h-[304px]  xl:h-[304px] border-green-400 rounded-md shadow-lg p-bussinessbox text-left bg-white">
            <h3 className="font-semibold text-xl mb-4">
              Launch Swift Enterprise
            </h3>
            <p className="text-gray-600 text-sm">
              Accelerate app development without relying on internal teams.
              Launch Swift Enterprise offers AI-powered building solutions with
              upfront pricing, eliminating concerns about escalating costs.
            </p>
          </div>

          <div className="border lg:h-[304px]  xl:h-[304px] border-green-400 rounded-md shadow-lg p-bussinessbox text-left bg-white">
            <h3 className="font-semibold text-xl mb-4">Launch Swift Cloud</h3>
            <p className="text-gray-600 text-sm">
              Maximize monthly savings on cloud hosting with Launch Swift Cloud.
              Benefit from intelligent usage recommendations that enhance
              efficiency and optimize your hosting expenses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BussinessNeed;
