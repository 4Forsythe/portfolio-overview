import React from 'react';
import cn from 'classnames';

import type { ICryptoCoin } from '@/types';

import styles from './coin-item.module.scss';

export const CoinItem: React.FC<ICryptoCoin> = ({
  symbol,
  lastPrice,
  priceChangePercent,
}) => {
  return (
    <div className={styles.component}>
      <span className={styles.param}>{symbol}</span>
      <span className={styles.param}>${Number(lastPrice).toFixed(5)}</span>
      <span
        className={cn(styles.param, {
          [styles.positive]: +priceChangePercent >= 0,
          [styles.negative]: +priceChangePercent < 0,
        })}
      >
        {priceChangePercent}%
      </span>
    </div>
  );
};
