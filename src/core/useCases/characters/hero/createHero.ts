import { Character } from "~/core/entities/Character.interface";

export const createHero = (heroName?: string): Character => {
  return {
    name: heroName ?? "Hero",
    defense: 10,
    life: 100,
    strengh: 10,
  };
};
