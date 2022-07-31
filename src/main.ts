import { Enemy } from "./characters/Enemy";
import { Hero } from "./characters/Hero";
import { Sword } from "./equips/Sword";

const sword = new Sword();
const hero = new Hero(sword, "Rafael");
const enemy = new Enemy(sword, "Bobão");

hero.attack(enemy);
enemy.printLife();