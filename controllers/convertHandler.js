function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = input.match(/[.\d\/]+/g) || ["1"];
    let nums = result[0];
    
    // Handle fractions
    if (nums.includes('/')) {
      let values = nums.split('/');
      if (values.length != 2) {
        return undefined;
      }
      result = parseFloat(values[0]) / parseFloat(values[1]);
    } else {
      result = parseFloat(nums);
    }
    
    if (isNaN(result)) {
      return undefined;
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    let result = input.match(/[a-zA-Z]+$/g);
    
    if (result) {
      result = result[0].toLowerCase();
      
      switch(result) {
        case 'gal':
        case 'lbs':
        case 'kg':
        case 'mi':
        case 'km':
          return result;
        case 'l':
          return 'L'; // Normalize liters to uppercase
        default:
          return undefined;
      }
    }
    
    return undefined;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    switch(initUnit) {
      case 'gal':
        result = 'L';
        break;
      case 'L':
      case 'l':
        result = 'gal';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'km':
        result = 'mi';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'kg':
        result = 'lbs';
        break;
      default:
        result = undefined;
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    switch(unit) {
      case 'gal':
        result = 'gallons';
        break;
      case 'L':
      case 'l':
        result = 'liters';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'km':
        result = 'kilometers';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'kg':
        result = 'kilograms';
        break;
      default:
        result = 'unknown unit';
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    if (initNum === undefined || initUnit === undefined) {
      return undefined;
    }
    
    switch(initUnit) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'L':
      case 'l':
        result = initNum / galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      default:
        result = undefined;
    }
    
    return Math.round(result * 100000) / 100000;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum + ' ' + this.spellOutUnit(returnUnit);
    
    return result;
  };
  
}

module.exports = ConvertHandler;
