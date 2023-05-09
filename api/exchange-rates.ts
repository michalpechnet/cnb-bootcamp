import fetch from 'node-fetch';

import { parseExchangeRateData } from '../src/lib/parser';

export const config = {
  runtime: 'edge',
};

const createResponse = (data: Record<any, any>, status: number) => {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json',
    },
  });
};

const handler = async () => {
  try {
    const response = await fetch(
      'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt',
    );
    if (response.ok) {
      const data = await response.text();
      const parsedData = parseExchangeRateData(data);
      return createResponse(parsedData, 200);
    }
  } catch {}
  return createResponse({ message: 'Something went wrong' }, 500);
};

export default handler;
