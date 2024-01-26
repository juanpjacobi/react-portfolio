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
            Hi, my name is Juan Pablo Jacobi, I'm web developer. I started to
            study five years ago in the university of Santo Domingo placed in
            Cordoba, Argentina. I love all related to software development
            especially web development. I heavily oriented for the backend
            tasks, but I love frontend too, especially using React and others
            Javascript Frameworks like Angular and VueJs. I saw a lot of topics
            in my career relateds to Systems design, database models, data
            structure and algorithms, agile methodologies, networking, testing,
            operating Systems, mathematics, algebra and logic. I also have taken
            a lot of online courses about web development, using technologies
            like Javascript, Php, NodeJs, Object Oriented Programming, Flutter,
            Sql and NoSql databases, React, Angular, Laravel, Git, Github,
            postman. I developed some personal projects to put this knowledge
            into practice, I leave them in the projects section with their github
            link to check the code. At the moment I'm looking for my first
            formal experience to continue growing professionally.
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
            methodologies - Responsability - Git - GitHub - Jira - B2 English
            - Problem solving ability - Postman
          </p>
        </div>
      </div>
    </div>
  );
}




