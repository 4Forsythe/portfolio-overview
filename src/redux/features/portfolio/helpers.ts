import { IPortfolioAsset } from '@/types';

const LOCAL_STORAGE_KEY = 'portfolio';

export const getPortfolioLS = () => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const setPortfolioLS = (portfolio: IPortfolioAsset[]) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(portfolio));
};
