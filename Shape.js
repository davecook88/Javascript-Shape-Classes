const RC = require("./validation");

class Shape {
  constructor() {
    const CI = this;
    CI.type = "shape";
    CI.length = 10;
    CI.color = "#000000";
  }

  initialize(attributes) {
    const call_result = {};
    const debug_data = [];
    const return_msg = "example_code:shape:initialize ";
    const task_id = "example_code:shape:initialize";
    const CI = this;

    // validate inputs
    const attributesIsObject = RC.is_object(attributes);
    if (!attributesIsObject) {
      return_msg += "attributes must be an object";
      return {
        success: RC.failure,
        return_msg: return_msg,
        debug_data: debug_data,
      };
    }

    if (attributes.hasOwnProperty(length)){
      const length_is_number = RC.is_number(attributes.length);
      CI.set_length(attributes.length);
    }
    if (attributes.hasOwnProperty(length)){
      CI.set_length(length);
    }

    return {
      success: RC.success,
      return_msg: return_msg,
      debug_data: debug_data,
    };
  }
}

module.exports = Shape;
