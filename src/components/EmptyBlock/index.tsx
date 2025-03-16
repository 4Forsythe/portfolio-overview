import React from 'react';

import styles from './empty-block.module.scss';

interface Props {
  description: string;
}

export const EmptyBlock: React.FC<Props> = ({ description }) => {
  return (
    <div className={styles.component}>
      <span className={styles.description}>{description}</span>
    </div>
  );
};
