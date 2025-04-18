import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="uppercase text-classic text-sm font text-slate-800  p-10 flex flex-row justify-between gap-6 items-center">
      <NavLink
        className="text-gray-300 hover:bg-gray-300 hover:text-slate-800 p-2 rounded-lg"
        to={"/"}
      >
        home
      </NavLink>
      <NavLink
        className="text-gray-300 hover:bg-gray-300 hover:text-slate-800 p-2 rounded-lg"
        to={"/about"}
      >
        About me
      </NavLink>
      <NavLink
        className="text-gray-300 hover:bg-gray-300 hover:text-slate-800 p-2 rounded-lg"
        to={"/projects"}
      >
        Projects
      </NavLink>
    </nav>
  );
};
