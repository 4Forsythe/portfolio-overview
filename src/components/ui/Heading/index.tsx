import React from 'react';

import styles from './heading.module.scss';

interface Props {
  text: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Heading: React.FC<Props> = ({ text, size = 'md' }) => {
  return (
    <div className={styles.component}>
      {size === 'lg' && <h1>{text}</h1>}
      {size === 'md' && <h2>{text}</h2>}
      {size === 'sm' && <h3>{text}</h3>}
    </div>
  );
};
