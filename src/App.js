import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import TestArt from './components/pages/TestArt';
import TestArt2 from './components/pages/TestArt2';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/test-art' element={<TestArt/>}/>
            <Route path='/test-art-2' element={<TestArt2/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
