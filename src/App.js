import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import profileImg from './img/IMG-20240312-WA0003-removebg-preview (1).png';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar profileImg={profileImg}/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About profileImg={profileImg}/>} />
          <Route path="resume" element={<Resume />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;