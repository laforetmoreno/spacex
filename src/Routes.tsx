import React, { FC } from 'react';
import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';

import { Rockets, Rocket } from './pages';
import { ROUTES } from './constants';

const Routes: FC = () => {
  const { rockets, rocket } = ROUTES;

  return (
    <BrowserRouter>
      <Router>
        <Route path={rockets} element={<Rockets />} />
        <Route path={rocket} element={<Rocket />} />
      </Router>
    </BrowserRouter>
  );
};

export default Routes;
