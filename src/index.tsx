import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
// import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import About from "./pages/About";
// import Gallery from "./pages/Gallery";
// Stylings
import "./styles/index.scss";
// import { Projects } from "./pages/Projects";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          {/* <Route path="gallery" element={<Gallery />} /> */}
          {/* <Route path="project" element={<Projects />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
