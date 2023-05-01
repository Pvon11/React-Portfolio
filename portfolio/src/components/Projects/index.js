import React from "react";
import picture from "../assets/Docdocs.png";
import picture1 from "../assets/MovieBattle.png";
import picture2 from "../assets/WeatherApp.png";
import picture3 from "../assets/NoteTaker.png";
import picture4 from "../assets/PASSWORD.png";
import picture5 from "../assets/WorkPlanner.png";

const projects = [
  {
    name: "Docdocs",
    image: picture,
    description:
      "Medical Database for Doctors! Can look up patients and add pertinent medical information",
    technologies: "Handlebars, JavaScript, Express, bcrypt, nodemailer, node.",
    deployed: "https://obscure-falls-81911.herokuapp.com/",
    repo: "https://github.com/JSR5404/DocDocs",
  },
  {
    name: "Movie Battle",
    image: picture1,
    description: "A fun quiz app that after gives you a movie watch.",
    technologies: "Placeholder",
    deployed: "https://kelseyra.github.io/movie-battle/",
    repo: "https://github.com/KelseyRA/movie-battle",
  },
  {
    name: "Weather App",
    image: picture2,
    description: "A 5 day weather forcast using open weathers API.",
    technologies: "Placeholder",
    deployed: "https://pvon11.github.io/Weather-App/",
    repo: "https://github.com/Pvon11/Weather-App",
  },
  {
    name: "Note Taker",
    image: picture3,
    description: "A Note Taking app that saves notes.",
    technologies: "Placeholder",
    deployed: "https://murmuring-badlands-33690.herokuapp.com/",
    repo: "https://github.com/Pvon11/Note-Taker",
  },
  {
    name: "Password Generator",
    image: picture4,
    description: "A Note Taking app that saves notes.",
    technologies: "Placeholder",
    deployed: "https://pvon11.github.io/Password-Generator/",
    repo: "https://github.com/Pvon11/Password-Generator",
  },
  {
    name: "Work Day Scheduler",
    image: picture5,
    description: "A Note Taking app that saves notes.",
    technologies: "Placeholder",
    deployed: "https://pvon11.github.io/Work-Planner/",
    repo: "https://github.com/Pvon11/Work-Planner",
  },
];

export default function Projects() {
  return (
    <div>
      <h1 className="flex text-4xl items-center">Projects</h1>
      <div>
        <div className="flex border-solid border-2 border-blue-600 w-200 h-200 justify-between font-serif text-xl p-5">
          <h2>{projects[0].name}</h2>
          <img className="w-1/4" src={projects[0].image}></img>
          <p>{projects[0].description}</p>
          <p>{projects[0].technologies}</p>
          <a href="https://obscure-falls-81911.herokuapp.com/">Deployed Link</a>
          <a href="https://github.com/JSR5404/DocDocs">Github Repository</a>
        </div>
        <div className="flex border-solid border-2 border-blue-600 w-200 h-200 justify-between font-serif text-xl p-5">
          <h2>{projects[1].name}</h2>
          <img className="w-1/4" src={projects[1].image}></img>
          <p>{projects[1].description}</p>
          <p>{projects[1].technologies}</p>
          <a href="https://kelseyra.github.io/movie-battle/">Deployed Link</a>
          <a href="https://github.com/KelseyRA/movie-battle">
            Github Repository
          </a>
        </div>
        <div className="flex border-solid border-2 border-blue-600 w-200 h-200 justify-between font-serif text-xl p-5">
          <h2>{projects[2].name}</h2>
          <img className="w-1/4" src={projects[2].image}></img>
          <p>{projects[2].description}</p>
          <p>{projects[2].technologies}</p>
          <a href="https://pvon11.github.io/Weather-App//">Deployed Link</a>
          <a href="https://github.com/Pvon11/Weather-App">Github Repository</a>
        </div>
        <div className="flex border-solid border-2 border-blue-600 w-200 h-200 justify-between font-serif text-xl p-5">
          <h2>{projects[3].name}</h2>
          <img className="w-1/4" src={projects[3].image}></img>
          <p>{projects[3].description}</p>
          <p>{projects[3].technologies}</p>
          <a href="https://murmuring-badlands-33690.herokuapp.com/">
            Deployed Link
          </a>
          <a href="https://github.com/Pvon11/Note-Taker">Github Repository</a>
        </div>
        <div className="flex border-solid border-2 border-blue-600 w-200 h-200 justify-between font-serif text-xl p-5">
          <h2>{projects[4].name}</h2>
          <img className="w-1/4" src={projects[4].image}></img>
          <p>{projects[4].description}</p>
          <p>{projects[4].technologies}</p>
          <a href="https://pvon11.github.io/Password-Generator/">
            Deployed Link
          </a>
          <a href="https://github.com/Pvon11/Password-Generator">
            Github Repository
          </a>
        </div>
        <div className="flex border-solid border-2 border-blue-600 w-200 h-200 justify-between font-serif text-xl p-5">
          <h2>{projects[5].name}</h2>
          <img className="w-1/4" src={projects[5].image}></img>
          <p>{projects[5].description}</p>
          <p>{projects[5].technologies}</p>
          <a href="https://pvon11.github.io/Work-Planner/">Deployed Link</a>
          <a href="https://github.com/Pvon11/Work-Planner">Github Repository</a>
        </div>
      </div>
    </div>
  );
}
