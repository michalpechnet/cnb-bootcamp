import { useEffect, useMemo, useState } from 'react';

import { calculateExchangeAmount } from '../lib/calculator';
import { ExchangeRate } from '../types';

const getDefaultCurrency = (exchangeRates: Array<ExchangeRate>) => {
  if (exchangeRates.length > 0) {
    const defaultCurrency = 'EUR';
    return exchangeRates.some((exchangeRate) => exchangeRate.code === defaultCurrency)
      ? defaultCurrency
      : exchangeRates[0].currency;
  }

  return undefined;
};

export type UseExchangeRateCalculatorProps = {
  exchangeRates: Array<ExchangeRate>;
};

export const useExchangeRateCalculator = ({ exchangeRates }: UseExchangeRateCalculatorProps) => {
  const [currencyCode, setCurrencyCode] = useState<string | undefined>(getDefaultCurrency(exchangeRates));
  const [amount, setAmount] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (!exchangeRates.some((exchangeRate) => exchangeRate.code === currencyCode)) {
      setCurrencyCode(getDefaultCurrency(exchangeRates));
    }
  }, [exchangeRates]);

  const exchangeRate = useMemo(() => {
    return exchangeRates.find((exchangeRate) => exchangeRate.code === currencyCode);
  }, [currencyCode, exchangeRates]);

  const exchangeAmount = useMemo(() => {
    if (amount && exchangeRate) {
      return calculateExchangeAmount(amount, exchangeRate);
    }
    return 0;
  }, [amount, exchangeRate]);

  const exchangeAmountForCzk = useMemo(() => {
    if (exchangeRate) {
      return calculateExchangeAmount(1, exchangeRate);
    }
    return 0;
  }, [exchangeRate]);

  return {
    amount,
    currencyCode,
    exchangeAmount,
    exchangeAmountForCzk,
    exchangeRate,
    setAmount,
    setCurrencyCode,
  };
};
