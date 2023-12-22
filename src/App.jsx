import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Header from './Components/Header'
import Sign from './components/Sign'
import Home from './components/Home';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Registration" element={<Sign/>} />
      </Routes>
    </BrowserRouter>
   

    </>
  )
}

export default App
