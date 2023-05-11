import { useQuery } from '@tanstack/react-query';

import { ExchangeRateData } from '../types';

export const useExchangeRates = () => {
  return useQuery<unknown, unknown, ExchangeRateData>({
    queryKey: ['exchangeRates'],
    queryFn: async () => {
      const response = await fetch('/api/exchange-rates');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
  });
};
