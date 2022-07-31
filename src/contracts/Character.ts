import { Weapon } from "./Weapon";

export abstract class Character {
  private name: string = "Hero";
  private life: number = 100;
  private strength: number = 10;
  private defense: number = 10;

  constructor(private weapon: Weapon, name?: string) {
    if (name) this.name = name;
  }

  attack(target: Character) {
    const totalDamage = this.weapon.getDamage() + this.strength;
    console.log(
      `${this.name} deal ${totalDamage} of damage to ${target.name}`
    );
    target.decreaseLife(totalDamage);
    
    return;
  }

  decreaseLife(damage: number) {
    console.log(`${this.name} suffered ${damage} of damage`)
    this.life = this.life - damage;
  }

  printLife() {
    console.log(`${this.name} has ${this.life} Life Points Left`);
  }
}
