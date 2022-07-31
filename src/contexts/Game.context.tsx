import React, { createContext, useContext, useState } from "react";

type GameContextProps = {
  actions: string[];
  addAction(action: string): void;
};

const GameContext = createContext<GameContextProps>({
  actions: [""],
  addAction: () => {},
});

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [actions, setActions] = useState<string[]>([
    "Parabéns, seu jogo começou",
    "Teste de segunda ação",
    "Teste de terceira ação",
  ]);
  const [animationDelay, setAnimationDelay] = useState(0);

  const resetAnimationDelay = () => {
    setAnimationDelay
  };

  const increaseAnimationDelay = () => {};

  const addAction = (action: string) => {
    setActions((oldActions) => [...oldActions, action]);
  };

  return (
    <GameContext.Provider value={{ actions, addAction }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
