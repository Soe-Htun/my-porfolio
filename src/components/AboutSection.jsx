import { Briefcase, Code, User } from "lucide-react";
import resume from "../assets/my_resume.pdf"
export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:px-4 relative">
      {" "}
      <div className="container mx-auto max-w-6xl">
        <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 data-aos="fade-up" className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p data-aos="fade-up" className="text-muted-foreground text-left indent-4">
              I'm a passionate Frontend Developer with over 5 years of experience in web development, I specialize
              in creating responsive, accessible, and performant web
              applications using modern technologies.
            </p>

            <p data-aos="fade-up" className="text-muted-foreground text-left indent-4">
              I'm I'm always exploring new technologies, optimizing frontend workflows, and improving user experience to deliver seamless digital solutions.
            </p>

            <div data-aos="fade-up" className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href={resume}
                download="SoeHtun-CV.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div data-aos="fade-up" className="gradient-border p-6 card-hover rounded-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" className="gradient-border p-6 card-hover rounded-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" className="gradient-border p-6 card-hover rounded-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
