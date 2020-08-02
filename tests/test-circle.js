const Circle = require("../Circle.js");

function testCircle(circle) {
  let call_result = {};
  if (!circle) {
    console.log("circle was not created");
    return;
  }
  // check initialize function assigns all values
  if (circle.CV_type) {
    console.log("circle type:", circle.CV_type);
  } else {
    console.log("circle has no type");
  }

  if (circle.hasOwnProperty("IV_color")) {
    console.log("circle color:", circle.IV_color);
  } else {
    console.log("circle has no color");
  }

  if (circle.hasOwnProperty("IV_length")) {
    console.log("circle length:", circle.IV_length);
  } else {
    console.log("circle has no length");
  }
  // Check printValues() method
  if (circle.hasOwnProperty("printValues")) {
    circle.printValues();
  }

  const initialize_dictionary = {
    length: 20,
    color: "#0000ff",
  };
  
  call_result = circle.initialize(initialize_dictionary);
  console.log("initialize result", call_result);
  // Compare length in rectangle object with value passed into initialize method
  if (circle.IV_length === initialize_dictionary.length) {
    console.log("circle length initialized correctly");
  } else {
    console.log("Problem initializing length");
    console.log("initializer length", initialize_dictionary.length);
    console.log("IV_length", circle.IV_length);
  }
  // Compare color in rectangle object with value passed into initialize method
  if (circle.IV_color === initialize_dictionary.color) {
    console.log("circle color initialized correctly");
  } else {
    console.log("Problem initializing color");
    console.log("initializer color", initialize_dictionary.color);
    console.log("IV_color", circle.IV_color);
  }
  circle.printValues();
}

const circle = new Circle();
testCircle(circle);

module.exports = testCircle;
