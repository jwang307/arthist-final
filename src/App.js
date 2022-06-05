import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import LibyanSibyl from './components/pages/LibyanSibyl';
import VenusUrbino from './components/pages/VenusUrbino';
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/libyan-sibyl' element={<LibyanSibyl/>}/>
            <Route path='/venus-urbino' element={<VenusUrbino/>}/>
          </Routes>
          <Footer />
      </Router>
    </>
  );
}

export default App;
