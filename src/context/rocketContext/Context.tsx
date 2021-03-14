import { createContext } from 'react';

const INITIAL_STATE: any = {
  rockets: [],
};

const RocketContext = createContext(INITIAL_STATE);

export default RocketContext;
