import React, { FC, useContext } from 'react';
import RocketContext from '../../context/rocketContext/Context';

import { RocketInterface } from '../../interface';

import { RocketList } from '../../components';

const Rockets: FC = () => {
  const { rockets }: RocketInterface[] = useContext(RocketContext);

  return <RocketList rockets={rockets} />;
};

export default Rockets;
