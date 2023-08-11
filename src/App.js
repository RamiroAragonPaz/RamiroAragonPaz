
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';

function App() {
  return (
     <>
     
     <BrowserRouter>
      <Layout/>
          <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/skills" element={<Skills />}/>
        </Routes>
      </BrowserRouter>
     </>
  );
}

export default App;