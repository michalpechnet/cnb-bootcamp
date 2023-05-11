import React from 'react';
import styled, { css } from 'styled-components';

import { theme } from '../../lib/theme';

type TdProps = Pick<
  React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>,
  'align'
>;

const tdStyles = css<TdProps>`
  text-align: ${({ align }) => align || 'left'};
`;

export const Table = styled.table`
  width: 100%;
`;
export const THead = styled.thead``;
export const TBody = styled.tbody``;
export const Tr = styled.tr``;
export const Th = styled.th<TdProps>`
  ${tdStyles};
  color: ${theme.colors.textPrimary};
`;
export const Td = styled.td<TdProps>`
  ${tdStyles};
  font-size: 0.8125rem;
`;
