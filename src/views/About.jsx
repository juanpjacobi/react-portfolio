import React from "react";
import { SkillsAndStrengthsList } from "../components/about/SkillsAndStrengthsList";
import { useApi } from "../context/PortfolioContext";

export const About = () => {

  return (
    <div className="flex flex-col text-classic ">
      <div className="flex flex-col md:flex-row justify-center animate__animated animate__fadeIn">
        <div
          className=" md:w-2/4 text-slate-200 md:pr-20 text-classic md:border-r-2 
         border-slate-200 text-justify"
        >
          <h1 className="text-4xl text-center underline underline-offset-8 mb-5">
            About me
          </h1>
          <p className="text-lg">
          Hi, my name is Juan Pablo Jacobi, and I’m a Software Developer.
          I began my studies in 2018 with online courses, later I have completed a 
          Technical Degree in Software Development at the University of Santo Domingo, 
          Córdoba, Argentina. Since then, I have been passionate about technology and 
          problem-solving through software.

          Over the years, I have built a solid background in software engineering concepts such as systems design, 
          data structures, database modeling, algorithms, and agile methodologies. 
          I complement this foundation with continuous training in modern technologies including JavaScript, Node.js, 
          NestJS, PHP/Laravel, React, SQL/NoSQL databases, Git/GitHub, Docker, and cloud-related tools.

          I have worked on multiple freelance projects where I applied both backend and frontend skills, contributing to the 
          development of web applications. Currently, I work professionally as a Backend Developer, 
          focusing on building efficient APIs, scalable architectures, and robust data models. 
          My daily stack includes Node.js with TypeScript and SQL Stored Procedures, supported by agile practices 
          and collaboration tools such as Git, Bitbucket, Jira, Docker, and Postman for documentation and testing.

          At the same time, I am expanding my expertise into Data Science, enhancing my analytical skills with Python, 
          statistics, and machine learning—aiming to combine backend development with data-driven solutions.

          In my portfolio you will find a selection of projects showcasing both my backend expertise and my 
          full-stack capabilities, with links to GitHub for code review. My goal is to keep growing as a professional, 
          always learning and applying the best practices of modern software development.
          </p>
        </div>
        <div className="mx-auto w-4/4 md:w-2/4 mt-5 md:mt-0 flex flex-col md:pl-20 max-w-md text-slate-200 text-classic">
          < SkillsAndStrengthsList />
          <div className="mt-5 text-center">
            <h2 className="uppercase text-lg underline underline-offset-4">
              Others habilities:
            </h2>
          </div>
          <p className="text-center text-sm uppercase">
            Team work - Flexibility - Great learning capacity - Agile
            methodologies - Responsability - Git - GitHub - Jira - B2 English - 
            Problem solving ability - Postman
          </p>
        </div>
      </div>
    </div>
  );
}




