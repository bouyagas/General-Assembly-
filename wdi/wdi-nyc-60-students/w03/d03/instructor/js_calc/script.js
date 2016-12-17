'use strict';
(() => {
  class Calculator {
    constructor() {
      this.operand1 = 0;
      this.operand2 = null;
      this.operator = null;
    }
    add() {
      return this.operand1 + this.operand2;
    }
    subtract() {
      return this.operand1 - this.operand2;
    }
    multiply() {
      return this.operand1 * this.operand2;
    }
    divide() {
      return this.operand1 / this.operand2;
    }
    clear() {
      this.operand1 = 0;
      this.operand2 = null;
      this.operator = null;
    }
  }

  const calculator = new Calculator();

  // getting numbers to display on the calculator's display
  $('.operand').on('click', function() {
    let value = $(this).text();
    if($('#display').text() === '0' && value !== '.') {
      $('#display').text(value);  
    } else {
      $('#display').text($('#display').text() + value);
    }
  });

  // getting some operator functionality out of the calculator
  $('.operator').on('click', function() {
    let operator = $(this).text();
    calculator.operator = operator;
    calculator.operand1 = parseInt($('#display').text());
    $('#display').text('0');
  });

  // clear out calculator
  $('#clear').on('click', function() {
    $('#display').text('0');
    calculator.clear();
  });

  // Doing the math!
  $('#equals').on('click', function() {
    if(calculator.operator) {
      let result;
      calculator.operand2 = parseInt($('#display').text());
      switch(calculator.operator) {
        case '/':
          result = calculator.divide();
          break;
        case '✕': // This is not an X it is a special character so copy and paste this
          result = calculator.multiply();
          break;
        case '+':
          result = calculator.add();
          break;
        case '-':
          result = calculator.subtract();
          break;
      }
      $('#display').text(result);
      calculator.operand1 = result;
      calculator.operand2 = null;
      calculator.operator = null;
    }
  });

})();