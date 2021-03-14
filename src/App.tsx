import React, { FC } from 'react';
import Providers from './context';

import Routes from './Routes';

const App: FC = () => (
  <Providers>
    <Routes />
  </Providers>
);

export default App;
