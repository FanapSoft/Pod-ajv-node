/**
 * @namespace PodAjv
 */

// External Modules
const Ajv = require('ajv');

// Variable Initialization
const ajv = new Ajv({ allErrors: true, jsonPointers: true });
require('ajv-keywords')(ajv);
require('ajv-errors')(ajv /*, {singleError: true} */);

const regexObj = {
  notEmpty: /^[\s\t\r\n]*$/,
  shamsiDate: /^[1][3-5][0-9]{2}\/([1-9]|0[1-9]|1[0-2])\/([1-2][0-9]|0[1-9]|3[0-1]|[1-9])$/,
  shamsiDateTime: /^[1][3-5][0-9]{2}\/([1-9]|0[1-9]|1[0-2])\/([1-2][0-9]|0[1-9]|3[0-1]|[1-9])( (2[0-3]|[01]?[0-9]):[0-5]?[0-9](:[0-5]?[0-9])?)?$/,
  shamsiDateTimeMan: /^[1][3-5][0-9]{2}\/([1-9]|0[1-9]|1[0-2])\/([1-2][0-9]|0[1-9]|3[0-1]|[1-9])( (2[0-3]|[01]?[0-9]):[0-5]?[0-9](:[0-5]?[0-9])?)$/,
  shamsiDateTimeToMin: /^[1][3-5][0-9]{2}\/([1-9]|0[1-9]|1[0-2])\/([1-2][0-9]|0[1-9]|3[0-1]|[1-9])( (2[0-3]|[01]?[0-9]):[0-5]?[0-9])$/,
  integerString: /^[+-]?(0|[1-9][0-9]*)$/,
  phone: /^(0[1-8][1-9]-?)?[1-9][0-9]{7}$/,
  mobile: /^(0|\+98|0098){1}[9]{1}[\d]{9}$/,
  postalCode: /^(?!(\d)\\1{3})[13-9]{4}[1346-9][013-9]{5}$/,
  sheba: /^(\d)(?!\1{23}$)\d{23}$/,
  nationalCode: /^\d{10}$/,
  billId: /^[0-9]{4,11}[1-6][0-9]$/,
  paymentId: /^[0-9]{6,13}$/
};

ajv.addKeyword('notEmpty', {
  compile: function (sch, parentSchema) {
    return function validate (data) {
      if (typeof data !== 'string' || regexObj.notEmpty.test(data)) {
        return false;
      }
      return true;
    };
  }
});

ajv.addKeyword('shamsiDate', {
  compile: function (sch, parentSchema) {
    return function validate (data) {
      if (typeof data !== 'string' || !regexObj.shamsiDate.test(data)) {
        return false;
      }
      return true;
    };
  }
});

ajv.addKeyword('shamsiDateTime', {
  compile: function (sch, parentSchema) {
    return function validate (data) {
      if (typeof data !== 'string' || !regexObj.shamsiDateTime.test(data)) {
        return false;
      }
      return true;
    };
  }
});

ajv.addKeyword('integerString', {
  compile: function (sch, parentSchema) {
    return function validate (data) {
      if (typeof data !== 'string' || !regexObj.integerString.test(data)) {
        return false;
      }
      return true;
    };
  }
});

ajv.addKeyword('phone', {
  compile: function (sch, parentSchema) {
    return function validate (data) {
      if (typeof data !== 'string' || !regexObj.phone.test(data)) {
        return false;
      }
      return true;
    };
  }
});

ajv.addKeyword('mobile', {
  compile: function (sch, parentSchema) {
    return function validate (data) {
      if (typeof data !== 'string' || !regexObj.mobile.test(data)) {
        return false;
      }
      return true;
    };
  }
});

ajv.addKeyword('postalCode', {
  compile: function (sch, parentSchema) {
    return function validate (data) {
      if (typeof data !== 'string' || !regexObj.postalCode.test(data)) {
        return false;
      }
      return true;
    };
  }
});

ajv.addKeyword('inArray', {
  compile: function (sch, parentSchema) {
    return function validate (data) {
      let isFound = false;
      for (let i = 0; i < sch.length; i++) {
        if (data === sch[i]) {
          isFound = true;
          break;
        }
      }
      return isFound;
    };
  }
});

ajv.addKeyword('sheba', {
  compile: function (sch, parentSchema) {
    return function validate (data) {
      if (typeof data !== 'string' || !regexObj.sheba.test(data)) {
        return false;
      }
      return true;
    };
  }
});

ajv.addKeyword('nationalCode', {
  compile: function (sch, parentSchema) {
    return function validate (data) {
      if (typeof data !== 'string' || !regexObj.nationalCode.test(data) || data.length !== 10) {
        return false;
      }
      return true;
    };
  }
});

ajv.addKeyword('shamsiDateTimeToMin', {
  compile: function (sch, parentSchema) {
    return function validate (data) {
      if (typeof data !== 'string' || !regexObj.shamsiDateTimeToMin.test(data)) {
        return false;
      }
      return true;
    };
  }
});

ajv.addKeyword('shamsiDateTimeMan', {
  compile: function (sch, parentSchema) {
    return function validate (data) {
      if (typeof data !== 'string' || !regexObj.shamsiDateTimeMan.test(data)) {
        return false;
      }
      return true;
    };
  }
});

ajv.addKeyword('billId', {
  compile: function (sch, parentSchema) {
    return function validate (data) {
      if (typeof data !== 'string' || !regexObj.billId.test(data)) {
        return false;
      }
      return true;
    };
  }
});

ajv.addKeyword('paymentId', {
  compile: function (sch, parentSchema) {
    return function validate (data) {
      if (typeof data !== 'string' || !regexObj.paymentId.test(data)) {
        return false;
      }
      return true;
    };
  }
});

module.exports = ajv;
