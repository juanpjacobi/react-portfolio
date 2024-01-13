import { Outlet } from "react-router-dom";
import { NavBar } from "../components/shared/NavBar";
import 'animate.css';
import { Footer } from "../components/shared/Footer";

export const Layout = () => {
  return (
    <main className="m-auto flex flex-col bg-gradient-to-br from-slate-950 from-20% via-slate-800
     to-gray-950 to-90% min-h-lvh  items-center animate__animated animate__fadeIn">
      <div className="w-full border-b border-slate-200 items-center flex flex-col md:flex-row justify-between">
        <div className="p-10 text-center text-classic shadow-text ">
          <span className="text-gray-100 uppercase text-2xl">Juan Pablo Jacobi</span>
          <p className="text-gray-100 ">Web Developer</p>
        </div>
        <NavBar />
      </div>

      <div className="max-w-6xl p-10 w-full ">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};
