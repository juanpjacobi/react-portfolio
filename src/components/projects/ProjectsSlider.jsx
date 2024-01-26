import React from "react";
import { Carousel } from "flowbite-react";
import { useApi } from "../../context/PortfolioContext";

export const ProjectsSlider = () => {
  const { state } = useApi();

  return (
    <>
      <div className="grid md:grid-cols-2 gap-5">
        {state.projects?.map((project) => (
          <div className="flex flex-col min-h-80" key={project.project_id}>
            <h2 className="text-center text-xl font-semibold text-slate-50 mb-2">
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
              {project.project_description.split(" ").map((e) => (
                  <span className="inline-flex  items-center me-2 mb-2 capitalize  py-0.5 px-2.5 rounded-full text-md border border-slate-100 text-slate-100">{e}</span>
                  ))}
            </div>

            <div className="text-center mt-1">
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
