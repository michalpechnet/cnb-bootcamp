import React from 'react';
import styled from 'styled-components';

import { useDelayUnmount } from '../../hooks/useDelayUnmount';
import { theme } from '../../lib/theme';

// Inspired by https://css-generators.com/gradient-shadows/

const borderRadius = '5rem';

const Box = styled.div<Props>`
  position: relative;
  transform-style: preserve-3d;
  border-radius: ${borderRadius};
  width: 10rem;
  height: 10rem;
  opacity: 1;

  ${({ isLoading }) => (!isLoading ? `animation:  loaderHide 0.5s ${theme.animations.easing} 0.1s forwards;` : '')};

  @keyframes loaderHide {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const Inner = styled.div`
  position: absolute;
  inset: -1rem;
  border: 1rem solid #0000;
  border-radius: calc(1rem + ${borderRadius});
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  transform: translateZ(-1px);
  pointer-events: none;

  animation: loader 1.2s linear infinite;

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: ${borderRadius};
    background: ${theme.gradients.loader};
    filter: blur(1rem);
  }
  &::after {
    content: '';
    position: absolute;
    background: #dce3ee;
    inset: 0;
    border-radius: ${borderRadius};
  }
`;

type Props = {
  isLoading: boolean;
};

export const Loader: React.FC<Props> = ({ isLoading }) => {
  const shouldRender = useDelayUnmount(isLoading, 700);

  if (shouldRender) {
    return (
      <Box isLoading={isLoading}>
        <Inner />
      </Box>
    );
  }

  return null;
};
