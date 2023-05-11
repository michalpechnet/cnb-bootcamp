import styled, { css } from 'styled-components';

import { theme } from '../../lib/theme';

export const H1 = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 2rem 0;

  background: ${theme.gradients.header};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (${theme.mediaBreakpoints.md}) {
    font-size: 4rem;
  }
`;

export const H2 = styled.h2`
  color: ${theme.colors.textPrimary};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
`;

export const P = styled.p`
  margin-bottom: ${theme.spacing[3]};
`;

export const numberStyles = css`
  font-size: 2rem;
  color: ${theme.colors.number};
`;

export const Amount = styled.span`
  ${numberStyles};
`;

export const countryCurrencyStyles = css`
  font-weight: 700;
  color: ${theme.colors.textPrimary};
  margin-bottom: ${theme.spacing[1]};
`;

export const CountryCurrency = styled.span`
  ${countryCurrencyStyles};
`;

export const ExchangeRate = styled.span`
  font-size: 0.8125rem;
  color: ${theme.colors.textTertiary};
  margin: ${theme.spacing[1]} 0;
`;

export const DateInfo = styled.p`
  font-size: 0.8125rem;
  color: ${theme.colors.textSecondary};
  text-align: center;
`;
