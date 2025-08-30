import React from "react";

const strengths = [
  "Teamwork & Collaboration",
  "Problem Solving",
  "Ownership & Responsibility",
  "Continuous Learning",
  "Agile Mindset (Scrum/Kanban)",
];

const languages = ["English (B2)", "Português (Básico)"];

const dataScience = [
  "Python",
  "Statistics",
  "Pandas / NumPy",
  "scikit-learn",
  "Data Visualization",
  "SQL for Analytics",
];

function Pills({ items }) {
  return (
    <ul className="flex flex-wrap gap-2 md:gap-3 justify-center text-center">
      {items.map((t) => (
        <li
          key={t}
          className="rounded-full border border-slate-200/30 px-3.5 py-1.5 text-xs md:text-sm uppercase"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}
export const Strengths = () => {
  return (
    <section className="mt-10 md:mt-14 text-slate-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div className="rounded-2xl border border-slate-200/30 p-5 md:p-6">
          <h2 className="uppercase text-lg underline underline-offset-4 text-center mb-4">
            Strengths
          </h2>
          <Pills items={strengths} />
        </div>
        <div className="rounded-2xl border border-slate-200/30 p-5 md:p-6">
          <h2 className="uppercase text-lg underline underline-offset-4 text-center mb-4">
            Languages
          </h2>
          <Pills items={languages} />
        </div>
        <div className="rounded-2xl border border-slate-200/30 p-5 md:p-6">
          <h2 className="uppercase text-lg underline underline-offset-4 text-center mb-4">
            Data Science (in progress)
          </h2>
          <Pills items={dataScience} />
        </div>
      </div>
    </section>
  );
};
