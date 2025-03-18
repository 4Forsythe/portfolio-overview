import React from 'react';

import { Button, CoinItem, FormField } from '@/components';
import {
  closeModal,
  addAsset,
  useAppDispatch,
  useGetCryptoCoinsQuery,
} from '@/redux';

import type { ICryptoCoin } from '@/types';

import styles from './add-asset-form.module.scss';

export const AddAssetForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const [items, setItems] = React.useState<ICryptoCoin[]>([]);
  const [asset, setAsset] = React.useState<ICryptoCoin | null>(null);
  const [quantity, setQuantity] = React.useState('');
  const [searchQuery, setSearchQuery] = React.useState('');

  const { data: coins, isSuccess } = useGetCryptoCoinsQuery();

  const onCancel = () => {
    setAsset(null);
    setQuantity('');
    dispatch(closeModal());
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (asset && quantity) {
      dispatch(
        addAsset({ id: crypto.randomUUID(), quantity: +quantity, ...asset })
      );
      setAsset(null);
      setQuantity('');
      setSearchQuery('');

      onCancel();
    }
  };

  React.useEffect(() => {
    if (isSuccess) {
      setItems(coins.slice(0, 50));
    }
  }, [coins, isSuccess]);

  React.useEffect(() => {
    if (searchQuery.trim()) {
      const rawQuery = searchQuery.toLowerCase();
      setItems(
        items.filter((item) =>
          item.symbol.toLowerCase().trim().includes(rawQuery)
        )
      );
    } else {
      setItems(coins ? coins.slice(0, 50) : []);
    }
  }, [searchQuery]);

  return (
    <div className={styles.component}>
      <FormField
        size='sm'
        type='text'
        aria-label='Введите название валюты для поиска'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder='Поиск валюты'
      />

      {coins && (
        <div className={styles.currencyList}>
          {items.map((item, index) => (
            <button key={index} onClick={() => setAsset(item)}>
              <CoinItem {...item} />
            </button>
          ))}
        </div>
      )}

      {/* Form */}
      {asset && (
        <form className={styles.form} onSubmit={onSubmit}>
          <div className={styles.currencyInfo}>
            <span className={styles.currencyParam}>{asset.symbol}</span>
            <span className={styles.currencyParam}>${asset.lastPrice}</span>
          </div>

          <FormField
            size='sm'
            type='number'
            aria-label='Введите количество активов'
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min={1}
            max={1000}
            placeholder='Количество'
            required
          />

          <div className={styles.formButtons}>
            <Button aria-label='Подтвердить' type='submit'>
              Добавить
            </Button>
            <Button aria-label='Отмена' onClick={onCancel}>
              Отмена
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};
