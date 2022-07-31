import { css, Theme } from "@emotion/react";
import { useEffect, useState } from "react";
import { useGameContext } from "~/contexts/Game.context";
import { EventLine } from "./EventLine.component";

export const Console = () => {
  const { actions, addAction } = useGameContext();

  useEffect(() => {
    console.log("mount");
    return () => console.log("unmount");
  });

  return (
    <>
      <div css={consoleWrapper}>
        {actions.length > 0 ? (
          actions.map((action, index) => {
            return (
              <EventLine
                key={`${index}-${action}`}
                actionText={action}
                showCarrot={index === actions.length - 1}
              />
            );
          })
        ) : (
          <EventLine actionText="" showCarrot />
        )}
      </div>
      <button onClick={() => addAction("ação de teqweqweqwste")}>Teste</button>
    </>
  );
};

const consoleWrapper = (theme: Theme) => css`
  background-color: ${theme.color.secondary};
  border-radius: 4px;
  padding: 1rem;
  max-width: 800px;
  height: 400px;
  margin: 0rem auto;
  box-shadow: 0px 4px 8px ${theme.color.shadow};
  display: grid;
  align-content: flex-start;
  justify-items: left;
  overflow: auto;
`;
