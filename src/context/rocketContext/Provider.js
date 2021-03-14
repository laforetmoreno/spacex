import React, { useState, useEffect } from 'react';

import RocketContext from './Context';

import api from '../../services/api';

const initialState = {
  rockets: [],
};

const RocketProvider = ({ children }: any) => {
  const [rockets, setRockets] = useState(initialState.rockets);

  useEffect(async () => {
    const res = await api('/rockets');
    setRockets(res.data);
  }, []);

  return (
    <RocketContext.Provider value={{ rockets }}>
      {children}
    </RocketContext.Provider>
  );
};

export default RocketProvider;
