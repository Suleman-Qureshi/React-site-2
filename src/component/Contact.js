import React from "react";
import Navbar from "./Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <section className="relative fadeUp scrollBarNone bgTransparentBlack top-16 p-3 w-3/4 h-5/6 overflow-y-auto space-y-5 animate__animated animate__slideInUp">
        <div className="space-y-3">
          <h3 className="text-white text-xl font-medium tracking-wide relative after:absolute after:w-40 after:mt-1 after:h-0.5 after:top-1/2 after:translate-x-2 after:-translate-y-1/2 after:bg-green-500">
            CONTACT
          </h3>
          <p className="text-white text-4xl font-extrabold">CONTACT ME</p>
        </div>
        <div className="flex flex-col space-y-6">
          <div className="flex max-lg:flex-col max-lg:space-x-0 max-lg:space-y-6 space-x-6">
            <div className="flex px-3 py-4  w-1/2 max-lg:w-full space-x-4 bgTransparentGrey">
              <i className="fa-solid fa-location-dot fa-2x text-green-500 px-3 py-2.5 bgTransparentGreyLight rounded-full"></i>
              <div className="flex flex-col space-y-1">
                <h3 className="text-neutral-600 text-2xl font-bold">
                  My Address
                </h3>
                <p className="text-white">
                  A108 Adam Street, New York, NY 535022
                </p>
              </div>
            </div>
            <div className="flex px-3 py-4 w-1/2 max-lg:w-full space-x-4 bgTransparentGrey">
              <i className="fa-solid fa-share-nodes fa-2x text-green-500 px-3 py-2.5 bgTransparentGreyLight rounded-full"></i>
              <div className="flex flex-col space-y-3">
                <h3 className="text-neutral-600 text-2xl font-bold">
                  Social Profiles
                </h3>
                <div className="flex space-x-4 text-white">
                  <i className="fa-brands fa-twitter hover:text-green-500 fa-lg cursor-pointer duration-200"></i>
                  <i className="fa-brands fa-facebook hover:text-green-500 fa-lg cursor-pointer duration-200"></i>
                  <i className="fa-brands fa-instagram hover:text-green-500 fa-lg cursor-pointer duration-200"></i>
                  <i className="fa-brands fa-skype hover:text-green-500 fa-lg cursor-pointer duration-200"></i>
                  <i className="fa-brands fa-linkedin hover:text-green-500 fa-lg cursor-pointer duration-200"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-lg:flex-col max-lg:space-x-0 max-lg:space-y-6 space-x-6">
            <div className="flex px-3 py-4 w-1/2 max-lg:w-full space-x-4 bgTransparentGrey">
              <i className="fa-regular fa-envelope fa-2x text-green-500 px-3 py-2.5 bgTransparentGreyLight rounded-full"></i>
              <div className="flex flex-col space-y-1">
                <h3 className="text-neutral-600 text-2xl font-bold">
                  Email Me
                </h3>
                <p className="text-white">Contact@example.com</p>
              </div>
            </div>
            <div className="flex px-3 py-4 w-1/2 max-lg:w-full space-x-4 bgTransparentGrey">
              <i className="fa-solid fa-phone-volume fa-2x text-green-500 px-3 py-2.5 bgTransparentGreyLight rounded-full"></i>
              <div className="flex flex-col space-y-1">
                <h3 className="text-neutral-600 text-2xl font-bold">Call Me</h3>
                <p className="text-white">+1 5589 55488 55</p>
              </div>
            </div>
          </div>
        </div>
        <form className="bgTransparentGrey p-5 space-y-6 text-lg text-white">
          <div className="flex max-md:flex-col max-md:space-x-0 max-md:space-y-6 space-x-6">
            <input
              type="text"
              className="w-1/2 max-md:w-full bgTransparentGreyLight py-2 px-3 outline-green-500"
              placeholder="Name"
            />
            <input
              type="email"
              className="w-1/2 max-md:w-full bgTransparentGreyLight py-2 px-3 outline-green-500"
              placeholder="E-mail"
            />
          </div>
          <input
            type="text"
            className=" w-full bgTransparentGreyLight py-2 px-3 outline-green-500"
            placeholder="Subject"
          />
          <textarea
            id="text-area"
            cols="30"
            className=" w-full bgTransparentGreyLight p-3 outline-green-500"
            placeholder="Message"
            rows="10"
          ></textarea>
          <div className="flex justify-center items-center">
            <button className="px-4 py-2 bg-green-500 hover:bg-green-400 font-semibold rounded-xl">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
export default Contact;
