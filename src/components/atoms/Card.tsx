import React from 'react';
import styled from 'styled-components';

import { theme } from '../../lib/theme';
import { H2 } from './Typography';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${theme.spacing[2]};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${theme.colors.card};
  border-radius: ${theme.spacing[3]};
  box-shadow: 0 1em 1em 0 ${theme.colors.boxShadow};
  padding: ${theme.spacing[3]};
`;

const StyledH2 = styled(H2)`
  margin: 0 0 ${theme.spacing[1]} ${theme.spacing[3]};
`;

type Props = {
  children: React.ReactNode;
  header: string;
};

export const Card: React.FC<Props> = ({ children, header }: Props) => {
  return (
    <Wrapper>
      <StyledH2>{header}</StyledH2>
      <Container>{children}</Container>
    </Wrapper>
  );
};
