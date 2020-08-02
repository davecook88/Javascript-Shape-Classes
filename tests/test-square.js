const Square = require("../Square");

function testSquare(square) {
  let call_result = {};
  if (!square) {
    console.log("square was not created");
    return;
  }
  // check initialize function assigns all values
  if (square.CV_type) {
    console.log("square type:", square.CV_type);
  } else {
    console.log("square has no type");
  }

  if (square.hasOwnProperty("IV_color")) {
    console.log("square color:", square.IV_color);
  } else {
    console.log("square has no color");
  }

  if (square.hasOwnProperty("IV_length")) {
    console.log("square length:", square.IV_length);
  } else {
    console.log("square has no length");
  }

  if (square.hasOwnProperty("print_values")) {
    square.print_values;
  }

  const initialize_dictionary = {
    length: 20,
    color: "#0000ff",
  };

  call_result = square.initialize(initialize_dictionary);
  console.log("initialize result", call_result);
  if (square.IV_length === initialize_dictionary.length) {
    console.log("square length initialized correctly");
  } else {
    console.log("Problem initializing length");
    console.log("initializer length", initialize_dictionary.length);
    console.log("IV_length", square.IV_length);
  }
  if (square.IV_color === initialize_dictionary.color) {
    console.log("square color initialized correctly");
  } else {
    console.log("Problem initializing color");
    console.log("initializer color", initialize_dictionary.color);
    console.log("IV_color", square.IV_color);
  }
  square.printValues();
}

const square = new SQuare();
testSquare(square);

module.exports = testSquare;
