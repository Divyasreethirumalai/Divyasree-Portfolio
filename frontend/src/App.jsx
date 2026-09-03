import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav style={{ padding: "10px", background: "#eee" }}>
          <NavLink to="/" style={{ margin: "10px" }}>
            Home
          </NavLink>

          <NavLink to="/about" style={{ margin: "10px" }}>
            About
          </NavLink>

          <NavLink to="/experience" style={{ margin: "10px" }}>
            Experience
          </NavLink>

          <NavLink to="/projects" style={{ margin: "10px" }}>
            Projects
          </NavLink>

          <NavLink to="/blog" style={{ margin: "10px" }}>
            Blog
          </NavLink>

          <NavLink to="/contact" style={{ margin: "10px" }}>
            Contact
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;