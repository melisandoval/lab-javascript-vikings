// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    return this.health > 0
      ? `${this.name} has received ${damage} points of damage`
      : `${this.name} has died in act of combat`;
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    this.health -= damage;
    return this.health > 0
      ? `A Saxon has received ${damage} points of damage`
      : `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    const randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    let result = randomSaxon.receiveDamage(randomViking.strength);
    this.saxonArmy = this.saxonArmy.filter((saxon) => saxon.health > 0);
    return result;
  }

  saxonAttack() {
    const randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    let result = randomViking.receiveDamage(randomSaxon.strength);
    this.vikingArmy = this.vikingArmy.filter((viking) => viking.health > 0);
    return result;
  }

  // Iteration 5
  // a method to replace the vikingAttack() and saxonAttack() methods:

  armyAttack(armyAttacking) {
    const randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    if (armyAttacking === vikingArmy) {
      let result = randomSaxon.receiveDamage(randomViking.strength);
      this.saxonArmy = this.saxonArmy.filter((saxon) => saxon.health > 0);
      return result;
    }

    if (armyAttacking === saxonArmy) {
      let result = randomViking.receiveDamage(randomSaxon.strength);
      this.vikingArmy = this.vikingArmy.filter((viking) => viking.health > 0);
      return result;
    }
  }

  showStatus() {
    if (!this.saxonArmy.length) {
      return "Vikings have won the war of the century!";
    }
    if (!this.vikingArmy.length) {
      return "Saxons have fought for their lives and survived another day...";
    }

    if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
