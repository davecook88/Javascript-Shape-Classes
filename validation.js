const RC = {
  is_string: function(str) {
    if (isString(str)){
      return this.success;
    } else {
      return this.failure;
    }
  },
  is_hex_color: function (str) {
    if (this.is_string(str)){
      if (str.match(/^#(?:[0-9a-f]{3}){1,2}$/i) !== undefined) {
        return this.success;
      }
    }
    return this.failure;
  },
  is_number: function(n){
    if(isNumber(n)){
      return this.success;
    } else {
      return this.failure;
    }
  },
  is_object: function(o){
    if (isObject(o)){
      return this.success;
    } else {
      return this.failure;
    }
  },
  success:'success',
  failure:'failure'
}

module.exports = RC;