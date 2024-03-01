import React from "react";
import Navbar from "./Navbar";
import img1 from "../recources/me.jpg";
function About() {
  return (
    <>
      <Navbar />
      <section
        id="About"
        className="relative fadeUp scrollBarNone bgTransparentBlack top-16 p-3 w-3/4 h-5/6 overflow-y-auto space-y-5  animate__animated animate__slideInUp"
      >
        <div className="space-y-3">
          <h3 className="text-white text-xl font-medium tracking-wide relative after:absolute after:w-40 after:mt-1 after:h-0.5 after:top-1/2 after:translate-x-2 after:-translate-y-1/2 after:bg-green-500">
            About
          </h3>
          <p className="text-white text-4xl font-extrabold">
            LEARN MORE ABOUT ME
          </p>
        </div>
        <div className="flex max-lg:flex-col space-x-6 max-lg:items-center">
          <img
            src={img1}
            alt="User_img"
            className="w-1/3 h-full max-lg:w-full"
          />
          <div className="flex flex-col justify-between">
            <h3 className="text-green-500 raleway text-3xl font-semibold">
              WEB Designer & Developer
            </h3>
            <p className="text-neutral-300 italic text-lg tracking-tight font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex justify-between max-xl:flex-col py-4">
              <div className="flex flex-col space-y-1 text-white">
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 text-3xl font-light">
                    &gt;
                  </span>
                  <b>Birthday:</b>
                  <p className="pt-3">1 May 1995</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 text-3xl font-light">
                    &gt;
                  </span>
                  <b>Website:</b>
                  <p className="pt-3">www.Example.com</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 text-3xl font-light">
                    &gt;
                  </span>
                  <b>Phone:</b>
                  <p className="pt-3">+123 466 7890</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 text-3xl font-light">
                    &gt;
                  </span>
                  <b>City:</b>
                  <p className="pt-3">New York, USA</p>
                </div>
              </div>
              <div className="flex flex-col space-y-1 text-white">
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 text-3xl font-light">
                    &gt;
                  </span>
                  <b>Age:</b>
                  <p className="pt-3">30</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 text-3xl font-light">
                    &gt;
                  </span>
                  <b>Degree:</b>
                  <p className="pt-3"> Master</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 text-3xl font-light">
                    &gt;
                  </span>
                  <b>PhEmailone:</b>
                  <p className="pt-3">email@example.com</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 text-3xl font-light">
                    &gt;
                  </span>
                  <b>Freelance:</b>
                  <p className="pt-3">Available</p>
                </div>
              </div>
            </div>
            <p className="text-neutral-300 tracking-wide leading-relaxed">
              Officiis eligendi itaque labore et dolorum mollitia officiis optio
              vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
              incidunt officia tempore. Et eius omnis. Cupiditate ut dicta
              maxime officiis quidem quia. Sed et consectetur qui quia
              repellendus itaque neque. Aliquid amet quidem ut quaerat
              cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium
              dolores.
            </p>
          </div>
        </div>
        <div className="flex max-lg:flex-col max-lg:space-x-0 max-lg:space-y-4 justify-between items-center py-5 space-x-4">
          <div className="w-1/4 max-lg:w-2/3 max-md:w-full flex flex-col justify-center items-center text-center space-y-2 bgTransparentGrey rounded-sm pb-4">
            <i className="fa-regular fa-face-smile fa-2x text-green-500 -translate-y-1/2 bgTransparentGreyLight p-3 rounded-full"></i>
            <p className="text-3xl font-semibold text-white">232</p>
            <p className="text-lg text-neutral-300">Happy Clients</p>
          </div>
          <div className="w-1/4 max-lg:w-2/3 max-md:w-full flex flex-col justify-center items-center text-center space-y-2 bgTransparentGrey rounded-sm pb-4">
            <i className="fa-solid fa-book fa-2x text-green-500 -translate-y-1/2 bgTransparentGreyLight p-3 rounded-full"></i>
            <p className="text-3xl font-semibold text-white">500+</p>
            <p className="text-lg text-neutral-300">Projects</p>
          </div>
          <div className="w-1/4 max-lg:w-2/3 max-md:w-full flex flex-col justify-center items-center text-center space-y-2 bgTransparentGrey rounded-sm pb-4">
            <i className="fa-solid fa-headset fa-2x text-green-500 -translate-y-1/2 bgTransparentGreyLight p-3 rounded-full"></i>
            <p className="text-3xl font-semibold text-white">1234</p>
            <p className="text-lg text-neutral-300">Hours of Support</p>
          </div>
          <div className="w-1/4 max-lg:w-2/3 max-md:w-full flex flex-col justify-center items-center text-center space-y-2 bgTransparentGrey rounded-sm pb-4">
            <i className="fa-solid fa-certificate fa-2x text-green-500 -translate-y-1/2 bgTransparentGreyLight p-3 rounded-full"></i>
            <p className="text-3xl font-semibold text-white">24</p>
            <p className="text-lg text-neutral-300">Awards</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-neutral-400 text-lg font-medium tracking-wide relative after:absolute after:w-40 after:h-0.5 after:top-1/2 after:translate-x-2 after:-translate-y-1/2 after:bg-green-500">
            SKILLS
          </h3>
          <div className="flex max-lg:flex-col max-lg:space-x-0 max-lg:space-y-5 space-x-5 py-5">
            <div className="flex flex-col space-y-8 w-1/2 max-lg:w-full">
              <div className="space-y-1">
                <div className="flex justify-between items-center font-semibold text-white">
                  <p>HTML</p>
                  <p>100%</p>
                </div>
                <div className="bgTransparentGrey w-full h-3">
                  <div className="w-full h-full bg-green-500 Bars"></div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between items-center font-semibold text-white">
                  <p>CSS</p>
                  <p>90%</p>
                </div>
                <div className="bgTransparentGrey w-full h-3">
                  <div className="w-11/12 h-full bg-green-500 Bars"></div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between items-center font-semibold text-white">
                  <p>JAVASCRIPT</p>
                  <p>60%</p>
                </div>
                <div className="bgTransparentGrey w-full h-3">
                  <div className="w-7/12 h-full bg-green-500 Bars"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-8 w-1/2 max-lg:w-full">
              <div className="space-y-1">
                <div className="flex justify-between items-center font-semibold text-white">
                  <p>PhotoShop</p>
                  <p>50%</p>
                </div>
                <div className="bgTransparentGrey w-full h-3">
                  <div className="w-6/12 h-full bg-green-500 Bars"></div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between items-center font-semibold text-white">
                  <p>Tailwindcss</p>
                  <p>90%</p>
                </div>
                <div className="bgTransparentGrey w-full h-3">
                  <div className="w-11/12 h-full bg-green-500 Bars"></div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between items-center font-semibold text-white">
                  <p>React</p>
                  <p>60%</p>
                </div>
                <div className="bgTransparentGrey w-full h-3">
                  <div className="w-6/12 h-full bg-green-500 Bars"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-5">
          <h3 className="text-neutral-400 text-lg font-medium tracking-wide relative after:absolute after:w-40 after:h-0.5 after:top-1/2 after:translate-x-2 after:-translate-y-1/2 after:bg-green-500">
            INTERESTS
          </h3>
          <div className="flex max-lg:flex-col space-x-5 max-lg:space-x-0 max-lg:space-y-5">
            <div className="flex w-1/2 space-x-5 max-md:flex-col max-md:space-x-0 max-md:space-y-5 max-lg:w-full">
              <div className="flex flex-col space-y-5 w-1/2 max-md:w-full">
                <div className="flex p-4 items-center bgTransparentGrey rounded-sm space-x-4 text-white">
                  <i className="fa-solid fa-store fa-2xl text-orange-500"></i>
                  <p className="text-xl font-medium">lorem Ispum</p>
                </div>
                <div className="flex p-4 items-center bgTransparentGrey rounded-sm space-x-4 text-white">
                  <i className="fa-solid fa-layer-group fa-2xl text-sky-500"></i>
                  <p className="text-xl font-medium">lorem Ispum</p>
                </div>
                <div className="flex p-4 items-center bgTransparentGrey rounded-sm space-x-4 text-white">
                  <i className="fa-solid fa-anchor fa-2xl text-amber-400"></i>
                  <p className="text-xl font-medium">lorem Ispum</p>
                </div>
              </div>
              <div className="flex flex-col space-y-5 w-1/2 max-md:w-full">
                <div className="flex p-4 items-center bgTransparentGrey rounded-sm space-x-4 text-white">
                  <i className="fa-solid fa-chart-column fa-2xl text-indigo-500"></i>
                  <p className="text-xl font-medium">lorem Ispum</p>
                </div>
                <div className="flex p-4 items-center bgTransparentGrey rounded-sm space-x-4 text-white">
                  <i className="fa-regular fa-circle-dot fa-2xl text-orange-300"></i>
                  <p className="text-xl font-medium">lorem Ispum</p>
                </div>
                <div className="flex p-4 items-center bgTransparentGrey rounded-sm space-x-4 text-white">
                  <i className="fa-solid fa-music fa-2xl text-pink-500"></i>
                  <p className="text-xl font-medium">lorem Ispum</p>
                </div>
              </div>
            </div>
            <div className="flex w-1/2 space-x-5 max-md:flex-col max-md:space-x-0 max-md:space-y-5 max-lg:flex-row max-lg:w-full">
              <div className="flex flex-col space-y-5 w-1/2 max-md:w-full">
                <div className="flex p-4 items-center bgTransparentGrey rounded-sm space-x-4 text-white">
                  <i className="fa-regular fa-calendar-check fa-2xl text-pink-700"></i>
                  <p className="text-xl font-medium">lorem Ispum</p>
                </div>
                <div className="flex p-4 items-center bgTransparentGrey rounded-sm space-x-4 text-white">
                  <i className="fa-regular fa-file fa-2xl text-teal-400"></i>
                  <p className="text-xl font-medium">lorem Ispum</p>
                </div>
                <div className="flex p-4 items-center bgTransparentGrey rounded-sm space-x-4 text-white">
                  <i className="fa-solid fa-tower-cell fa-2xl text-orange-700"></i>
                  <p className="text-xl font-medium">lorem Ispum</p>
                </div>
              </div>
              <div className="flex flex-col space-y-5 w-1/2 max-md:w-full">
                <div className="flex p-4 items-center bgTransparentGrey rounded-sm space-x-4 text-white">
                  <i className="fa-solid fa-store fa-2xl text-orange-500"></i>
                  <p className="text-xl font-medium">lorem Ispum</p>
                </div>
                <div className="flex p-4 items-center bgTransparentGrey rounded-sm space-x-4 text-white">
                  <i className="fa-solid fa-store fa-2xl text-orange-500"></i>
                  <p className="text-xl font-medium">lorem Ispum</p>
                </div>
                <div className="flex p-4 items-center bgTransparentGrey rounded-sm space-x-4 text-white">
                  <i className="fa-solid fa-store fa-2xl text-orange-500"></i>
                  <p className="text-xl font-medium">lorem Ispum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
