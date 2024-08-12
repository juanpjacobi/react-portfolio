
export const Home = () => {
  return (
      <div className="w-full min-h-96 flex flex-col md:flex-row items-center justify-around animate__animated animate__fadeIn">
        <div className="md:w-2/4 mb-10 md:mb-0  ">
          <p className=" md:text-5xl text-center text-slate-200 text-classic ">
           Welcome! My name is Juan Pablo Jacobi and this is my portoflio where I share you my projects.
          </p>
        </div>
        <div className="md:w-1/4 w-2/4">
          <img src="../images/portfolio.jpg" className="md:rounded-e-full rounded-xl" alt="" />
        </div>
      </div>
  );
};
