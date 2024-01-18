import { Star } from "./Star";
import { useApi } from "../../context/PortfolioContext";
import { useEffect } from "react";

export const SkillsAndStrengthsList = () => {

  const {state} = useApi()

  return (
    <>
      <h2 className="text-4xl text-center underline underline-offset-8 mb-5">
        Skills and Strengths
      </h2>
      <ul className="text-lg">
        {state.skills?.map((skill) => (
          <li
            key={skill.skill_id}
            className="flex flex-row items-center justify-between"
          >
            <span>{skill.skill_name}</span>
            <Star level={skill.skill_level} />
          </li>
        ))}
      </ul>
    </>
  );
};
