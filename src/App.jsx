import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Skills from "./Components/Skills/Skills";
import Work from "./Components/Work/Work";
import NotFound from "./Components/NotFound/NotFound";
import MasterLayout from "./Components/MasterLayout/MasterLayout";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MasterLayout />,
    errorElement: <NotFound />,  
    children: [
      { index: true, element: <Home /> },  
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "experience", element: <Experience /> },
      { path: "skills", element: <Skills /> },
      { path: "work", element: <Work /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
