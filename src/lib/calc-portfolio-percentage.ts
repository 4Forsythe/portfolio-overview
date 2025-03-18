import type { IAssetListItem, IPortfolioAsset } from '@/types';

/*
  Можно изменить на любую другую формулу для вычисления % портфеля, тут % от тотала...
*/

export function calcPortfolioPercentage(
  portfolio: IPortfolioAsset[]
): IAssetListItem[] {
  const totalPrice = portfolio.reduce(
    (sum, asset) => sum + asset.quantity * +asset.lastPrice,
    0
  );

  return portfolio.map((asset) => ({
    ...asset,
    portfolioPercent: ((asset.quantity * +asset.lastPrice) / totalPrice) * 100,
  }));
}
