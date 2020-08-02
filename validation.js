const RC = {
  is_string: (str) => isString(str),
  is_hex_color: function (str) {
    if (this.is_string(str)){
      return str.match(/^#(?:[0-9a-f]{3}){1,2}$/i) !== undefined;
    }
    return false;
  },
  is_number: (n) => isNumber(n),

}

module.exports = RC;