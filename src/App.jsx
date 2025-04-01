import {Routes, Route, Link} from 'react-router-dom'; 
import About from './pages/About'; 
import Projects from './pages/Projects'; 
import Contact from './pages/Contact'; 
import './App.css'

function App() {
  return (
    <div className = "container"> 
      <nav> 
        <Link to = "/">About</Link>
        <Link to ="/projects">Projects</Link> 
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>

    </div>

  );
}

export default App; 