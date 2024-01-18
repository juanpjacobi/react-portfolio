import React, { useState } from "react";
import { ProjectsSlider } from "../components/projects/ProjectsSlider";

export const Projects = () => {

  return (
    <div className="text-classic text-slate-200 flex flex-col w-full animate__animated animate__fadeIn">
      <h1 className="text-4xl text-center underline underline-offset-8 mb-5">
        My projects
      </h1>
      <ProjectsSlider/>
    </div>
  );
};
