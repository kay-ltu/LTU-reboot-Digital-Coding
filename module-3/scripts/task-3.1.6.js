var preTipTotal;

var preTipTotal = 50;

var tipPercentage;

var tipPercentage = 20;

var newTotal = 'Your total bill, with tip, is £' + (((preTipTotal / 100) * tipPercentage) + preTipTotal);

alert(newTotal);

console.log(newTotal);

document.write(newTotal);