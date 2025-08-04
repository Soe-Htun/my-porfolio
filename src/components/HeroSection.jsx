import { ArrowDown } from "lucide-react";
import { ReactTyped }  from 'react-typed';

export const HeroSection = () => {

  return (
    <section data-aos="fade-up" data-aos-delay="300"
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
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
            className="text-lg md:text-xl text-muted-foreground max-2-2xl opacity-0 animate-fade-in-delay-3">
            I'm a passionate Frontend Developer with 5 years of experience in Vue.js, 3 years in Nuxt, and 2 years in React, Next.js, and TypeScript. I specialize in building scalable, high-performance web applications with modern UI frameworks
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
