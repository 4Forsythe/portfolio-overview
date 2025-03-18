import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { ICryptoCoin } from '@/types';

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  tagTypes: ['Crypto'],
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getCryptoCoins: builder.query<ICryptoCoin[], void>({
      query: () => '/24hr',
    }),
  }),
});

export const { useGetCryptoCoinsQuery } = cryptoApi;
