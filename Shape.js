const RC = require('./validation');

class Shape {
  constructor(){
    const CI = this;
    CI.type = 'shape';
    CI.length = 10;
    CI.color = '#000000';

  }

  initialize(){

  }
}

module.exports = Shape;