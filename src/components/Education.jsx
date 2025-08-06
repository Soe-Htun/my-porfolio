import React from "react";

export const Education = () => {
  return (
    <section id="education-experience" className="py-12 md:px-4 relative">
      <div className="container max-w-5xl md:max-w-6xl mx-auto">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Education & <span className="text-primary"> Experience</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education */}

          <div>
            <h2 data-aos="fade-up" className="text-xl font-bold mb-6">
              Education
            </h2>
            <div
              data-aos="fade-up"
              className="flex w-full flex-col items-start "
            >
              <div className="group flex gap-x-6 h-20">
                <div className="relative">
                  <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-primary/80"></div>
                  <span className="relative z-10 grid h-3 w-3 place-items-center rounded-full bg-primary text-primary"></span>
                </div>
                <div className="rounded-lg text-left flex flex-col justify-center">
                  <h3 className="text-lg font-semibold">
                    University of Computer Studies, Magway (B.C.Sc.)
                  </h3>
                  <p className="text-sm">2014 - 2019</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 data-aos="fade-up" className="text-xl font-bold mb-6">
              Experience
            </h2>
            <div data-aos="fade-up" className="space-y-3 text-left">
              <div className="text-sm text-left mb-8 indent-4">
                With over 5 years of experience in frontend development, I have
                successfully contributed to diverse projects involving modern
                JavaScript frameworks and libraries. My expertise in Vue, Nuxt,
                and React allows me to deliver robust and engaging applications
                tailored to user needs. I’m also committed to continuous
                learning, adapting quickly to evolving technologies and
                methodologies to provide the best solutions.
              </div>

              <div className="flex w-full flex-col items-start">
                <div data-aos="fade-up" className="group flex gap-x-6 h-20">
                  <div className="relative">
                    <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-primary/80"></div>
                    <span className="relative z-10 grid h-3 w-3 place-items-center rounded-full bg-primary text-primary"></span>
                  </div>
                  <div className="rounded-lg flex flex-col justify-center">
                    <h3 className="text-lg font-semibold">
                      Senior Frontend Developer – The Ninth Art
                    </h3>
                    <p className="text-sm">Jun 2025 – Present</p>
                  </div>
                </div>
                <div data-aos="fade-up" className="group flex gap-x-6 h-20">
                  <div className="relative">
                    <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-primary/80"></div>
                    <span className="relative z-10 grid h-3 w-3 place-items-center rounded-full bg-primary text-primary"></span>
                  </div>
                  <div className="rounded-lg text-left flex flex-col justify-center">
                    <h3 className="text-lg font-semibold">
                      Senior Frontend Developer – City Developments
                      Limited(Singapore)
                    </h3>
                    <p className="text-sm">Apr 2023 – Apr 2025</p>
                  </div>
                </div>
                <div data-aos="fade-up" className="group flex gap-x-6 h-20">
                  <div className="relative">
                    <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-primary/80"></div>
                    <span className="relative z-10 grid h-3 w-3 place-items-center rounded-full bg-primary text-primary"></span>
                  </div>
                  <div className="rounded-lg flex flex-col justify-center">
                    <h3 className="text-lg font-semibold">
                      Senior Frontend Developer – UMG Myanmar
                    </h3>
                    <p className="text-sm">July 2022 – Apr 2023</p>
                  </div>
                </div>
                <div data-aos="fade-up" className="group flex gap-x-6 h-20">
                  <div className="relative">
                    <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-primary/80"></div>
                    <span className="relative z-10 grid h-3 w-3 place-items-center rounded-full bg-primary text-primary"></span>
                  </div>
                  <div className="rounded-lg flex flex-col justify-center">
                    <h3 className="text-lg font-semibold">
                      Software Engineer – The Ninth Art
                    </h3>
                    <p className="text-sm">Dec 2019 – June 2022</p>
                  </div>
                </div>
                <div data-aos="fade-up" className="group flex gap-x-6 h-20">
                  <div className="relative">
                    <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-primary/80"></div>
                    <span className="relative z-10 grid h-3 w-3 place-items-center rounded-full bg-primary text-primary"></span>
                  </div>
                  <div className="rounded-lg flex flex-col justify-center">
                    <h3 className="text-lg font-semibold">
                      Internship – Pearl Yadana
                    </h3>
                    <p className="text-sm">May 2019 – July 2019</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
