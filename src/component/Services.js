import React from "react";
import Navbar from "./Navbar";

function Services() {
  return (
    <>
      <Navbar />
      <section className="relative fadeUp scrollBarNone bgTransparentBlack top-16 py-3 px-5 w-3/4 h-5/6 overflow-y-auto space-y-5 animate__animated animate__slideInUp">
        <div className="space-y-3">
          <h3 className="text-white text-xl font-medium tracking-wide relative after:absolute after:w-40 after:mt-1 after:h-0.5 after:top-1/2 after:translate-x-2 after:-translate-y-1/2 after:bg-green-500">
            SERVICES
          </h3>
          <p className="text-white text-4xl font-extrabold">MY SERVICES</p>
          <div className="flex flex-col max-lg:flex-row max-md:flex-col max-md:space-x-0 max-md:space-y-6 max-lg:space-y-0 max-lg:space-x-4 space-y-6 py-5">
            <div className="flex space-x-6 max-lg:flex-col max-lg:space-x-0 max-lg:space-y-6">
              <div className="flex flex-col justify-center items-center text-center space-y-8 px-8 py-12 w-1/3 max-lg:w-full bgTransparentGrey service_cards hover:bg-green-500 duration-200">
                <i className="fa-brands fa-dribbble service_icons fa-2x rounded-lg"></i>
                <h4 className="text-white text-2xl font-extrabold tracking-wide">
                  Lorem ispum
                </h4>
                <p className="text-white">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
              <div className="flex flex-col justify-center items-center text-center space-y-8 px-8 py-12 w-1/3 max-lg:w-full bgTransparentGrey service_cards hover:bg-green-500 duration-200">
                <i className="fa-regular fa-file service_icons fa-2x rounded-lg"></i>
                <h4 className="text-white text-2xl font-extrabold tracking-wide">
                  Lorem ispum
                </h4>
                <p className="text-white">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
              <div className="flex flex-col justify-center items-center text-center space-y-8 px-8 py-12 w-1/3 max-lg:w-full bgTransparentGrey service_cards hover:bg-green-500 duration-200">
                <i className="fa-solid fa-gauge-high service_icons fa-2x rounded-lg"></i>
                <h4 className="text-white text-2xl font-extrabold tracking-wide">
                  Lorem ispum
                </h4>
                <p className="text-white">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>
            <div className="flex space-x-6 max-lg:flex-col max-lg:space-x-0 max-lg:space-y-6">
              <div className="flex flex-col justify-center items-center text-center space-y-8 px-8 py-12 w-1/3 max-lg:w-full bgTransparentGrey service_cards hover:bg-green-500 duration-200">
                <i className="fa-solid fa-earth-asia service_icons fa-2x rounded-lg"></i>
                <h4 className="text-white text-2xl font-extrabold tracking-wide">
                  Lorem ispum
                </h4>
                <p className="text-white">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
              <div className="flex flex-col justify-center items-center text-center space-y-8 px-8 py-12 w-1/3 max-lg:w-full bgTransparentGrey service_cards hover:bg-green-500 duration-200">
                <i className="fa-solid fa-display service_icons fa-2x rounded-lg"></i>
                <h4 className="text-white text-2xl font-extrabold tracking-wide">
                  Lorem ispum
                </h4>
                <p className="text-white">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
              <div className="flex flex-col justify-center items-center text-center space-y-8 px-8 py-12 w-1/3 max-lg:w-full bgTransparentGrey service_cards hover:bg-green-500 duration-200">
                <i className="fa-solid fa-archway service_icons fa-2x rounded-lg"></i>
                <h4 className="text-white text-2xl font-extrabold tracking-wide">
                  Lorem ispum
                </h4>
                <p className="text-white">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
