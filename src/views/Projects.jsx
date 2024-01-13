import React, { useState } from "react";
import { ProjectsSlider } from "../components/projects/ProjectsSlider";

export const Projects = () => {
  const [projects, setProjects] = useState([
    {
      name: "DevJobs",
      images: [
        {
          src: "../../../images/projects/devjobs1.png",
          alt: "devjobs home",
        },
        {
          src: "../../../images/projects/devjobs2.png",
          alt: "devjobs login",
        },
        {
          src: "../../../images/projects/devjobs3.png",
          alt: "devjobs register",
        },
        {
          src: "../../../images/projects/devjobs4.png",
          alt: "devjobs recruiter",
        },
        {
          src: "../../../images/projects/devjobs5.png",
          alt: "devjobs professional",
        },
        {
          src: "../../../images/projects/devjobs6.png",
          alt: "devjobs aply",
        },
      ],
      description:
        "Web portal to search jobs made with laravel, tailwindcss, livewire and sql",
      links: {
        visit: "https://devjobs.domcloud.dev/",
        code: "https://github.com/juanpjacobi/devjobs",
      },
    },
    
    {
      name: "DevStagram",
      images: [
        {
          src: "../../../images/projects/devstagram1.png",
          alt: "devstagram login",
        },
        {
          src: "../../../images/projects/devstagram2.png",
          alt: "destagram posts",
        },
        {
          src: "../../../images/projects/devstagram3.png",
          alt: "devstagram post",
        },
        {
          src: "../../../images/projects/devstagram4.png",
          alt: "devstagram comments",
        },
      ],
      description:
        "Clone of instagram for developers, made with laravel, tailwind and sql",
      links: {
        visit: "https://scary-impress-vib.domcloud.dev/",
        code: "https://github.com/juanpjacobi/devstagram",
      },
    },
    {
      name: "CalendarApp",
      images: [
        {
          src: "../../../images/projects/calendar1.png",
          alt: "devjobs images",
        },
        {
          src: "../../../images/projects/calendar2.png",
          alt: "devjobs images",
        },
        {
          src: "../../../images/projects/calendar3.png",
          alt: "devjobs images",
        },
        {
          src: "../../../images/projects/calendar4.png",
          alt: "devjobs images",
        },

      ],
      description:
        "Calendar app, made wit React, redux. nodejs, express and Mongo db",
      links: {
        visit: "https://sparkling-rolypoly-e1679c.netlify.app/",
        code: "https://github.com/juanpjacobi/mern-calendar-app",
      },
    },
  
  ]);
  return (
    <div className="text-classic text-slate-200 flex flex-col w-full animate__animated animate__fadeIn">
      <h1 className="text-4xl text-center underline underline-offset-8 mb-5">
        My projects
      </h1>
      <ProjectsSlider projects={projects} />
    </div>
  );
};
