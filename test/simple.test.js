// External Modules
const expect = require('chai').expect;

const podAjv = require('../lib/main');

describe('notEmpty', function () {
  it('wrong (whitespace)', function (done) {
    let schema = { notEmpty: [] };
    let data = '    ';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('wrong (empty string)', function (done) {
    let schema = { notEmpty: [] };
    let data = '';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('wrong (number)', function (done) {
    let schema = { notEmpty: [] };
    let data = 100;
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('correct form (not empty string)', function (done) {
    let schema = { notEmpty: [] };
    let data = '  Hello World!  ';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(true);
    done();
  });
});

describe('shamsiDate', function () {
  it('wrong (with whitespace)', function (done) {
    let schema = { shamsiDate: [] };
    let data = '  13980502  ';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('wrong (number)', function (done) {
    let schema = { shamsiDate: [] };
    let data = 13980502;
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('wrong (with dash)', function (done) {
    let schema = { shamsiDate: [] };
    let data = '1398-05-02';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('correct (with slash)', function (done) {
    let schema = { shamsiDate: [] };
    let data = '1398/02/05';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(true);
    done();
  });
  it('correct (with slash)', function (done) {
    let schema = { shamsiDate: [] };
    let data = '1398/2/5';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(true);
    done();
  });
});

describe('shamsiDateTime', function () {
  it('wrong (with whitespace)', function (done) {
    let schema = { shamsiDateTime: [] };
    let data = '  13980502  22:00:30';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('wrong (number)', function (done) {
    let schema = { shamsiDateTime: [] };
    let data = 13980502;
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('wrong (with dash)', function (done) {
    let schema = { shamsiDateTime: [] };
    let data = '1398-05-02 22:11:02';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('correct form', function (done) {
    let schema = { shamsiDateTime: [] };
    let data = '1398/02/05 12:02:14';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(true);
    done();
  });
});

describe('shamsiDateTimeMan', function () {
  it('wrong (with whitespace)', function (done) {
    let schema = { shamsiDateTimeMan: [] };
    let data = '  13980502  22:00:30';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('wrong (number)', function (done) {
    let schema = { shamsiDateTimeMan: [] };
    let data = 13980502;
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('wrong (with dash)', function (done) {
    let schema = { shamsiDateTimeMan: [] };
    let data = '1398-05-02 22:11:02';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('wrong (with no time)', function (done) {
    let schema = { shamsiDateTimeMan: [] };
    let data = '1398/02/05';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('correct form', function (done) {
    let schema = { shamsiDateTimeMan: [] };
    let data = '1398/02/05 12:02:14';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(true);
    done();
  });
});

describe('integerString', function () {
  it('wrong (with whitespace)', function (done) {
    let schema = { integerString: [] };
    let data = '  13980502  22:00:30';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('wrong (number)', function (done) {
    let schema = { integerString: [] };
    let data = 13980502;
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('wrong (number with characters)', function (done) {
    let schema = { integerString: [] };
    let data = '1398sdsd0502';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('correct form', function (done) {
    let schema = { integerString: [] };
    let data = '13680225';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(true);
    done();
  });
});

describe('phone', function () {
  it('wrong (with whitespace)', function (done) {
    let schema = { phone: [] };
    let data = '  31111111 ';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('wrong (number)', function (done) {
    let schema = { phone: [] };
    let data = 31111111;
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('wrong (number with characters)', function (done) {
    let schema = { phone: [] };
    let data = '1398sdsd0502';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('correct form', function (done) {
    let schema = { phone: [] };
    let data = '31111111';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(true);
    done();
  });
});

describe('mobile', function () {
  it('wrong (with whitespace)', function (done) {
    let schema = { mobile: [] };
    let data = '  09155234338 ';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('wrong (number)', function (done) {
    let schema = { mobile: [] };
    let data = 9155234338;
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('wrong (number with characters)', function (done) {
    let schema = { mobile: [] };
    let data = '0915dfdf5234338';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('correct form', function (done) {
    let schema = { mobile: [] };
    let data = '09155234338';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(true);
    done();
  });
});

describe('postalCode', function () {
  it('wrong (with whitespace)', function (done) {
    let schema = { postalCode: [] };
    let data = '  9189649178 ';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('wrong (number)', function (done) {
    let schema = { postalCode: [] };
    let data = 9189649178;
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('wrong (number with characters)', function (done) {
    let schema = { postalCode: [] };
    let data = '91896xx49178';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('correct form', function (done) {
    let schema = { postalCode: [] };
    let data = '9189649178';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(true);
    done();
  });
});

describe('postalCode', function () {
  it('wrong (with whitespace)', function (done) {
    let schema = { postalCode: [] };
    let data = '  9189649178 ';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('wrong (number)', function (done) {
    let schema = { postalCode: [] };
    let data = 9189649178;
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('wrong (number with characters)', function (done) {
    let schema = { postalCode: [] };
    let data = '91896xx49178';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('correct form', function (done) {
    let schema = { postalCode: [] };
    let data = '9189649178';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(true);
    done();
  });
});

describe('inArray', function () {
  it('wrong', function (done) {
    let schema = { inArray: [2, 3] };
    let data = '2';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('wrong', function (done) {
    let schema = { inArray: [2, 3] };
    let data = 10;
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('correct', function (done) {
    let schema = { inArray: [2, 3] };
    let data = 2;
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(true);
    done();
  });
});

describe('sheba', function () {
  it('wrong (with whitespace)', function (done) {
    let schema = { sheba: [] };
    let data = '  IR080570100611513898506001  ';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('wrong (number)', function (done) {
    let schema = { sheba: [] };
    let data = 13898506001;
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('correct', function (done) {
    let schema = { sheba: [] };
    let data = '080570100611513898506001';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(true);
    done();
  });
});

describe('instanceof', function () {
  it('wrong (with whitespace)', function (done) {
    let schema = { instanceof: 'Date' };
    let data = { a: 100 };
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('correct', function (done) {
    let schema = { instanceof: 'Date' };
    let data = new Date();
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(true);
    done();
  });
});

describe('enum', function () {
  it('wrong', function (done) {
    let schema = { enum: [2, 3], errorMessage: 'this is custom' };
    let data = '2';
    let result = podAjv.validate(schema, data);
    // console.log(podAjv.errors);
    expect(result).to.equal(false);
    done();
  });
  it('wrong', function (done) {
    let schema = { enum: [2, 3] };
    let data = 10;
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('correct', function (done) {
    let schema = { enum: [2, 3, 'test'] };
    let data = 'test';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(true);
    done();
  });
});

describe('uri', function () {
  it('wrong', function (done) {
    let schema = { type: 'string', format: 'uri', errorMessage: 'this is not a uri' };
    let data = '2';
    let result = podAjv.validate(schema, data);
    console.log(podAjv.errors);
    expect(result).to.equal(false);
    done();
  });
  it('wrong', function (done) {
    let schema = { type: 'string', format: 'uri', errorMessage: 'this is not a uri' };
    let data = 10;
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('wrong', function (done) {
    let schema = { type: 'string', format: 'uri', errorMessage: 'this is not a uri' };
    let data = 'www.google.com';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('correct', function (done) {
    let schema = { type: 'string', format: 'uri', errorMessage: 'this is not a uri' };
    let data = 'https://www.google.com/';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(true);
    done();
  });
});

describe('nationalCode', function () {
  it('wrong', function (done) {
    let schema = { nationalCode: [] };
    let data = '2';
    let result = podAjv.validate(schema, data);
    console.log(podAjv.errors);
    expect(result).to.equal(false);
    done();
  });
  it('wrong', function (done) {
    let schema = { nationalCode: [] };
    let data = 1111111111;
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('wrong', function (done) {
    let schema = { nationalCode: [] };
    let data = '12547ee852';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('correct', function (done) {
    let schema = { nationalCode: [] };
    let data = '0945700113';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(true);
    done();
  });
});

describe('shamsiDateTimeToMin', function () {
  it('wrong', function (done) {
    let schema = { shamsiDateTimeToMin: [] };
    let data = '2';
    let result = podAjv.validate(schema, data);
    // console.log(podAjv.errors);
    expect(result).to.equal(false);
    done();
  });
  it('wrong', function (done) {
    let schema = { shamsiDateTimeToMin: [] };
    let data = 1111111111;
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('wrong', function (done) {
    let schema = { shamsiDateTimeToMin: [] };
    let data = '12547ee852';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('correct', function (done) {
    let schema = { shamsiDateTimeToMin: [] };
    let data = '1398/02/05 12:02';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(true);
    done();
  });
});

describe('billId', function () {
  it('wrong', function (done) {
    let schema = { billId: [] };
    let data = '2';
    let result = podAjv.validate(schema, data);
    // console.log(podAjv.errors);
    expect(result).to.equal(false);
    done();
  });
  it('wrong', function (done) {
    let schema = { billId: [] };
    let data = 1111111111;
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('wrong', function (done) {
    let schema = { billId: [] };
    let data = '12547ee852';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('correct', function (done) {
    let schema = { billId: [] };
    let data = '4972808930150';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(true);
    done();
  });
});

describe.only('paymentId', function () {
  it('wrong', function (done) {
    let schema = { paymentId: [] };
    let data = '2';
    let result = podAjv.validate(schema, data);
    // console.log(podAjv.errors);
    expect(result).to.equal(false);
    done();
  });
  it('wrong', function (done) {
    let schema = { paymentId: [] };
    let data = 1111111111;
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('wrong', function (done) {
    let schema = { paymentId: [] };
    let data = '12547ee852';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(false);
    done();
  });
  it('correct', function (done) {
    let schema = { paymentId: [] };
    let data = '19586740';
    let result = podAjv.validate(schema, data);
    expect(result).to.equal(true);
    done();
  });
});
