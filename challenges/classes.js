// Copy and paste your prototype in here and refactor into class syntax.

// Test the volume and surfaceArea methods using console.log. If you're unsure what the actual volumes and surfaceAreas should be, Google is once again your best friend.

// STRETCH: Extend the base class PentagonalPyramid with a subclass called Pyramid. Find the formulas for volume and surfaceArea for regular pyramids and create those methods using dimension properties from PentagonalPyramid. Test your work by logging out the volume and surfaceArea.


// Refactor yesterdays DND game to class syntax

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
class GameObjects {
  constructor(attributes) {
    this.createdAt = attributes.createdAt;
    this.name = attributes.name;
    this.dimensions = attributes.dimensions;
  }

  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
class CharactersStats extends GameObjects {
  constructor(charStatAttributes) {
    super(charStatAttributes);
    this.healthPoints = charStatAttributes.healthPoints;
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }
}
/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
class Humanoids extends CharactersStats {
  constructor(humanoidAttributes) {
    super(humanoidAttributes);
    this.team = humanoidAttributes.team;
    this.weapons = humanoidAttributes.weapons;
    this.language = humanoidAttributes.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}`;
  }

}

  const mage = new Humanoids({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 25,
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoids({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoids({
    createdAt: new Date(),
    dimensions: 1,
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
 console.log(mage.createdAt);
 console.log(archer.dimensions);
 console.log(swordsman.destroy());
 console.log(archer.greet());
 console.log(mage.takeDamage());
