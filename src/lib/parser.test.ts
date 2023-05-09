import { parseExchangeRateData } from './parser';

describe('parser', () => {
  describe('should parse', () => {
    it('expected shape', () => {
      const data = `
      09 May 2023 #88
      Country|Currency|Amount|Code|Rate
      Australia|dollar|1|AUD|14.410
      Brazil|real|1|BRL|4.258
      Bulgaria|lev|1|BGN|11.948
      Canada|dollar|1|CAD|15.914
      China|renminbi|1|CNY|3.079
      Denmark|krone|1|DKK|3.138
      EMU|euro|1|EUR|23.365
      Hongkong|dollar|1|HKD|2.718
      Hungary|forint|100|HUF|6.291
      Iceland|krona|100|ISK|15.504
      IMF|SDR|1|XDR|28.811
      India|rupee|100|INR|25.970
      Indonesia|rupiah|1000|IDR|1.447
      Israel|new shekel|1|ILS|5.826
      Japan|yen|100|JPY|15.784
      Malaysia|ringgit|1|MYR|4.789
      Mexico|peso|1|MXN|1.198
      New Zealand|dollar|1|NZD|13.491
      Norway|krone|1|NOK|2.019
      Philippines|peso|100|PHP|38.208
      Poland|zloty|1|PLN|5.110
      Romania|leu|1|RON|4.749
      Singapore|dollar|1|SGD|16.062
      South Africa|rand|1|ZAR|1.156
      South Korea|won|100|KRW|1.608
      Sweden|krona|1|SEK|2.088
      Switzerland|franc|1|CHF|23.867
      Thailand|baht|100|THB|63.274
      Turkey|lira|1|TRY|1.092
      United Kingdom|pound|1|GBP|26.854
      USA|dollar|1|USD|21.311`;

      const expected = {
        date: '09 May 2023',
        sequence: 88,
        exchangeRates: [
          {
            country: 'Australia',
            currency: 'dollar',
            amount: 1,
            code: 'AUD',
            rate: 14.41,
          },
          {
            country: 'Brazil',
            currency: 'real',
            amount: 1,
            code: 'BRL',
            rate: 4.258,
          },
          {
            country: 'Bulgaria',
            currency: 'lev',
            amount: 1,
            code: 'BGN',
            rate: 11.948,
          },
          {
            country: 'Canada',
            currency: 'dollar',
            amount: 1,
            code: 'CAD',
            rate: 15.914,
          },
          {
            country: 'China',
            currency: 'renminbi',
            amount: 1,
            code: 'CNY',
            rate: 3.079,
          },
          {
            country: 'Denmark',
            currency: 'krone',
            amount: 1,
            code: 'DKK',
            rate: 3.138,
          },
          {
            country: 'EMU',
            currency: 'euro',
            amount: 1,
            code: 'EUR',
            rate: 23.365,
          },
          {
            country: 'Hongkong',
            currency: 'dollar',
            amount: 1,
            code: 'HKD',
            rate: 2.718,
          },
          {
            country: 'Hungary',
            currency: 'forint',
            amount: 100,
            code: 'HUF',
            rate: 6.291,
          },
          {
            country: 'Iceland',
            currency: 'krona',
            amount: 100,
            code: 'ISK',
            rate: 15.504,
          },
          {
            country: 'IMF',
            currency: 'SDR',
            amount: 1,
            code: 'XDR',
            rate: 28.811,
          },
          {
            country: 'India',
            currency: 'rupee',
            amount: 100,
            code: 'INR',
            rate: 25.97,
          },
          {
            country: 'Indonesia',
            currency: 'rupiah',
            amount: 1000,
            code: 'IDR',
            rate: 1.447,
          },
          {
            country: 'Israel',
            currency: 'new shekel',
            amount: 1,
            code: 'ILS',
            rate: 5.826,
          },
          {
            country: 'Japan',
            currency: 'yen',
            amount: 100,
            code: 'JPY',
            rate: 15.784,
          },
          {
            country: 'Malaysia',
            currency: 'ringgit',
            amount: 1,
            code: 'MYR',
            rate: 4.789,
          },
          {
            country: 'Mexico',
            currency: 'peso',
            amount: 1,
            code: 'MXN',
            rate: 1.198,
          },
          {
            country: 'New Zealand',
            currency: 'dollar',
            amount: 1,
            code: 'NZD',
            rate: 13.491,
          },
          {
            country: 'Norway',
            currency: 'krone',
            amount: 1,
            code: 'NOK',
            rate: 2.019,
          },
          {
            country: 'Philippines',
            currency: 'peso',
            amount: 100,
            code: 'PHP',
            rate: 38.208,
          },
          {
            country: 'Poland',
            currency: 'zloty',
            amount: 1,
            code: 'PLN',
            rate: 5.11,
          },
          {
            country: 'Romania',
            currency: 'leu',
            amount: 1,
            code: 'RON',
            rate: 4.749,
          },
          {
            country: 'Singapore',
            currency: 'dollar',
            amount: 1,
            code: 'SGD',
            rate: 16.062,
          },
          {
            country: 'South Africa',
            currency: 'rand',
            amount: 1,
            code: 'ZAR',
            rate: 1.156,
          },
          {
            country: 'South Korea',
            currency: 'won',
            amount: 100,
            code: 'KRW',
            rate: 1.608,
          },
          {
            country: 'Sweden',
            currency: 'krona',
            amount: 1,
            code: 'SEK',
            rate: 2.088,
          },
          {
            country: 'Switzerland',
            currency: 'franc',
            amount: 1,
            code: 'CHF',
            rate: 23.867,
          },
          {
            country: 'Thailand',
            currency: 'baht',
            amount: 100,
            code: 'THB',
            rate: 63.274,
          },
          {
            country: 'Turkey',
            currency: 'lira',
            amount: 1,
            code: 'TRY',
            rate: 1.092,
          },
          {
            country: 'United Kingdom',
            currency: 'pound',
            amount: 1,
            code: 'GBP',
            rate: 26.854,
          },
          {
            country: 'USA',
            currency: 'dollar',
            amount: 1,
            code: 'USD',
            rate: 21.311,
          },
        ],
      };
      expect(parseExchangeRateData(data)).toEqual(expected);
    });
    it('when has additional columns', () => {
      const data = `
      09 May 2023 #88
      Country|Currency|Amount|Code|Rate|Other|Even other column
      Australia|dollar|1|AUD|14.410|Some text|Some other text
      Brazil|real|1|BRL|4.258|More text|More other text`;

      const expected = {
        date: '09 May 2023',
        sequence: 88,
        exchangeRates: [
          {
            country: 'Australia',
            currency: 'dollar',
            amount: 1,
            code: 'AUD',
            rate: 14.41,
          },
          {
            country: 'Brazil',
            currency: 'real',
            amount: 1,
            code: 'BRL',
            rate: 4.258,
          },
        ],
      };
      expect(parseExchangeRateData(data)).toEqual(expected);
    });
  });
  describe('should throw error', () => {
    it('when data is not string', () => {
      expect(() => parseExchangeRateData(123 as any)).toThrow();
    });
    it('when data is empty string', () => {
      expect(() => parseExchangeRateData('')).toThrow();
    });
    it('when data is non-sense', () => {
      expect(() => parseExchangeRateData('invalid data')).toThrow();
    });
    it('when missing date line', () => {
      const data = `
      Country|Currency|Amount|Code|Rate
      Australia|dollar|1|AUD|14.410`;
      expect(() => parseExchangeRateData(data)).toThrow();
    });
    it('when missing header line', () => {
      const data = `
      09 May 2023 #88
      Australia|dollar|1|AUD|14.410`;
      expect(() => parseExchangeRateData(data)).toThrow();
    });
    it('when missing some columns', () => {
      const data = `
      09 May 2023 #88
      Country|Amount|Rate
      Australia|1|14.410`;
      expect(() => parseExchangeRateData(data)).toThrow();
    });
  });
});
