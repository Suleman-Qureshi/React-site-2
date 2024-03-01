import React from "react";
import Navbar from "./Navbar";

function Resume() {
  return (
    <>
      <Navbar />
      <section className="relative scrollBarNone fadeUp bgTransparentBlack top-16 py-4 px-5 w-3/4 h-5/6 overflow-y-auto space-y-5 animate__animated animate__slideInUp">
        <div className="space-y-3">
          <h3 className="text-white text-xl font-medium tracking-wide relative after:absolute after:w-40 after:mt-1 after:h-0.5 after:top-1/2 after:translate-x-2 after:-translate-y-1/2 after:bg-green-500">
            Resume
          </h3>
          <p className="text-white text-4xl font-extrabold">CHECK MY RESUME</p>
        </div>
        <div className="flex max-lg:flex-col space-x-4 max-lg:space-x-0 max-lg:space-y-4 ">
          <div className="flex flex-col w-1/2 max-lg:w-full">
            <div className="flex flex-col space-y-4 py-3">
              <h3 className="text-white text-3xl font-semibold">Summary</h3>
              <div className="border-l-2 border-neutral-700 pl-6 space-y-3 flex flex-col">
                <h4 className="text-2xl mb-2 font-semibold text-green-500 relative before:p-3 before:absolute before:rounded-full before:bg-green-500 before:-left-9 before:top-1/2 before:-translate-y-2/3">
                  ALICE BARKLEY
                </h4>
                <p className="text-white italic tracking-wide">
                  Innovative and deadline-driven Graphic Designer with 3+ years
                  of experience designing and developing user-centered
                  digital/print marketing material from initial concept to
                  final, polished deliverable.
                </p>
                <div className="space-y-4 py-2">
                  <div className="text-white flex items-center space-x-4">
                    <i className="fa-solid fa-circle fa-2xs"></i>
                    <p>Portland par 127,Orlando, FL</p>
                  </div>
                  <div className="text-white flex items-center space-x-4">
                    <i className="fa-solid fa-circle fa-2xs"></i>
                    <p>(123) 456-7891</p>
                  </div>
                  <div className="text-white flex items-center space-x-4">
                    <i className="fa-solid fa-circle fa-2xs"></i>
                    <p>alice.barkley@example.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-4 py-3">
              <h3 className="text-white text-3xl font-semibold">Education</h3>
              <div className="border-l-2 border-neutral-700 pl-6 space-y-8 flex flex-col">
                <div className="space-y-5">
                  <h4 className="text-2xl mb-2 font-semibold text-green-500 relative before:p-3 before:absolute before:rounded-full before:bg-green-500 before:-left-9 before:top-1/2 before:-translate-y-2/3">
                    BACHLOR OF FINE DESIGN & WEB DEVELOPMENT
                  </h4>
                  <div className="bgTransparentGreyLight py-1 text-white text-center w-1/4">
                    2010 - 2014
                  </div>
                  <p className="text-white italic tracking-wide my-3">
                    Rochester Institute of Technology, Rochester, NY
                  </p>
                  <p className="mt-2 text-white">
                    Qui deserunt veniam. Et sed aliquam labore tempore sed
                    quisquam iusto autem sit. Ea vero voluptatum qui ut
                    dignissimos deleniti nerada porti sand markend
                  </p>
                </div>
                <div className="space-y-5">
                  <h4 className="text-2xl mb-2 font-semibold text-green-500 relative before:p-3 before:absolute before:rounded-full before:bg-green-500 before:-left-9 before:top-1/2 before:-translate-y-2/3">
                    MASTER OF FINE DESIGN & WEB DEVELOPMENT
                  </h4>
                  <div className="bgTransparentGreyLight py-1 text-white text-center w-1/4">
                    2015 - 2016
                  </div>
                  <p className="text-white italic tracking-wide my-3">
                    Rochester Institute of Technology, Rochester, NY
                  </p>
                  <p className="mt-2 text-white">
                    Qui deserunt veniam. Et sed aliquam labore tempore sed
                    quisquam iusto autem sit. Ea vero voluptatum qui ut
                    dignissimos deleniti nerada porti sand markend
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/2 max-lg:w-full">
            <div className="flex flex-col space-y-4 py-3">
              <h3 className="text-white text-3xl font-semibold">
                Professional Experience
              </h3>
              <div className="border-l-2 border-neutral-700 pl-6 space-y-8 flex flex-col">
                <div className="space-y-5">
                  <h4 className="text-2xl mb-2 font-semibold text-green-500 relative before:p-3 before:absolute before:rounded-full before:bg-green-500 before:-left-9 before:top-1/2 before:-translate-y-2/3">
                    SENIOR WEB DESIGNER & DEVELOPER
                  </h4>
                  <div className="bgTransparentGreyLight py-1 text-white text-center w-1/4">
                    2019 - Present
                  </div>
                  <p className="text-white italic tracking-wide my-3">
                    Experion, New York, NY
                  </p>
                  <div className="space-y-4 py-2">
                    <div className="text-white flex space-x-4">
                      <i className="fa-solid fa-circle fa-2xs mt-2.5"></i>
                      <p>
                        Lead in the design, development, and implementation of
                        the graphic, layout, and production communication
                        materials
                      </p>
                    </div>
                    <div className="text-white flex space-x-4">
                      <i className="fa-solid fa-circle fa-2xs mt-2.5"></i>
                      <p>
                        Delegate tasks to the 7 members of the design team and
                        provide counsel on all aspects of the project.
                      </p>
                    </div>
                    <div className="text-white flex space-x-4">
                      <i className="fa-solid fa-circle fa-2xs mt-2.5"></i>
                      <p>
                        Supervise the assessment of all graphic materials in
                        order to ensure quality and accuracy of the design
                      </p>
                    </div>
                    <div className="text-white flex space-x-4">
                      <i className="fa-solid fa-circle fa-2xs mt-2.5"></i>
                      <p>
                        Oversee the efficient use of production project budgets
                        ranging from $2,000 - $25,000
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-5">
                  <h4 className="text-2xl mb-2 font-semibold text-green-500 relative before:p-3 before:absolute before:rounded-full before:bg-green-500 before:-left-9 before:top-1/2 before:-translate-y-2/3">
                    FRONTEND SPECILIST
                  </h4>
                  <div className="bgTransparentGreyLight py-1 text-white text-center w-1/4">
                    2017 - 2018
                  </div>
                  <p className="text-white italic tracking-wide my-3">
                    Stepping Stone Advertising, New York, NY
                  </p>
                  <div className="space-y-4 py-2">
                    <div className="text-white flex space-x-4">
                      <i className="fa-solid fa-circle fa-2xs mt-2.5"></i>
                      <p>
                        Developed numerous marketing programs (logos,
                        brochures,infographics, presentations, and
                        advertisements).
                      </p>
                    </div>
                    <div className="text-white flex space-x-4">
                      <i className="fa-solid fa-circle fa-2xs mt-2.5"></i>
                      <p>
                        Managed up to 5 projects or tasks at a given time while
                        under pressure.
                      </p>
                    </div>
                    <div className="text-white flex space-x-4">
                      <i className="fa-solid fa-circle fa-2xs mt-2.5"></i>
                      <p>
                        Recommended and consulted with clients on the most
                        appropriate graphic design
                      </p>
                    </div>
                    <div className="text-white flex space-x-4">
                      <i className="fa-solid fa-circle fa-2xs mt-2.5"></i>
                      <p>
                        Created 4+ design presentations and proposals a month
                        for clients and account managers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Resume;
