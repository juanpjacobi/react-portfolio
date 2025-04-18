import React from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "flowbite-react";
import { useApi } from "../context/PortfolioContext";

export const ProjectDetail = () => {
  const { id } = useParams();
  const { state } = useApi();

  const project = state.projects.find((p) => p.project_id === id);

  if (!project) {
    return <p className="p-6 text-center">Proyecto no encontrado.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-center text-4xl font-semibold text-slate-50 mb-2">
        {project.project_name}
      </h1>

      {/* Slider grande */}
      <div className="w-full h-80 md:h-96">
        <Carousel className="dark">
          {project.Images.map((img) => (
            <img
              key={img.image_id}
              src={img.image_url}
              alt={img.image_alt}
              className=" w-full h-full rounded-lg shadow-lg"
            />
          ))}
        </Carousel>
      </div>

      <div className="text-center mt-2">
        {project.project_description.split(" ").map((e, index) => (
          <span
            key={index}
            className="inline-block items-center me-2 mb-2 capitalize py-0.5 px-1.5 lg:px-2.5 rounded-full text-xs lg:text-base border border-slate-100 text-slate-100"
          >
            {e}
          </span>
        ))}
      </div>
      <div className="text-center mt-1 text-xs lg:text-base">
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
      <p className="text-white">
        {project.project_information}
      </p>
    </div>
  );
};
