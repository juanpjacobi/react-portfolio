import { useMemo } from "react";
import { Star } from "./Star";
import { useApi } from "../../context/PortfolioContext";

const CATEGORY_ORDER = [
  "Core Technologies",
  "Frontend & UI",
  "Tools & Practices",
  "Additional Knowledge",
];

export const SkillsAndStrengthsList = () => {
  const { state } = useApi();
  const { skills = [], loading, error } = state;

  const grouped = useMemo(() => {
    const normalized = (skills || []).map((s) => ({
      ...s,
      category: s.category ?? "Additional Knowledge",
      is_core: !!s.is_core,
      skill_level: Number(s.skill_level) || 0,
    }));

    normalized.sort((a, b) => {
      if (a.is_core !== b.is_core) return a.is_core ? -1 : 1;
      if (b.skill_level !== a.skill_level) return b.skill_level - a.skill_level;
      return a.skill_name.localeCompare(b.skill_name);
    });

    const buckets = Object.fromEntries(CATEGORY_ORDER.map((c) => [c, []]));
    for (const s of normalized) {
      const key = CATEGORY_ORDER.includes(s.category)
        ? s.category
        : "Additional Knowledge";
      buckets[key].push(s);
    }
    return buckets;
  }, [skills]);

  return (
    <>
      <h2 className="text-4xl text-center underline underline-offset-8 mb-5">
        Skills and Strengths
      </h2>

      {loading && (
        <div className="text-center text-sm text-slate-400 mb-4">
          Loading skills…
        </div>
      )}
      {error && (
        <div className="text-center text-sm text-red-500 mb-4">
          Error loading skills
        </div>
      )}
      {!loading && (!skills || skills.length === 0) && (
        <div className="text-center text-sm text-slate-400 mb-4">No skills yet</div>
      )}

      {!loading &&
        CATEGORY_ORDER.map((cat) => {
          const items = grouped[cat] || [];
          if (!items.length) return null;
          return (
            <div key={cat} className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-center md:text-left">
                {cat}
              </h3>
              <ul className="text-lg space-y-2">
                {items.map((skill) => (
                  <li
                    key={skill.skill_id || `${skill.skill_name}-${skill.skill_level}`}
                    className="flex flex-row items-center justify-between"
                  >
                    <span>
                      {skill.skill_name}
                      {skill.is_core && (
                        <span className="ml-2 text-xs px-2 py-0.5 rounded-full border">
                          Core
                        </span>
                      )}
                    </span>
                    <Star level={skill.skill_level} />
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
    </>
  );
};
