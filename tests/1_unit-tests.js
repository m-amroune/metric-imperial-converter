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

  test('convertHandler should correctly read each valid input unit', function() {
    const inputsUnit = ['gal', 'l', 'mi', 'km', 'lbs', 'kg', 'GAL', 'L', 'MI', 'KM', 'LBS', 'KG'];
    const expectedInputsUnit = ['gal', 'L', 'mi', 'km', 'lbs', 'kg', 'gal', 'L', 'mi', 'km', 'lbs', 'kg'];
    inputsUnit.forEach((unit, index) => {
      assert.equal(convertHandler.getUnit(unit), expectedInputsUnit[index]);
    });
  });

  test('convertHandler should correctly return an error for an invalid input unit', function() {
    assert.isUndefined(convertHandler.getUnit('5g'));
  });

  
});