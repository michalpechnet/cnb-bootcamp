import { ExchangeRate } from '../types';
import { calculateExchangeAmount } from './calculator';

describe('calculator', () => {
  const scenarios: Array<[number, ExchangeRate, number]> = [
    [
      100,
      {
        country: 'EMU',
        currency: 'euro',
        amount: 1,
        code: 'EUR',
        rate: 23.365,
      },
      4.28,
    ],
    [
      1200,
      {
        country: 'EMU',
        currency: 'euro',
        amount: 1,
        code: 'EUR',
        rate: 23.365,
      },
      51.359,
    ],
    [
      5000,
      {
        country: 'Hungary',
        currency: 'forint',
        amount: 100,
        code: 'HUF',
        rate: 6.291,
      },
      79478.62,
    ],
    [
      1234.567,
      {
        country: 'Japan',
        currency: 'yen',
        amount: 100,
        code: 'JPY',
        rate: 15.784,
      },
      7821.636,
    ],
    [
      -100,
      {
        country: 'USA',
        currency: 'dollar',
        amount: 1,
        code: 'USD',
        rate: 21.311,
      },
      0,
    ],
  ];

  it.each(scenarios)('should calculate exchange amount', (amount, exchangeRate, expected) => {
    expect(calculateExchangeAmount(amount, exchangeRate)).toBe(expected);
  });
});
