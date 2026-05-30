import { BrowserRouter,Routes, Route, NavLink} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Analytics from "./pages/Analytics";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {

  return (
    <>
      <BrowserRouter>

      <nav style={{padding:"10px",background:"#eee"}}>
        <NavLink to="/" style={{margin:"10px"}}>Home</NavLink>
        <NavLink to="/about" style={{margin:"10px"}}>About</NavLink>
        <NavLink to="/projects" style={{margin:"10px"}}>Projects</NavLink>
        <NavLink to="/analytics" style={{margin:"10px"}}>Analytics</NavLink>
        <NavLink to="/blog" style={{margin:"10px"}}>blog</NavLink>
        <NavLink to="/contact" style={{margin:"10px"}}>Contact</NavLink>

      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/analytics" element={<Analytics/>}/>
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
