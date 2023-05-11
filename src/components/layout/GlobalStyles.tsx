import { createGlobalStyle } from 'styled-components';

import { theme } from '../../lib/theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${theme.gradients.background};
    color: ${theme.colors.textSecondary};
    font-family: ${theme.typography.fontFamily};
    font-size: 16px;
    min-height: 100vh;
    min-width: 100vw;
  }
  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
