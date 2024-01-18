import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./router/router.jsx";
import { ApiProvider } from "./context/PortfolioContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiProvider>
      <RouterProvider router={router} />
    </ApiProvider>
  </React.StrictMode>
);
