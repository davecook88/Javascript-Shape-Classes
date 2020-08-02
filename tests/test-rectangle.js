const Rectangle = require("../Rectangle.js");

function testRectangle(rectangle) {
  let call_result = {};
  if (!rectangle) {
    console.log("rectangle was not created");
    return;
  }
  // check initialize function assigns all values
  if (rectangle.CV_type) {
    console.log("rectangle type:", rectangle.CV_type);
  } else {
    console.log("rectangle has no type");
  }

  if (rectangle.hasOwnProperty("IV_color")) {
    console.log("rectangle color:", rectangle.IV_color);
  } else {
    console.log("rectangle has no color");
  }

  if (rectangle.hasOwnProperty("IV_length")) {
    console.log("rectangle length:", rectangle.IV_length);
  } else {
    console.log("rectangle has no length");
  }

  if (rectangle.hasOwnProperty("print_values")) {
    rectangle.print_values;
  }

  const initialize_dictionary = {
    length: 20,
    width:40,
    color: "#0000ff",
  };

  call_result = rectangle.initialize(initialize_dictionary);
  console.log("initialize result", call_result);

  // Compare length in rectangle object with value passed into initialize method
  if (rectangle.IV_length === initialize_dictionary.length) {
    console.log("rectangle length initialized correctly");
  } else {
    console.log("Problem initializing length");
    console.log("initializer length", initialize_dictionary.length);
    console.log("IV_length", rectangle.IV_length);
  }

  // Compare width in rectangle object with value passed into initialize method
  if (rectangle.IV_width === initialize_dictionary.width) {
    console.log("rectangle width initialized correctly");
  } else {
    console.log("Problem initializing width");
    console.log("initializer width", initialize_dictionary.width);
    console.log("IV_width", rectangle.IV_width);
  }

  // Compare color in rectangle object with value passed into initialize method
  if (rectangle.IV_color === initialize_dictionary.color) {
    console.log("rectangle color initialized correctly");
  } else {
    console.log("Problem initializing color");
    console.log("initializer color", initialize_dictionary.color);
    console.log("IV_color", rectangle.IV_color);
  }
  rectangle.printValues();
}

const rectangle = new Rectangle();
testRectangle(rectangle);

module.exports = testRectangle;
