// Copy and paste your prototype in here and refactor into class syntax.

// Test the volume and surfaceArea methods using console.log. If you're unsure what the actual volumes and surfaceAreas should be, Google is once again your best friend.

// STRETCH: Extend the base class PentagonalPyramid with a subclass called Pyramid. Find the formulas for volume and surfaceArea for regular pyramids and create those methods using dimension properties from PentagonalPyramid. Test your work by logging out the volume and surfaceArea.
class PentagonalPyramid2 {
  constuctor(attr) {
    this.length = attr.length;
    this.height = attr.height;
    this.edge = attr.edge;
  }

  vol() {
    return (5/6) * this.edge * this.height * this.length;
  }

  surArea() {
    return ((5/2)*this.length*this.edge) + ((5/2)*this.edge*this.height);
  }
}

const pyramid = new PentagonalPyramid2({
  'edge': 5,
  'height': 2,
  'length': 4,
})
