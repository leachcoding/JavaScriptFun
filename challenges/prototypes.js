/* ---- LETS PRACTICE PROTOTYPES ---- */

// Task: You are to build a pentagonal pyramid that can return values for its volume as well as its surface areas. Follow the steps to achieve this.

// Step 1: Base Constructor -- You should create a constructor function names PentagonalPyramid that will accept properties for its base, edge, and heights.
function PentagonalPyramid(attr) {
  this.edge = attr.edge;
  this.height = attr.height;
  this.length = attr.length;
}

// Step 2: Volume Method -- You should create a prototype for PentagonalPyramid that returns the volume of a pentagonal pyramid. Curious about the formula??? Use Google (A DEVELOPERS BEST FRIEND)
PentagonalPyramid.prototype.volume = function() {
  let formulaVolume = (5/6) * this.edge * this.height * this.length;
  return formulaVolume;
}
// Step 3: Surface Area Method -- You should create a prototype fro PentagonalPyramid that returns the surface area of a pentagonal pyramid. Curious about the formula??? Use Google (A DEVELOPERS BEST FRIEND)
PentagonalPyramid.prototype.surfaceArea = function() {
  let formulaSurfaceArea = (((5/2) * this.length * this.edge) + ((5/2) * this.edge * this.height));
  return formulaSurfaceArea
}
console.log(PentagonalPyramid, "Constructor");
// Step 4: New Object -- You should create a new object that uses PentagonalPyramid. Give it the length, width, and height.
const pyramid = new PentagonalPyramid( {
  'edge': 5,
  'height': 2,
  'length': 4
});
// Test your volume and surfaceArea methods here using console.log
console.log(pyramid, 'pyramid');
console.log(pyramid.volume());
console.log(pyramid.surfaceArea());

/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.
  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.
  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject(buggy) {
  this.createdAt = buggy.createdAt;
  this.name = buggy.name;
  this.dimensions = buggy.dimensions;
}

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`
}
/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(bob) {
  GameObject.call(this, bob);
  this.healthPoints = bob.healthPoints;
}

//This is the Inheritance
CharacterStats.prototype = Object.create(GameObject.prototype)
// Prototype Method is Created here
CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`
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
function Humanoid(q) {
  CharacterStats.call(this, q);
  this.team = q.team;
  this.weapons = q.weapons;
  this.language = q.language;
}
//This is the inheritance
Humanoid.prototype = Object.create(CharacterStats.prototype);
// Prototype Method is created here
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`
}

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:

  const mage = new Humanoid({
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

  const swordsman = new Humanoid({
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

  const archer = new Humanoid({
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
const arr = [archer, swordsman, mage];
console.log(arr);
console.log(mage.createdAt);
console.log(archer.dimensions);
console.log(swordsman.healthPoints);
console.log(mage.name);
console.log(archer.language);
console.log(archer.greet());
console.log(swordsman.greet());
console.log(mage.takeDamage());
console.log(swordsman.destroy());

console.log(swordsman.dimensions, "EXAMPLE");
console.log(archer.dimensions, "EXAMPLE");



// Villain Contructor Function
function Villain(attr) {
  Humanoid.call(this, attr);
  this.lightningBolt = attr.lightningBolt;
  this.opponentHealth = attr.opponentHealth;
}

// Inheritance
Villain.prototype = Object.create(Humanoid.prototype);

// Protype Method is Created here
Villain.prototype.attack = function() {
  this.opponentHealth -= 10;
  return `A flash of light! The great ${this.name} will finish you and use your bones for stew!`;
}

// Hero Contructor Function
function Hero(attr) {
  Humanoid.call(this, attr);
  this.holyLight = attr.holyLight;
  this.opponentHealth = attr.opponentHealth;
}
// Inheritance
Hero.prototype = Object.create(Humanoid.prototype);
// Protype Method is Created here
Hero.prototype.returnFire = function() {
  this.opponentHealth -= 15;
  return `${this.name} fires back, unshaken.`
}


const Maestro = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 5,
  },
  healthPoints: 15,
  name: 'Maestro',
  team: 'Forest Kingdom',
  weapons: [
    'Staff',
    'Dagger',
    'Spellbook',
  ],
  language: 'Demonic',
  lightningBolt: 'Lightning Strike',
  opponentHealth: 20
})

const HeroMan = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 20,
  name: 'HeroMan',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Sword&Shield',
  ],
  language: 'Human',
  holyLight: 'Holy Light, strike with thine might',
  opponentHealth: 15,
});


console.log(`${HeroMan.name} walked into ${Maestro.name}s trap!`);
console.log(`${Maestro.attack()}`);
console.log(`${HeroMan.name} recoils, and now has ${Maestro.opponentHealth} Health`);
console.log(`${HeroMan.returnFire()}`);
console.log(`${Maestro.name} falters, crumbling to the ground, leaving ${HeroMan.opponentHealth} Health left`);
