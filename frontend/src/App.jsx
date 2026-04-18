import './App.css'

import { BrowserRouter,Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Analytics from "./pages/Analytics";

function App() {

  return (
    <>
      <BrowserRouter>

      <nav style={{padding:"10px",background:"#eee"}}>
        <Link to="/" style={{margin:"10px"}}>Home</Link>
        <Link to="/about" style={{margin:"10px"}}>About</Link>
        <Link to="/projects" style={{margin:"10px"}}>Projects</Link>
        <Link to="/analytics" style={{margin:"10px"}}>Analytics</Link>

      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/analytics" element={<Analytics/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
