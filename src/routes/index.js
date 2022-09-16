import React, {Fragment} from 'react';
import { Route, Routes } from 'react-router-dom';

import Register from './Register';
import Feedback from './Feedback';


const RoutesApp = () => (
  <Fragment>
    <Routes>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/feedback" element={<Feedback />}></Route>
    </Routes>
  </Fragment>
);

export default RoutesApp;