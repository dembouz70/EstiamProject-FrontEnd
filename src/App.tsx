import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminCategory from './components/admin/AdminCategory';
import AdminCategoy from './components/admin/AdminCategory';
import AdminRecette from './components/admin/AdminRecette';
import AdminUsers from './components/admin/AdminUsers';
import CategoryCreate from './components/admin/CreateCategories';
import RecetteCreate from './components/admin/CreateRecette';
import About from './routes/About';
import Contact from './routes/Contact';
import Home from './routes/Home';
import RecetteDetails from './routes/Recette-Details';
import { FunctionComponent, useState } from 'react';
import Recettes from './routes/RecettesList';
import "./styles.css";

const App: FunctionComponent = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Recettes' element={<Recettes />} />
        <Route path='/Recettes/:id' element={<RecetteDetails />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/About' element={<About />} />
        <Route path='/admin/recettes' element={<AdminRecette />} />
        <Route path='/admin/recettes/create' element={<RecetteCreate />} />
        <Route path='/admin/category' element={<AdminCategory />} />
        <Route path='/admin/category/create' element={<CategoryCreate />} />
        <Route path='/admin/users' element={<AdminUsers />} />

      </Routes>

    </div>

  )
}

export default App;
