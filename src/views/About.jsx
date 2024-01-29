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
          Hi, my name is Juan Pablo Jacobi, and I'm a web developer. 
          I began my studies five years ago at the University of Santo Domingo, 
          located in Cordoba, Argentina. I have a passion for all aspects of 
          software development, with a strong focus on backend tasks. 
          However, I also enjoy frontend development, particularly using React 
          and other JavaScript frameworks like Angular and Vue.js.
          Throughout my career, I have learned various topics related 
          to systems design, database models, data structures and algorithms, 
          agile methodologies, networking, testing, operating systems, mathematics, 
          algebra, and logic. In addition to my formal education, 
          I have pursued numerous online courses covering web development 
          technologies such as JavaScript, PHP, Node.js, object-oriented programming, 
          Flutter, SQL, and NoSQL databases, as well as tools like React, 
          Angular, Laravel, Git, Github, and Postman.
          To apply and solidify my knowledge, I have worked on several personal 
          projects, which are showcased in the projects section along with their 
          GitHub links for code review. Currently, I am seeking my first formal 
          experience to continue growing professionally.
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




