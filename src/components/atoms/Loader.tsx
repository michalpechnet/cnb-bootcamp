import React from 'react';
import styled from 'styled-components';

import { useDelayUnmount } from '../../hooks/useDelayUnmount';

// Inspired by https://css-generators.com/gradient-shadows/

export const Box = styled.div<Props>`
  position: relative;
  transform-style: preserve-3d;
  border-radius: 5rem;
  width: 10rem;
  height: 10rem;
  opacity: ${({ isLoading }) => (isLoading ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
`;

const Inner = styled.div`
  position: absolute;
  inset: -1rem;
  border: 1rem solid #0000;
  border-radius: calc(1rem + 5rem);
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
    border-radius: 5rem;
    background: conic-gradient(#144bb7, #0066ff, #dce3ee, #0066ff, #144bb7);
    filter: blur(1rem);
    transform: translate(0px, 0px);
  }
  &::after {
    content: '';
    position: absolute;
    background: #dce3ee;
    inset: 0;
    border-radius: 5rem;
    transform: translate(0px, 0px);
  }
`;

type Props = {
  isLoading: boolean;
};

export const Loader: React.FC<Props> = ({ isLoading }) => {
  const shouldRender = useDelayUnmount(isLoading, 200);

  if (shouldRender) {
    return (
      <Box isLoading={isLoading}>
        <Inner />
      </Box>
    );
  }

  return null;
};
