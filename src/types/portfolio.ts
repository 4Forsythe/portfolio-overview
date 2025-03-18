import type { ICryptoCoin } from './crypto';

export interface IPortfolioAsset extends ICryptoCoin {
  id: string;
  quantity: number;
}

export interface IAssetListItem extends IPortfolioAsset {
  portfolioPercent: number;
}

export interface IUpdatePortfolioAsset {
  symbol: string;
  lastPrice: string;
  priceChangePercent: string;
}
