import React, { FC } from 'react';

import LinkCard from '../LinkCard';

import { RocketInterface } from '../../interface';

import styles from './index.module.scss';

const RocketList: FC = ({ rockets }: RocketInterface[]) => (
  <ul className={styles.wrapper}>
    {rockets.map(({ name, id }: RocketInterface) => (
      <LinkCard key={id} label={name} link={`/${id}`} />
    ))}
  </ul>
);

export default RocketList;
