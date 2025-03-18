import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { getPortfolioLS, setPortfolioLS } from './helpers';

import type { IPortfolioAsset, IUpdatePortfolioAsset } from '@/types';

interface IPortfolioState {
  assets: IPortfolioAsset[];
}

const initialState = {
  assets: getPortfolioLS(),
} satisfies IPortfolioState as IPortfolioState;

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    addAsset: (state, action: PayloadAction<IPortfolioAsset>) => {
      const { symbol, quantity } = action.payload;
      const existingItem = state.assets.find((item) => item.symbol === symbol);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.assets.push(action.payload);
      }

      setPortfolioLS(state.assets);
    },
    updateAsset: (state, action: PayloadAction<IUpdatePortfolioAsset>) => {
      const { symbol, lastPrice, priceChangePercent } = action.payload;
      const existingItem = state.assets.find(
        (asset) => asset.symbol === symbol
      );

      if (existingItem) {
        const findChanges =
          +existingItem.lastPrice !== +lastPrice ||
          +existingItem.priceChangePercent !== +priceChangePercent;

        if (findChanges) {
          existingItem.lastPrice = lastPrice;
          existingItem.priceChangePercent = priceChangePercent;

          setPortfolioLS(state.assets);
        }
      }
    },
    removeAsset: (state, action: PayloadAction<string>) => {
      state.assets = state.assets.filter((item) => item.id !== action.payload);

      setPortfolioLS(state.assets);
    },
  },
});

export const { addAsset, updateAsset, removeAsset } = portfolioSlice.actions;

export const portfolioReducer = portfolioSlice.reducer;
