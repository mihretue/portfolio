import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './page/landing_page'
import Footer from './components/Footer';
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />} />
    
   </Routes>
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
