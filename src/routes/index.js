import React, {Fragment} from 'react';
import { Route, Routes } from 'react-router-dom';

import Register from './Register';
import SignIn from './SignIn';
import Profile from './Profile';
import Feedback from './Feedback';



const RoutesApp = () => (
  <Fragment>
    <Routes>
      <Route path="/" element={<Register />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/feedback" element={<Feedback />}></Route>
    </Routes>
  </Fragment>
);

export default RoutesApp;