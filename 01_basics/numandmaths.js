const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(3));

const otherbalance = 45.677989
console.log(otherbalance.toPrecision(3));

const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-IN'));

//MATHS

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.8));
console.log(Math.floor(7.4));
console.log(Math.min(6, 7, 4, 3));

console.log(Math.random());  // always provide number between 0 to 1
console.log(Math.random()*10+1);
const min = 20
const max = 40

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
