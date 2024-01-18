import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import { Home } from "../views/Home";
import { About } from "../views/About";
import { Projects } from "../views/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Projects /> },
    ],
  },
]);
export default router;
