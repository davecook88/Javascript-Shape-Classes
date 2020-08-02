const RC = require("./validation");

const Shape = require("./Shape");

class Rectangle extends Shape {
  constructor() {
    super();
    const CI = this;
    CI.IV_width = 20;
    CI.printValues();
  }

  initialize(attributes) {
    let call_result = {};
    const debug_data = [];
    const return_msg = "example_code:recangle:initialize ";
    const task_id = "example_code:recangle:initialize";
    const CI = this;

    call_result = super.initialize(attributes);
    if (attributes.hasOwnProperty("width")) {
      CI.setWidth(attributes.width);
    } else {
      return_msg += "no width attribute specified ";
    }

    return {
      success: RC.success,
      return_msg: return_msg,
      debug_data: debug_data,
    };
  }

  calculateArea() {
    let call_result = {};
    const debug_data = [];
    const return_msg = "example_code:rectangle:calculateArea ";
    const task_id = "example_code:rectangle:calculateArea";
    const CI = this;
    let area = 0;

    area = CI.IV_length * CI.IV_width;

    return {
      success: RC.success,
      return_msg: return_msg,
      debug_data: debug_data,
      area: area,
    };
  }

  getWidth() {
    let call_result = {};
    const debug_data = [];
    const return_msg = "example_code:recangle:getWidth ";
    const task_id = "example_code:recangle:getWidth";
    const CI = this;
    let width = "";

    width = CI.IV_width;
    return {
      success: RC.success,
      return_msg: return_msg,
      debug_data: debug_data,
      width: width,
    };
  }

  printValues() {
    const CI = this;
    let call_result = {};
    call_result = CI.getWidth();
    console.log("width: " + call_result.width);
    super.printValues();
  }

  setWidth(width) {
    let call_result = {};
    const debug_data = [];
    const return_msg = "example_code:recangle:setWidth ";
    const task_id = "example_code:recangle:setWidth";
    const CI = this;

    call_result = RC.is_number(width);
    if (call_result !== RC.success) {
      return_msg += "invalid width ";
      return {
        success: RC.failure,
        return_msg: return_msg,
        debug_data: debug_data,
      };
    }
    CI.IV_width = width;
    return {
      success: RC.success,
      return_msg: return_msg,
      debug_data: debug_data,
      width: width,
    };
  }
}

Rectangle.prototype.CV_type = "rectangle";
module.exports = Rectangle;
