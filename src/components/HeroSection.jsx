import { ArrowDown } from "lucide-react";
import { ReactTyped }  from 'react-typed';
import UserImg from "../assets/user.png"

export const HeroSection = () => {

  return (
    <section data-aos="fade-up" data-aos-delay="300"
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center md:px-4"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
          <div className="space-y-6 order-2 md:order-1">
            <h1 className="font-bold">
              <p className="text-4xl md:text-6xl text-primary mb-3 tracking-wider">Soe Htun</p>
              <span className="text-2xl tracking-widest">
                  <ReactTyped
                    strings={["I'm Senior Frontend Developer."]}
                    typeSpeed={110}
                    backSpeed={60}
                    loop
                  />
              </span>
            </h1>

            <p
              className="text-left text-lg md:text-xl text-muted-foreground max-2-2xl opacity-0 animate-fade-in-delay-3 indent-4">
              I'm a passionate frontend developer with over 5 years of experience crafting dynamic and scalable web applications. Proficient in Vue, Nuxt, and React, I’ve contributed to a wide range of projects focused on performance, usability, and maintainability. I thrive on learning new technologies and adapting quickly to deliver modern solutions that meet evolving business and user needs.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center order-1 md:order-2">
            <img src={UserImg} 
              className="w-40 h-40 lg:w-60 lg:h-60 rounded-full object-cover bg-primary pt-4"
            />
          </div>
        </div>

        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
      </div>
    </section>
  );
};
