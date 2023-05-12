import React from 'react';
import styled from 'styled-components';

import { theme } from '../lib/theme';
import { Loader } from './atoms/Loader';
import { H1, P } from './atoms/Typography';

const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${theme.spacing[2]};
  opacity: 1;
  transform: translateY(20vh);
  ${({ isLoaded }) => (isLoaded ? `animation:  loadHeader 1.2s ${theme.animations.easing} 1s forwards;` : '')};

  @keyframes loadHeader {
    0% {
      transform: translateY(20vh);
    }
    100% {
      transform: none;
    }
  }
`;

const StyledH1 = styled(H1)`
  text-align: center;
`;

type Props = {
  isLoaded: boolean;
};

export const Header: React.FC<Props> = ({ isLoaded }) => {
  return (
    <Container isLoaded={isLoaded}>
      <StyledH1>Central bank exchange</StyledH1>
      <P>
        🤑 Get daily updates on Czech central bank exchange rates on our website. Stay informed with up-to-date currency
        conversions. Check now!
      </P>
      <Loader isLoading={!isLoaded} />
    </Container>
  );
};
