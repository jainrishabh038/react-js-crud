import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Add from './Add';
import Home from './Home';
import User from './User';

function AllRoutes() {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/add' exact element={<Add />} />
      <Route path='/show/:id' exact element={<User />} />
      <Route path='/add/:id' exact element={<Add />} />
    </Routes>
  );
}

export default AllRoutes;
