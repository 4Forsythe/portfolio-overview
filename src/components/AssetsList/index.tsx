import React from 'react';
import { FixedSizeList as List } from 'react-window';

import { calcPortfolioPercentage } from '@/lib';
import { AssetsListItem, Container } from '@/components';
import { removeAsset, useAppDispatch } from '@/redux';

import type { IPortfolioAsset } from '@/types';

import styles from './assets-list.module.scss';

interface Props {
  items: IPortfolioAsset[];
}

const TABLE_HEADERS = [
  'Актив',
  'Количество',
  'Цена',
  'Общая стоимость',
  'Изм. за 24 ч.',
  '% портфеля',
];

export const AssetsList: React.FC<Props> = ({ items }) => {
  const dispatch = useAppDispatch();
  const itemsWithPercentage = calcPortfolioPercentage(items);

  const onRemoveAsset = (id: string) => {
    dispatch(removeAsset(id));
  };

  return (
    <Container>
      <div className={styles.table} role='table'>
        <div className={styles.tableHead} role='rowgroup'>
          <div className={styles.tableHeadRow} role='row'>
            {TABLE_HEADERS.map((header, index) => (
              <div
                key={index}
                className={styles.tableHeadCol}
                role='columnheader'
              >
                {header}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.tableContent} role='rowgroup'>
          <List
            width='100%'
            height={500}
            itemSize={64}
            itemCount={itemsWithPercentage.length}
          >
            {({ index, style }) => {
              const asset = itemsWithPercentage[index];

              return (
                <AssetsListItem
                  key={asset.id}
                  item={asset}
                  style={style}
                  onClick={(id) => onRemoveAsset(id)}
                />
              );
            }}
          </List>
        </div>
      </div>
    </Container>
  );
};
