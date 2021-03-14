import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';

interface Props {
  label: string;
  link: string;
}

const LinkCard: FC = ({ label, link }: Props) => {
  return (
    <Link key={label} to={link}>
      <li className={styles.wrapper}>{label}</li>
    </Link>
  );
};

export default LinkCard;
