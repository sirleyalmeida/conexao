import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Register from './Register';


const RoutesApp = () => (
  <Routes>
    <Route path="/register">
      <Register />
    </Route>
  </Routes>
);

export default RoutesApp;