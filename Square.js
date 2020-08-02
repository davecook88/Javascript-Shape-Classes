const Shape = require('./Shape');

class Square extends Shape {
  constructor(){
    super();
    const CI = this;
    
  }

  calculateArea(){
    let call_result = {};
    const debug_data = [];
    const return_msg = "example_code:square:calculateArea ";
    const task_id = "example_code:square:calculateArea";
    const CI = this;
    let area = 0;

    area = CI.IV_length * CI.IV_length;

    return {success: RC.success, return_msg: return_msg, debug_data: debug_data, area:area};
  }
}

Square.prototype.CV_type = 'square';
module.exports = Square;