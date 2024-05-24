import { useState,React } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';


function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/home" element={<Home key={Date.now()} />} />

          </Routes>
      </Router>
  );
}


export default App;
