"use strict";

const isSquare = () => true;
const isRectangle = () => true;
const isQuadrilateral = () => true;
const isCircle = () => false;

let square;

function checkShape(shape) {
  if (isQuadrilateral(shape)) {
    if (isRectangle(shape)) {
      if (isSquare(shape)) {
        console.log("This shape is a square.");
      }
      console.log("This shape is a rectangle.");
    }
    console.log("This shape is a quadrilateral.");
  }
  else if (isCircle(shape)) {
    console.log("this shape is a circle.");
  }
}

checkShape(square); // This shape is a square.
                    // This shape is a rectangle.
                    // This shape is a quadrilateral.
