import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Add from './Add';
import Edit from './Edit';
import Home from './Home';
import User from './User';

function AllRoutes() {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/add' exact element={<Add />} />
      <Route path='/show/:id' exact element={<User />} />
      <Route path='/edit/:id' exact element={<Edit />} />

      {/* <Route exact path='/users/edit/:id' component={EditUser} /> */}
      {/* <Route exact path='/users/:id' component={User} /> */}
    </Routes>
  );
}

export default AllRoutes;
