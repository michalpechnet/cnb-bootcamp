import React, { useCallback } from 'react';
import styled from 'styled-components';

import { ExchangeRate } from '../../types';
import { countryCurrencyStyles } from './Typography';

type Props = {
  exchangeRates: Array<ExchangeRate>;
  onChange: (value: string) => void;
  value?: string;
};

const Select = styled.select`
  ${countryCurrencyStyles};
  appearance: none;
  position: relative;
  border: 0;
  outline: 0;

  &:focus {
    outline: none !important;
  }

  padding-right: 1.5rem;
  background: transparent
    url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>")
    no-repeat;
  background-position-x: right;
  background-position-y: center;
`;

export const SelectField: React.FC<Props> = ({ exchangeRates, onChange, value = '' }) => {
  const handleOnChange: React.ChangeEventHandler<HTMLSelectElement> = useCallback(
    (event) => {
      onChange(event.target.value);
    },
    [onChange],
  );

  return (
    <Select onChange={handleOnChange} value={value}>
      {exchangeRates.map((exchangeRate) => (
        <option key={exchangeRate.code} value={exchangeRate.code}>
          {exchangeRate.code} - {exchangeRate.country} ({exchangeRate.currency})
        </option>
      ))}
    </Select>
  );
};
