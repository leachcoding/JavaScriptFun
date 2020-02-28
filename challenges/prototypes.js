/* ---- LETS PRACTICE PROTOTYPES ---- */

// Task: You are to build a pentagonal pyramid that can return values for its volume as well as its surface areas. Follow the steps to achieve this.

// Step 1: Base Constructor -- You should create a constructor function names PentagonalPyramid that will accept properties for its base edge, and heights.
function PentagonalPyramid(attr) {
  this.edge = attr.edge;
  this.height = attr.height;
}

// Step 2: Volume Method -- You should create a prototype for PentagonalPyramid that returns the volume of a pentagonal pyramid. Curious about the formula??? Use Google (A DEVELOPERS BEST FRIEND
PentagonalPyramid.prototype.volume = function() {
  let formulaVolume = ((5/12)*(Math.sin(54)/Math.cos(54)))*(this.height)*(Math.pow(this.edge, 2));
  return formulaVolume;
}

// Step 3: Surface Area Method -- You should create a prototype fro PentagonalPyramid that returns the surface area of a pentagonal pyramid. Curious about the formula??? Use Google (A DEVELOPERS BEST FRIEND)
PentagonalPyramid.prototype.surfaceArea = function() {
  // let formulaSurfaceArea = ((5/4) * (Math.sin(54)/Math.cos(54)) * (this.edge * this.edge)) + (((5*this.edge)/2) * Math.sqrt((this.height * this.height) + (((this.edge * (Math.sin(54)/Math.cos(54)))/2)**);
  let formulaSurfaceArea = 5
  return formulaSurfaceArea;
}
console.log(PentagonalPyramid, "Constructor");
// Step 4: New Object -- You should create a new object that uses PentagonalPyramid. Give it the length, width, and height.
const pyramid = new PentagonalPyramid( {
  'edge': 5,
  'height': 2
});
// Test your volume and surfaceArea methods here using console.log
console.log(pyramid);
console.log(pyramid.volume());
console.log(pyramid.surfaceArea());
