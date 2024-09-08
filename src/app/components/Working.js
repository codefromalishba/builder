import React from "react";

const Working = () => {
  return (
    <section class="py-17 px-5 bg-white">
      <div class="container mx-auto text-center">
        <h2 class="sm:text-4xl font-semibold text-2xl sm:font-bold py-10 mb-0 sm:mb-8">
          Here&rsquo;s How It Works
        </h2>

        <div class="grid lg:grid-cols-2 xl:grid-cols-4  gap-3 2xl:gap-10 items-center">
          <div className="flex gap-2 items-center">
            <div>
              <h1 className="text-val font-bold ">1</h1>
            </div>
            <div class="  text-left bg-white">
              <h3 class="font-semibold text-p">Match with an expert</h3>
              <p class="text-gray-600 text-sm">
                We connect you with a dedicated Launch Swift specialist to guide
                you through the app creation process.
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <h1 className="text-val font-bold">2</h1>
            </div>
            <div class="  text-left bg-white">
              <h3 class="font-semibold text-p">Share your app idea</h3>
              <p class="text-gray-600 text-sm">
                Describe your vision, and our team will help translate it into a
                real-world application.
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <h1 className="text-val font-bold">3</h1>
            </div>
            <div class="  text-left bg-white">
              <h3 class="font-semibold text-p">AI assembles your app</h3>
              <p class="text-gray-600 text-sm">
                We automate the development processes using AI, saving you
                valuable time and resources.
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <h1 className="text-val font-bold">4</h1>
            </div>
            <div class="  text-left bg-white">
              <h3 class="font-semibold text-p ">
                Specialists customize your app
              </h3>
              <p class="text-gray-600 text-sm">
                A team of experienced developers further customize it to make it
                unique, polished, personalized, and ready for launch.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row  justify-center py-7 sm:py-12 gap-4 sm:gap-9">
          <div className="border w-max p-btn bg-black text-white rounded-8 hover:bg-demo cursor-pointer">
            <p>Speak To An Expert</p>
          </div>
          <p className=" border rounded-8 p-btn border-black w-fit">
            See Solution And Pricing
          </p>
        </div>
      </div>
    </section>
  );
};

export default Working;
