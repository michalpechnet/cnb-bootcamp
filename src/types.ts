export type ExchangeRate = {
  country: string;
  currency: string;
  amount: number;
  code: string;
  rate: number;
};

export type ExchangeRateData = {
  date: string;
  sequence: number;
  exchangeRates: Array<ExchangeRate>;
};
