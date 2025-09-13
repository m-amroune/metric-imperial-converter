const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

  test('convertHandler should correctly read a whole number input', function() {
    assert.equal(convertHandler.getNum('18km'), 18);
  });

  test('convertHandler should correctly read a decimal number input', function() {
    assert.equal(convertHandler.getNum('1.2l'), 1.2);
  });

  test('convertHandler should correctly read a fractional input', function() {
    assert.equal(convertHandler.getNum('3/2km'), 1.5);
  });

  test('convertHandler should correctly read a fractional input with a decimal', function() {
    assert.equal(convertHandler.getNum('2.8/4km'), 0.7);
  });

  test('convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3)', function() {
    assert.isUndefined(convertHandler.getNum('2/2/1kg'));
  });

  test('convertHandler should correctly default to a numerical input of 1 when no numerical input is provided', function() {
    assert.equal(convertHandler.getNum('km'), 1);
  });


  
});