export interface ICryptoCoin {
  symbol: string;
  priceChangePercent: string;
  lastPrice: string;
}

export interface ICryptoCoinTicker {
  s: string;
  c: string;
  P: string;
}

export interface ICryptoCoinWebSocketMessage {
  data: ICryptoCoinTicker;
  stream: string;
}
