import { css, Theme } from "@emotion/react";
import { Console } from "./components/Console/Console.component";
import { GameProvider } from "./contexts/Game.context";

export const App = () => {
  return (
    <GameProvider>
      <h1 css={title}>Term-RPG</h1>
      <Console />
    </GameProvider>
  );
};

const title = (theme: Theme) => css`
  text-align: center;
  color: ${theme.color.nord4};
`;
