import React from 'react';
import { EmptyBlock } from '@/components';

import styles from './overview.module.scss';

export const Overview: React.FC = () => {
  return (
    <div className={styles.page}>
      <EmptyBlock description='У вас пока нет активов. Добавьте что-нибудь, чтобы начать!' />
    </div>
  );
};
