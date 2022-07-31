export abstract class Weapon {
  abstract damage: number;

  getDamage() {
    return this.damage;
  }
}