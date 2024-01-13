import React from "react";
import { Carousel } from "flowbite-react";

export const ProjectsSlider = ({ projects }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <div className="flex flex-col h-80 mb-5" key={index}>
            <h2 className="text-center text-xl font-semibold text-slate-50 mb-2">
              {project.name}
            </h2>
            <Carousel className="dark">
              {project.images.map((image) => (
                <img src={image.src} alt={image.alt}  className="h-full"/>
              ))}
            </Carousel>
            <p className="text-center text-slate-100 mt-5">
              {project.description}
            </p>

            <div className="text-center gap-5 mt-3">
              <a
                className="text-slate-100 hover:bg-gray-300 hover:text-slate-800 p-2 rounded-lg"
                href={project.links.visit} target="_blank"
              >
                Visit site
              </a>
              <a
                className="text-slate-100 hover:bg-gray-300 hover:text-slate-800 p-2 rounded-lg"
                href={project.links.code} target="_blank"
              >
                Github repository
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
