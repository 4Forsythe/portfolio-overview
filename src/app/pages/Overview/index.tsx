import React from 'react';
import useWebSocket from 'react-use-websocket';

import { AssetsList, Container, EmptyBlock, Spinner } from '@/components';
import {
  updateAsset,
  selectPortfolio,
  useAppDispatch,
  useAppSelector,
  useGetCryptoCoinsQuery,
} from '@/redux';

import type { ICryptoCoinWebSocketMessage } from '@/types';

import styles from './overview.module.scss';

const WEBSOCKET_URL = import.meta.env.VITE_WEBSOCKET_URL;

export const Overview: React.FC = () => {
  const { isLoading } = useGetCryptoCoinsQuery();
  const dispatch = useAppDispatch();
  const { assets } = useAppSelector(selectPortfolio);

  const streams = React.useMemo(
    () =>
      assets.map((asset) => `${asset.symbol.toLowerCase()}@ticker`).join('/'),
    [assets]
  );

  const { lastJsonMessage } = useWebSocket<ICryptoCoinWebSocketMessage>(
    WEBSOCKET_URL,
    {
      queryParams: { streams },
      shouldReconnect: () => true,
    }
  );

  React.useEffect(() => {
    if (lastJsonMessage) {
      console.log(lastJsonMessage);

      const {
        s: symbol,
        c: lastPrice,
        P: priceChangePercent,
      } = lastJsonMessage.data;

      dispatch(updateAsset({ symbol, lastPrice, priceChangePercent }));
    }
  }, [lastJsonMessage]);

  return (
    <Container>
      <div className={styles.page}>
        {isLoading && (
          <div className={styles.loader}>
            <Spinner />
          </div>
        )}

        {!assets ||
          (assets.length === 0 && (
            <EmptyBlock description='У вас пока нет активов. Добавьте что-нибудь, чтобы начать!' />
          ))}

        {assets && assets.length > 0 && <AssetsList items={assets} />}
      </div>
    </Container>
  );
};
