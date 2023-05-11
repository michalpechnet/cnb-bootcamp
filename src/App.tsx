import React from 'react';
import styled from 'styled-components';

import { P } from './components/atoms/Typography';
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
  gap: 1rem;

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
  const { data, isSuccess, isLoading } = useExchangeRates();
  const exchangeRates = data?.exchangeRates || [];

  return (
    <Layout>
      <Header isLoaded={!isLoading} />
      <Content isLoaded={!isLoading}>
        {isSuccess ? (
          <>
            <ExchangeRatesTable exchangeRates={exchangeRates} />
            <Calculator date={data.date} exchangeRates={exchangeRates} sequence={data.sequence} />
          </>
        ) : (
          <P>
            ⚠️ Oh no, something went wrong! It seems that the money gods have decided to play a little joke on us.
            Perhaps they got tired of us always counting on them to make things right. Well, it looks like we{'\u0027'}
            ll have to tighten our belts and dig a little deeper into our pockets to fix this one. But hey, on the
            bright side, at least least we{'\u0027'}ll get some extra exercise from all that penny-pinching!
          </P>
        )}
      </Content>
    </Layout>
  );
};
