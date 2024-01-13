
export const Home = () => {
  return (
      <div className="w-full flex flex-col md:flex-row items-center justify-around animate__animated animate__fadeIn">
        <div className="md:w-2/4 mb-10 md:mb-0  ">
          <h1 className="text-2xl md:text-7xl text-slate-200 text-classic ">
            Hi, I'm Juan Pablo Jacobi, web developer
          </h1>
        </div>
        <div className=" w-1/4 ">
          <img src="../images/portfolio.jpg" className="md:rounded-e-full rounded-xl" alt="" />
        </div>
      </div>
  );
};