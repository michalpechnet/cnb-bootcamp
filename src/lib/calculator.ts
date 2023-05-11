import { ExchangeRate } from '../types';

export const calculateExchangeAmount = (amount: number, exchangeRate: ExchangeRate): number => {
  if (amount > 0) {
    const plainCalculation = amount * (exchangeRate.amount / exchangeRate.rate);
    return Math.round(plainCalculation * 1000) / 1000;
  }
  return 0;
};
