// Objects

// Given the following about information about animals, create some objects: name, diet, weight, length, area

// Object 1 -- dog, omnivorous, 25lb, 2ft, worldwide

// Object 2 -- tiger, carnivorous, 400lb, 6ft, india

// Object 3 -- koala, herbivorous, 40lb, 3ft, australia
let dog = {
  name: 'dog',
  diet: 'omnivorous',
  weight: 25,
  length: '2ft',
  area: 'worldwide',
  bark: function() {
    return "Woof!";
  }
};
let tiger = {
  name: 'tiger',
  diet: 'carnivorous',
  weight: 400,
  length: '6ft',
  area: 'India',
  hunt: function() {
    if (Math.floor(Math.random() * 10) > 7) {
      this.weight += 5;
      return 'Tiger hunt successful';
    } else {
      this.weight -= 5;
      return 'Tiger hunt failed';
    }
  }
};
let koala = {
  name: "koala",
  diet: "herbivorous",
  weight: 40,
  length:"3ft",
  area: "australia",
  climb: function() {
    this.weight += 1;
    return "Eucalyptus is great!";
  }
};
/* Using the console, log the following

How much the dog weighs
What the diet of a tiger is
Where are koalas located
What is the length of all 3 objects

*/
console.log(dog.weight);
console.log(tiger.diet);
console.log(koala.area);
console.log(`Dog: ${dog.length}, Tiger: ${tiger.length}, Koala: ${koala.length}`);

// Create a new bark method for the dog. When called, return "Woof!"
// Create a new hunt method for the tiger. When called, if Math.random(10) is greater than 7, return "Tiger hunt successful" and add 5lb to the weight. If it is not, return "Tiger goes hungry" and subtract 5lbs to the weight.
// Create a new climb method for the koala. When called, return "Eucalyptus is great"
console.log(dog.bark());
console.log(tiger.hunt(), tiger.weight);
console.log(koala.climb(), koala.weight);
// Arrays

// Given this array of game characters, complete the following tasks

const gameCharacters = [
  {id: 1, name: "Mario", game: "Super Mario World", mission: "Save the Princess", enemy: "Bowser", subEnemies: ["Koopa", "Goomba", "BowserJr"]},
  {id: 2, name: "Clank", game: "Ratchet & Clank", mission: "Save the Universe", enemy: "Robot", subEnemies: ["small animal", "small robot", "mini boss"]},
  {id: 3, name: "Master Chief", game: "Halo", mission: "Save the Universe", enemy: "Covenant", subEnemies: ["small shooters", "snipers", "elite"]},
  {id: 4, name: "Donkey Kong", game: "Donkey Kong Country", mission: "Get bananas back", enemy: "Kroc", subEnemies: ["snakes", "gators", "bees"]},
  {id: 5, name: "Sonic", game: "Sonic the Hedgehog", mission: "collect coins", enemy: "Dr Eggman", subEnemies: ["lasers", "spikes", "shooters"]},
  {id: 6, name: "Jak", game: "Jak & Dexter", mission: "Get back life", enemy: "main boss", subEnemies: ["miniboss", "blaster", "shooter"]},

];

// Step 1: Create a new array that will contain all games. Once you have it made, sort it ascending[A-Z]. Log the result. Solve two ways:

// For Loop
let newArr = [];

for(let i =0; i < gameCharacters.length; i++) {
  newArr.push(gameCharacters[i].game);
}
newArr.sort();
console.log(newArr);

// Map or forEach
let newArr2 = gameCharacters.map(character => character.game).sort();
// let newArr2 = gameCharacaters.map(function(character) { return character.game;});

console.log(newArr2, "mapping");

let newArr3 = [];

gameCharacters.forEach(character => {
  newArr3.push(character.game);
});
newArr3.sort();
console.log(newArr3, 'foreach');




// Step 2: Create a new array that will contain the name and mission of each character.Log the result. Solve two ways:

// For Loop

// Map or forEach


// Step 3: Find out how many sub enemies are in each character. Display the number as well as the array. After you have displayed it, then take out the first sub enemy of each character and return the new results. Solve two ways

// For Loop

// Map or forEach

// Step 4: Find out how many missions include the term "save" (NOTE CAPITALIZATION SHOULD BE NULLIFIED IT SHOULDNT MATTER IF THE TERM HAS A CAP OR NOT). Log that result of the missions that do. Solve two ways:

// For Loop

// Map or forEach or filter
