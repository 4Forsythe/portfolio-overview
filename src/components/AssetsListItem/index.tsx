import React from 'react';
import cn from 'classnames';

import type { IAssetListItem } from '@/types';

import styles from './assets-list-item.module.scss';

interface Props {
  item: IAssetListItem;
  style?: React.CSSProperties;
  onClick: (id: string) => void;
}

export const AssetsListItem: React.FC<Props> = ({ item, onClick }) => {
  const { symbol, quantity, lastPrice, priceChangePercent, portfolioPercent } =
    item;

  return (
    <div
      className={styles.component}
      onClick={() => onClick(item.id)}
      role='row'
    >
      <div className={styles.cell}>{symbol}</div>
      <div className={styles.cell}>{quantity.toFixed(5)}</div>
      <div className={styles.cell}>${Number(lastPrice).toFixed(2)}</div>
      <div className={styles.cell}>${(quantity * +lastPrice).toFixed(2)}</div>
      <div
        className={cn(styles.cell, {
          [styles.positive]: +priceChangePercent >= 0,
          [styles.negative]: +priceChangePercent < 0,
        })}
      >
        {Number(priceChangePercent).toFixed(2)}%
      </div>
      <div className={styles.cell}>{portfolioPercent.toFixed(2)}%</div>
    </div>
  );
};
