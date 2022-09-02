import React, {Fragment} from 'react';
import { Route, Routes } from 'react-router-dom';

import Register from './Register';


const RoutesApp = () => (
  <Fragment>
    <Routes>
      <Route path="/register" element={<Register />}>
      </Route>
    </Routes>
  </Fragment>
);

export default RoutesApp;