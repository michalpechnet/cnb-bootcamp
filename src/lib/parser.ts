import { ExchangeRate, ExchangeRateData } from '../types';

export const parseExchangeRateData = (data: string): ExchangeRateData => {
  const lines = data.split('\n').filter((line) => line.length);
  const [dateLine, headerLine, ...ratesLines] = lines;

  validateHeader(headerLine);

  const { date, sequence } = parseDateAndSequence(dateLine);
  const exchangeRates = parseRates(ratesLines);

  return { date, sequence, exchangeRates };
};

const validateHeader = (headerLine: string): void => {
  const [country, currency, amount, code, rate] = headerLine.split('|');
  const isValid =
    country.trim() === 'Country' &&
    currency.trim() === 'Currency' &&
    amount.trim() === 'Amount' &&
    code.trim() === 'Code' &&
    rate.trim() === 'Rate';

  if (!isValid) {
    throw new Error('Invalid header shape');
  }
};

const parseDateAndSequence = (dateLine: string): { date: string; sequence: number } => {
  const [date, sequence] = dateLine.split('#');
  const result = {
    date: date.trim(),
    sequence: parseInt(sequence, 10),
  };
  if (isDateAndSequence(result)) {
    return result;
  }
  throw new Error('Unable to parse date and sequence');
};

const isDateAndSequence = (data: any): data is Pick<ExchangeRateData, 'date' | 'sequence'> => {
  return typeof data.date === 'string' && typeof data.sequence === 'number';
};

const parseRates = (lines: Array<string>): Array<ExchangeRate> => {
  return lines.map((line) => {
    const [country, currency, amount, code, rate] = line.split('|');
    const result = {
      country: country.trim(),
      currency: currency.trim(),
      amount: parseInt(amount.trim(), 10),
      code: code.trim(),
      rate: parseFloat(rate.trim()),
    };

    if (isExchangeRate(result)) {
      return result;
    }

    throw new Error('Unable to parse exchange rate');
  });
};

const isExchangeRate = (data: any): data is ExchangeRate => {
  return (
    typeof data.country === 'string' &&
    typeof data.currency === 'string' &&
    typeof data.amount === 'number' &&
    typeof data.code === 'string' &&
    typeof data.rate === 'number'
  );
};
