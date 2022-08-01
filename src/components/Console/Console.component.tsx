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
        <div css={head}>
          <h2>Console</h2>
          <span>-</span>
          <span>+</span>
          <span>x</span>
        </div>
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
  background-color: ${theme.color.nord0};
  border-radius: 8px;
  padding: 1rem;
  max-width: 800px;
  height: 400px;
  margin: 0rem auto;
  box-shadow: 0px 4px 10px 4px ${theme.color.nord1};
  display: grid;
  align-content: flex-start;
  justify-items: left;
  overflow: auto;
`;

const head = (theme: Theme) => css`
  display: grid;
  grid-auto-flow: column;
  border-bottom: 1px solid ${theme.color.nord3};
  width: 100%;
  padding-bottom: .5rem;
  margin-bottom: .5rem;
  color: ${theme.color.nord4};
  grid-template-columns: 1fr auto auto auto;

  * {
    margin: 0px;
  }

  span {
    letter-spacing: 1rem;
  }
`