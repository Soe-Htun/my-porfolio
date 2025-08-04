import { ArrowRight, ExternalLink, Github } from "lucide-react";
import CasinoImg from "../assets/casino_project.png"
import SpotifyImg from "../assets/spotify_project.png"
import EcommerceImg from "../assets/e-commerce.png"
import WeatherImg from "../assets/weather_project.png"

const projects = [
  {
    id: 1,
    title: "Spotify Clone",
    description: "A beautiful spotify app using React, Typescript and Tailwind.",
    image: SpotifyImg,
    tags: ["React", "TailwindCSS", "Typescript"],
    demoUrl: "https://spotify-soehtun.netlify.app",
    githubUrl: "https://github.com/Soe-Htun/react-spotify-clone",
    aosDelay: 200,
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "A sleek weather app with real-time forecasts, hourly updates, and dynamic backgrounds that reflect current conditions.",
    image: WeatherImg,
    tags: ["Vue","TypeScript", "Tailwind CSS", "Axios"],
    demoUrl: "https://check-weather-site.netlify.app/",
    githubUrl: "https://github.com/Soe-Htun/weather-project",
    aosDelay: 400
  },
  {
    id: 3,
    title: "Casino Web",
    description:
      "A vibrant and engaging online casino platform showcasing top-rated slot games, jackpots, and classic favorites.",
    image: CasinoImg,
    tags: ["Vue","Typescript", "Axios"],
    demoUrl: "https://mycasinoassignment.netlify.app/",
    githubUrl: "https://github.com/Soe-Htun/vue-assignment",
    aosDelay: 600
  },
  {
    id: 4,
    title: "E-Commerce Web",
    description:
      "A vibrant and engaging online casino platform showcasing top-rated slot games, jackpots, and classic favorites.",
    image: EcommerceImg,
    tags: ["React","React Router", "Tailwind CSS", "Typescript" ,"Redux"],
    demoUrl: "https://mycasinoassignment.netlify.app/",
    githubUrl: "https://github.com/Soe-Htun/react-e-commerce-app",
    aosDelay: 800
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p data-aos="fade-up" className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              data-aos="fade-up" data-aos-delay={project.aosDelay}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span key={key} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div data-aos="fade-up" className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Soe-Htun"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
