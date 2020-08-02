const RC = require("./validation");
const Shape = require('./Shape');

class Circle extends Shape {
  constructor(){
    super();
    const CI = this;
    
  }

  calculateArea(){
    let call_result = {};
    const debug_data = [];
    const return_msg = "example_code:circle:calculateArea ";
    const task_id = "example_code:circle:calculateArea";
    const CI = this;
    let area = 0;

    area = ((CI.IV_length / 2) * Math.PI) * ((CI.IV_length / 2) * Math.PI);

    return {success: RC.success, return_msg: return_msg, debug_data: debug_data, area:area};
  }
}

Circle.prototype.CV_type = 'circle';
module.exports = Circle;