import React from 'react';
import styled from 'styled-components';

import { ExchangeRateData } from '..//types';
import { useExchangeRateCalculator } from '../hooks/useExchangeRateCalculator';
import { theme } from '../lib/theme';
import { Card } from './atoms/Card';
import { NumberField } from './atoms/NumberField';
import { SelectField } from './atoms/SelectField';
import { Amount, CountryCurrency, DateInfo, ExchangeRate } from './atoms/Typography';

type Props = ExchangeRateData;

const Divider = styled.div`
  border-top: 1px solid ${theme.colors.border};
  margin: ${theme.spacing[3]} 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;

export const Calculator: React.FC<Props> = ({ date, exchangeRates, sequence }) => {
  const { amount, currencyCode, exchangeAmount, exchangeAmountForCzk, exchangeRate, setAmount, setCurrencyCode } =
    useExchangeRateCalculator({
      exchangeRates,
    });

  return (
    <Wrapper>
      <Card header="Convert 🔁">
        <CountryCurrency>CZK - Czech (koruna)</CountryCurrency>
        <ExchangeRate>
          1 CZK = {exchangeAmountForCzk} {exchangeRate?.code}
        </ExchangeRate>
        <NumberField onChange={setAmount} value={amount} />
        <Divider />
        <SelectField exchangeRates={exchangeRates} onChange={setCurrencyCode} value={currencyCode} />
        <ExchangeRate>
          {exchangeRate?.amount} {exchangeRate?.code} = {exchangeRate?.rate} CZK
        </ExchangeRate>
        <Amount>{exchangeAmount}</Amount>
      </Card>
      <DateInfo>
        Last update: {date} #{sequence}
      </DateInfo>
    </Wrapper>
  );
};
