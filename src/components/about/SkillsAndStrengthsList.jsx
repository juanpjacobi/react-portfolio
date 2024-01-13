import { Star } from "./Star";

export const SkillsAndStrengthsList = ({ skills }) => {
  return (
    <>
      <h2 className="text-4xl text-center underline underline-offset-8 mb-5">
        Skills and Strengths
      </h2>
      <ul className="text-lg">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex flex-row items-center justify-between"
          >
            <span>{skill.skill}</span>
            <Star level={skill.level} />
          </li>
        ))}
      </ul>
    </>
  );
};
