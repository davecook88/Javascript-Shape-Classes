const Shape = require('./Shape');

function testShape(shape){
  
  if (!shape) {
    console.log('shape was not created');
    return;
  }
  // check initialize function assigns all values
  if (shape.hasOwnProperty('CV_type')) {
    console.log('shape type:', shape.type);
  } else {
    console.log('shape has no type');
  }

  if (shape.hasOwnProperty('IV_color')) {
    console.log('shape color:', shape.IV_color);
  } else {
    console.log('shape has no color');
  }

  if (shape.hasOwnProperty('IV_length')) {
    console.log('shape length:', shape.IV_length);
  } else {
    console.log('shape has no length');
  }

  if (shape.hasOwnProperty('print_values')){
    shape.print_values;
  }

  const initialize_dictionary = {
    length:20,
    color:"#000000"
  };

  shape.initialize(initialize_dictionary);

  if (shape.CI_length === initialize_dictionary.length){
    console.log('shape length initialized correctly');
  } else {
    console.log('Problem initializing length');
    console.log('initializer length', initialize_dictionary.length);
    console.log('CI_length', shape.CI_length);
  }
  if (shape.CI_color === initialize_dictionary.color){
    console.log('shape color initialized correctly');
  } else {
    console.log('Problem initializing color');
    console.log('initializer color', initialize_dictionary.color);
    console.log('CI_color', shape.CI_color);
  }
}

const shape = new Shape();
testShape(shape);

module.exports = testShape;