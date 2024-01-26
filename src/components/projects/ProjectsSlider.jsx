import React from "react";
import { Carousel } from "flowbite-react";
import { useApi } from "../../context/PortfolioContext";

export const ProjectsSlider = () => {
  const { state } = useApi();

  return (
    <>
      <div className="grid md:grid-cols-2 gap-5">
        {state.projects?.map((project) => (
          <div className="flex flex-col h-80 w-full m-auto" key={project.project_id}>
            <h2 className="text-center text-2xl font-semibold text-slate-50 mb-2">
              {project.project_name}
            </h2>
            <Carousel className="dark">
              {project.Images?.map((image) => (
                <img
                  src={image.image_url}
                  alt={image.image_alt}
                  key={image.image_id}
                  className="h-full"
                />
              ))}
            </Carousel>
            <div className="text-center mt-2">
              {project.project_description.split(" ").map((e, index) => (
                  <span key={index} className="inline-block items-center me-2 mb-2 capitalize py-0.5 px-1.5 md:px-2.5 rounded-full text-xs md:text-base border border-slate-100 text-slate-100">{e}</span>
                  ))}
            </div>

            <div className="text-center mt-1 text-xs md:text-base">
              <a
                className="text-slate-100 hover:bg-gray-300 hover:text-slate-800 p-2 rounded-lg"
                href={project.Link?.link_visit_url}
                target="_blank"
              >
                Visit site
              </a>
              <a
                className="text-slate-100 hover:bg-gray-300 hover:text-slate-800 p-2 rounded-lg"
                href={project.Link?.link_code_url}
                target="_blank"
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
