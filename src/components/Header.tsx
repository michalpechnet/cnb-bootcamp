import React from 'react';
import styled from 'styled-components';

import { theme } from '../lib/theme';
import { H1 } from './atoms/Typography';

const StyledH1 = styled(H1)<Props>`
  text-align: center;
  padding: ${theme.spacing[2]};
  opacity: 1;
  transform: translateY(25vh);
  ${({ isLoaded }) => (isLoaded ? `animation:  loadHeader 1.2s ${theme.animations.easing} 0.5s forwards;` : '')};

  @keyframes loadHeader {
    0% {
      transform: translateY(25vh);
    }
    100% {
      transform: none;
    }
  }
`;

type Props = {
  isLoaded: boolean;
};

export const Header: React.FC<Props> = ({ isLoaded }) => {
  return <StyledH1 isLoaded={isLoaded}>Central bank exchange</StyledH1>;
};
