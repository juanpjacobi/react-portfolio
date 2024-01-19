import React from "react";
import { Carousel } from "flowbite-react";
import { useApi } from "../../context/PortfolioContext";

export const ProjectsSlider = () => {

  const {state} = useApi()

  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        {state.projects?.map((project) => (
          <div className="flex flex-col h-80 mb-5" key={project.project_id}>
            <h2 className="text-center text-xl font-semibold text-slate-50 mb-2">
              {project.project_name}
            </h2>
            <Carousel className="dark">
              {project.Images?.map((image) => (
                <img src={image.image_url} alt={image.image_alt} key={image.image_id} className="h-full"/>
              ))}
            </Carousel>
            <p className="text-center text-slate-100 mt-5">
              {project.project_description}
            </p>

            <div className="text-center gap-5 mt-3">
              <a
                className="text-slate-100 hover:bg-gray-300 hover:text-slate-800 p-2 rounded-lg"
                href={project.Link?.link_visit_url} target="_blank"
              >
                Visit site
              </a>
              <a
                className="text-slate-100 hover:bg-gray-300 hover:text-slate-800 p-2 rounded-lg"
                href={project.Link?.link_code_url} target="_blank"
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
