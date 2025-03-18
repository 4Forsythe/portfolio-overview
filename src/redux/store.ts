import { configureStore } from '@reduxjs/toolkit';

import { modalReducer } from '@/redux/features/modal';
import { portfolioReducer } from '@/redux/features/portfolio';
import { cryptoApi } from '@/redux/features/crypto';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    portfolio: portfolioReducer,
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(cryptoApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
