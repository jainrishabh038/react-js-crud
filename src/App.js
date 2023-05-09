import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllRoutes from './components/AllRoutes';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <AllRoutes />
      </Router>
    </>
  );
}

export default App;
