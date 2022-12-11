import React from "react";
import ReactDOM from "react-dom/client";
import About from "./components/About";
import Home from "./components/Home";
import Layout from "./components/Layout";
import "./styles/index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Layout/>
    <Home />
    <About />
  </React.StrictMode>
);
