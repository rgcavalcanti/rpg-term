import { css, Global, Theme } from "@emotion/react";

const globalStyle = (theme: Theme) => css`
  * {
    font-family: 'Courier New', Courier, monospace;
  }

  body {
    background-color: ${theme.color.background};
  }
`;

export const GlobalStyle = () => <Global styles={globalStyle} />;
