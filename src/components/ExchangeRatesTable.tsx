import React from 'react';

import { ExchangeRate } from '../types';
import { Card } from './atoms/Card';
import { Table, TBody, Td, Th, THead, Tr } from './atoms/Table';

type Props = {
  exchangeRates: Array<ExchangeRate>;
};

export const ExchangeRatesTable: React.FC<Props> = ({ exchangeRates }) => {
  return (
    <Card header="Exchange rates 📈">
      <Table>
        <THead>
          <Tr>
            <Th>Country (currency)</Th>
            <Th align="center" colSpan={2}>
              Conversion rate
            </Th>
          </Tr>
        </THead>
        <TBody>
          {exchangeRates.map((exchangeRate) => {
            return (
              <Tr key={exchangeRate.code}>
                <Td>
                  {exchangeRate.country} ({exchangeRate.currency})
                </Td>
                <Td align="right">
                  {exchangeRate.amount} {exchangeRate.code}
                </Td>
                <Td align="left"> = {exchangeRate.rate} CZK</Td>
              </Tr>
            );
          })}
        </TBody>
      </Table>
    </Card>
  );
};
