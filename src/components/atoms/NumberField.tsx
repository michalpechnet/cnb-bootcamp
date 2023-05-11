import React, { useCallback } from 'react';
import styled from 'styled-components';

import { theme } from '../../lib/theme';
import { numberStyles } from './Typography';

type Props = {
  onChange: (value: number | undefined) => void;
  value: number | undefined;
};

const Input = styled.input`
  ${numberStyles};
  &::placeholder {
    color: ${theme.colors.textTertiary};
  }
  border: none;
  border: 0;
  outline: 0;
  &:focus {
    outline: none !important;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`;

export const NumberField: React.FC<Props> = ({ value, onChange }) => {
  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      const inputValue = event.target.value;
      const numericValue = parseFloat(inputValue.replace(/[^\d.-]/g, ''));
      onChange(isNaN(numericValue) ? undefined : numericValue);
    },
    [onChange],
  );

  return <Input min="0" type="number" value={value || ''} onChange={handleOnChange} placeholder="1000" />;
};
