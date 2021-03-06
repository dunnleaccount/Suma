'use strict';

angular.module('sumaAnalysis')
  .service('validation', function Validation() {
    this.isNumber = function (n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    };

    this.validateDateTime = function (value, maxLength, pad) {
      var stripped,
          val;

      // Cast value to string
      val = String(value);

      // Empty strings are valid
      if (val === '') {
        return true;
      }

      // Remove punctuation
      stripped = val.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g, '');

      // Pad with 0 if flag is true and length is 3 (times)
      if (pad && stripped.length === 3) {
        stripped = '0' + stripped;
      }

      // Values that are numeric and have a length of either 0 or the max are valid
      if (this.isNumber(stripped) && (stripped.length === 0 || stripped.length === maxLength)) {
        return true;
      }

      // String is invalid
      return false;
    };
  });
