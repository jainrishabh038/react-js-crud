import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllRoutes from './components/AllRoutes';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar />
          <AllRoutes />
        </Router>
      </Provider>
    </>
  );
}

export default App;
