import React from 'react';
import styled from 'styled-components';

import { Calculator } from './components/Calculator';
import { ExchangeRatesTable } from './components/ExchangeRatesTable';
import { Header } from './components/Header';
import { Layout } from './components/layout/Layout';
import { useExchangeRates } from './hooks/useExchangeRates';
import { theme } from './lib/theme';

const Content = styled.div<{ isLoaded: boolean }>`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  width: 100%;

  @media (${theme.mediaBreakpoints.md}) {
    flex-direction: row;
  }

  transform: translateY(25vh);
  opacity: 0;
  ${({ isLoaded }) => (isLoaded ? `animation: loadContent 1.2s ${theme.animations.easing} 0.5s forwards;` : '')};

  @keyframes loadContent {
    0% {
      opacity: 0;
      transform: translateY(25vh);
    }
    100% {
      opacity: 1;
      transform: none;
    }
`;

export const App: React.FC = () => {
  const { data, isSuccess } = useExchangeRates();
  const exchangeRates = data?.exchangeRates || [];

  return (
    <Layout>
      <Header isLoaded={isSuccess} />
      <Content isLoaded={isSuccess}>
        <ExchangeRatesTable exchangeRates={exchangeRates} />
        <Calculator exchangeRates={exchangeRates} />
      </Content>
    </Layout>
  );
};
