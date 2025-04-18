import React from "react";
import { Carousel } from "flowbite-react";
import { useApi } from "../../context/PortfolioContext";
import { NavLink } from "react-router-dom";

export const ProjectsSlider = () => {
  const { state } = useApi();
  const customOrder = [
    "f3011206-4d2c-4869-aec3-c9250808bf0e",
    "76e8514f-dffe-4b1a-b455-5baa49f994eb",
    "142de05f-fd70-4e46-b2db-9d539224356b",
    "689c7878-ec3c-4602-be39-039097d446bb",
    "8a63ef43-8b57-4ea5-855f-61695f5d05bb",
    "d1965ab1-4159-482a-82b1-323ec155cc79",
    "60ed33ad-f899-49b9-a3a2-ed858001a2eb",
    "e0513fb9-2206-4f26-8b32-a8ca972dd122",
  ];

  const sortedProjects = [...state.projects]
  .sort((a, b) => {
    const ia = customOrder.indexOf(a.project_id);
    const ib = customOrder.indexOf(b.project_id);
    if (ia === -1 && ib === -1) return 0;
    if (ia === -1) return 1;
    if (ib === -1) return -1;
    return ia - ib;
  });
  return (
    <>
      <div className="grid sm:grid-cols-2 gap-5">
        {sortedProjects.map((project) => (
          <div
            className="flex flex-col h-80 w-full m-auto"
            key={project.project_id}
          >
            <h2 className="text-center text-2xl font-semibold text-slate-50 mb-2 cursor-pointer ">
              <NavLink
                to={`/projects/${project.project_id}`}
                className="hover:underline"
              >
                {project.project_name}
              </NavLink>
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
          </div>
        ))}
      </div>
    </>
  );
};
