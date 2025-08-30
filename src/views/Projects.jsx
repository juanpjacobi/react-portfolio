import React, { useState } from "react";
import { ProjectsSlider } from "../components/projects/ProjectsSlider";

export const Projects = () => {

  return (
    <div className="text-classic text-slate-200 flex flex-col w-full animate__animated animate__fadeIn">
      <h1 className="text-4xl text-center underline underline-offset-8 mb-5">
        My projects
      </h1>
      <ProjectsSlider/>

      <div className="mt-10">
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200/30 p-6 md:p-8 text-center">
          <p className="text-base md:text-lg text-slate-200">
            Want to see more? On my GitHub you’ll find
            {" "}
            <span className="font-semibold">robust backends</span>,
            {" "}
            <span className="font-semibold">microservice architectures</span>,
            {" "}
            <span className="font-semibold">machine learning models</span>,
            {" "}
            and even the
            {" "}
            <span className="font-semibold">code of this portfolio</span>.
          </p>
          <div className="mt-4 flex items-center justify-center">
            <a
              href="https://github.com/juanpjacobi"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border px-4 py-2 text-sm md:text-base text-slate-100 hover:bg-gray-300 hover:text-slate-800"
            >
              Visit my GitHub
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};
