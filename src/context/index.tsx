import React, { FC } from 'react';
import RocketProvider from './rocketContext/Provider';

const Providers: FC = ({ children }: any) => (
  <RocketProvider>{children}</RocketProvider>
);

export default Providers;
