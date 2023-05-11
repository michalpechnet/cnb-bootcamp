import { useQuery } from '@tanstack/react-query';

export const useExchangeRates = () => {
  return useQuery({
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
