"use strict";

const isSquare = () => true;
const isRectangle = () => true;
const isQuadrilateral = () => true;
const isCircle = () => false;

let square;

function checkShape(shape) {
  switch (true) {
    case isSquare(shape):
      console.log("This shape is a square.");
    case isRectangle(shape):
      console.log("This shape is a rectangle.");
    case isQuadrilateral(shape):
      console.log("This shape is a quadrilateral.");
      break;
    case isCircle(shape):
      console.log("This shape is a circle.");
      break;
  }
}

checkShape(square); // This shape is a square.
                    // This shape is a rectangle.
                    // This shape is a quadrilateral.
