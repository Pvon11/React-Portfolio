import React from "react";
import picture from "../assets/image0.jpeg";

export default function About() {
  return (
    <>
      {" "}
      <section class="projects" id="aboutMe" className="my-20">
        <h2 className="flex text-5xl justify-between p-5 font-serif">
          About Me
        </h2>
        <div>
          <img className="p-5" src={picture} alt="Whoops"></img>
          <p className="flex justify-between p-5 text-xl font-serif">
            Patrick Vona is from the Tri-State area and has a passion for full
            stack web development. He is well versed in many program langauges
            such as JavaScript, TypeScript, Node, and JSON.
          </p>
        </div>
      </section>
    </>
  );
}
