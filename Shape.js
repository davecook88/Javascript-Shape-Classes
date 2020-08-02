const RC = require("./validation");

class Shape {
  constructor() {
    const CI = this;
    CI.IV_length = 10;
    CI.IV_color = "#000000";
  }

  initialize(attributes) {
    let call_result = "";
    const debug_data = [];
    const return_msg = "example_code:shape:initialize ";
    const task_id = "example_code:shape:initialize";
    const CI = this;

    // validate inputs
    call_result = RC.is_object(attributes);
    if (call_result !== RC.success) {
      return_msg += "attributes must be an object";
      return {
        success: RC.failure,
        return_msg: return_msg,
        debug_data: debug_data,
      };
    }

    if (attributes.hasOwnProperty("length")) {
      CI.setLength(attributes.length);
    }
    if (attributes.hasOwnProperty("color")) {
      call_result = RC.is_hex_color(attributes.color);
      if (call_result !== RC.success) {
        return_msg += "invalid color attribute ";
        return {
          success: RC.failure,
          return_msg: return_msg,
          debug_data: debug_data,
        };
      }
      CI.setColor(attributes.color);
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
    const return_msg = "example_code:shape:calculateArea ";
    const task_id = "example_code:shape:calculateArea";
    const CI = this;

    return {
      success: RC.success,
      return_msg: return_msg,
      debug_data: debug_data,
    };
  }

  getType() {
    let call_result = {};
    const debug_data = [];
    const return_msg = "example_code:shape:getType ";
    const task_id = "example_code:shape:getType";
    const CI = this;
    let type = "";

    type = CI.CV_type;
    return {
      success: RC.success,
      return_msg: return_msg,
      debug_data: debug_data,
      type: type,
    };
  }

  getColor() {
    let call_result = {};
    const debug_data = [];
    const return_msg = "example_code:shape:getColor ";
    const task_id = "example_code:shape:getColor";
    const CI = this;
    let color = "";

    color = CI.IV_color;
    return {
      success: RC.success,
      return_msg: return_msg,
      debug_data: debug_data,
      color: color,
    };
  }

  getLength() {
    let call_result = {};
    const debug_data = [];
    const return_msg = "example_code:shape:getLength ";
    const task_id = "example_code:shape:getLength";
    const CI = this;
    let length = "";

    length = CI.IV_length;
    return {
      success: RC.success,
      return_msg: return_msg,
      debug_data: debug_data,
      length: length,
    };
  }

  printValues() {
    let call_result = {};
    call_result = this.getLength();
    console.log("length: " + call_result.length);
    call_result = this.getColor();
    console.log("color: " + call_result.color);
    call_result = this.getType();
    console.log("type: " + call_result.type);
    call_result = this.calculateArea();
    if (call_result.area) {
      console.log("area: " + call_result.area);
    }
  }

  setColor(color) {
    let call_result = {};
    const debug_data = [];
    const return_msg = "example_code:shape:setColor ";
    const task_id = "example_code:shape:setColor";
    const CI = this;

    call_result = RC.is_hex_color(color);
    if (call_result !== RC.success) {
      return_msg += "invalid color ";
      return {
        success: RC.failure,
        return_msg: return_msg,
        debug_data: debug_data,
      };
    }
    CI.IV_color = color;
    return {
      success: RC.success,
      return_msg: return_msg,
      debug_data: debug_data,
    };
  }

  setLength(length) {
    let call_result = {};
    const debug_data = [];
    const return_msg = "example_code:shape:setLength ";
    const task_id = "example_code:shape:setLength";
    const CI = this;

    call_result = RC.is_number(length);
    if (call_result !== RC.success) {
      return_msg += "invalid length ";
      return {
        success: RC.failure,
        return_msg: return_msg,
        debug_data: debug_data,
      };
    }
    CI.IV_length = length;
    return {
      success: RC.success,
      return_msg: return_msg,
      debug_data: debug_data,
      length: length,
    };
  }
}

Shape.prototype.CV_type = "shape";

module.exports = Shape;
