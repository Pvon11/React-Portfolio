import React from "react";
import picture from "../assets/image0.jpeg";

export default function About() {
  return (
    <>
      {" "}
      <section class="projects" id="aboutMe">
        <h2 className="flex text-5xl justify-between p-5 font-serif">
          About Me
        </h2>
        <div>
          <img className="p-5" src={picture} alt="Me"></img>
          <p className="flex justify-between p-5 text-xl font-serif ">
            Patrick Vona is from the Tri-State area and has a passion for full
            stack web development. He is well versed in many program langauges
            such as JavaScript, TypeScript, Node, and JSON.
          </p>
        </div>
      </section>
    </>
  );
}
