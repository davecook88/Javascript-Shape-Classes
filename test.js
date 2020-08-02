const Shape = require("./Shape");

function testShape(shape) {
  let call_result = {};
  if (!shape) {
    console.log("shape was not created");
    return;
  }
  // check initialize function assigns all values
  if (shape.CV_type) {
    console.log("shape type:", shape.CV_type);
  } else {
    console.log("shape has no type");
  }

  if (shape.hasOwnProperty("IV_color")) {
    console.log("shape color:", shape.IV_color);
  } else {
    console.log("shape has no color");
  }

  if (shape.hasOwnProperty("IV_length")) {
    console.log("shape length:", shape.IV_length);
  } else {
    console.log("shape has no length");
  }

  if (shape.hasOwnProperty("print_values")) {
    shape.print_values;
  }

  const initialize_dictionary = {
    length: 20,
    color: "#0000ff",
  };

  call_result = shape.initialize(initialize_dictionary);
  console.log("initialize result", call_result);
  if (shape.IV_length === initialize_dictionary.length) {
    console.log("shape length initialized correctly");
  } else {
    console.log("Problem initializing length");
    console.log("initializer length", initialize_dictionary.length);
    console.log("IV_length", shape.IV_length);
  }
  if (shape.IV_color === initialize_dictionary.color) {
    console.log("shape color initialized correctly");
  } else {
    console.log("Problem initializing color");
    console.log("initializer color", initialize_dictionary.color);
    console.log("IV_color", shape.IV_color);
  }
  shape.printValues();
}

const shape = new Shape();
testShape(shape);

module.exports = testShape;
