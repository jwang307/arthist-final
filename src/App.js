import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import LibyanSibyl from './components/pages/LibyanSibyl';
import SacredProfane from './components/pages/SacredProfane';
import Footer from './components/Footer'
import Ermine from './components/pages/Ermine'
import Judith from './components/pages/Judith'
import Anguissola from './components/pages/Anguissola'
import SelfPortrait from './components/pages/SelfPortrait'

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/libyan-sibyl' element={<LibyanSibyl/>}/>
            <Route path='/sacred-profane' element={<SacredProfane/>}/>
            <Route path='/ermine' element={<Ermine/>}/>
            <Route path='/judith' element={<Judith/>}/>
            <Route path='/self-portrait' element={<SelfPortrait/>}/>
            <Route path='/anguissola' element={<Anguissola/>}/>
          </Routes>
          <Footer />
      </Router>
    </>
  );
}

export default App;
