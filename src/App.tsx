import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import About from './routes/About';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Recettes from './routes/Recettes';
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Recettes' element={<Recettes/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
