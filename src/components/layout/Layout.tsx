import React from 'react';
import styled from 'styled-components';

import { theme } from '../../lib/theme';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 60rem;
  width: 100%;
  padding: ${theme.spacing[3]};
`;

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return <PageWrapper>{children}</PageWrapper>;
};
