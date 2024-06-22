import { useState } from 'react';
// import { rust_icp_backend } from 'declarations/rust_icp_backend';
import {  Home } from "./pages/index";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
   
  );
}

export default App;
