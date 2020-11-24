/* Original Answer:

var preTipTotal;

var preTipTotal = 50.23;

var tipPercentage;

var tipPercentage = 20;

var newTotal = 'Your total bill, with tip, is £' + (((preTipTotal / 100) * tipPercentage) + preTipTotal);

alert(newTotal);

console.log(newTotal);

document.write(newTotal);

*/

/* Bonus Points Answer*/

var preTipTotal;

var preTipTotal = 50.23;

var tipPercentage;

var tipPercentage = 20;

var tipAmount = (preTipTotal / 100) * tipPercentage;

var newTotal = (preTipTotal + tipAmount).toFixed(2);

var sentence = 'Your total bill, with tip, is £' + newTotal + '. Thank you for your £' + tipAmount.toFixed(2) + ' tip, it shall be shared equally among staff.';

alert(sentence);

console.log(sentence);

document.write(sentence);