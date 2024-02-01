import React, { useState } from "react";
import { ProjectsSlider } from "../components/projects/ProjectsSlider";

export const Projects = () => {

  return (
    <div className="text-classic text-slate-200 flex flex-col w-full animate__animated animate__fadeIn">
      <h1 className="text-4xl text-center underline underline-offset-8 mb-5">
        My projects
      </h1>
      <ProjectsSlider/>
      <div className="mt-5 text-center flex flex-col">

      <p className=" text-slate-200 underline underline-offset-2 text-classic">Check the code of this portfolio here:</p>
      <div className="flex row text-center m-auto gap-5 mt-2 text-sm md:text-base">
      <span className="text-slate-100 hover:bg-gray-300 hover:text-slate-800 p-1 rounded-lg"><a href="https://github.com/juanpjacobi/react-portfolio-backend" target="_blank">Backend</a></span>
      <span className="text-slate-100 hover:bg-gray-300 hover:text-slate-800 p-1 rounded-lg"><a href="https://github.com/juanpjacobi/react-portfolio" target="_blank">React app</a></span>

      </div>
      </div>

    </div>
  );
};
