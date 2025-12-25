const myarr = [7, 8, 6, 5, 2];
const myheroes = ["father", "mother", "arslaan", "nana", "nani"];

console.log(myheroes[3]);
console.log(myarr[2]);

//array methods

myarr.push(7)   // inserting element
myarr.push(6)
myarr.pop()

myarr.unshift(9)
myarr.shift()
console.log(myarr);

console.log(myarr.includes(9))    // provides answwer in true or false
console.log(myarr.indexOf(9))     // -1 means ths not included in any address of the array

//slice, splice

console.log("A", myarr);
const mynewarr1 = myarr.slice(2, 4);
console.log(mynewarr1)


console.log("B", myarr);
const mynewarr2 = myarr.splice(2,4);
console.log(mynewarr2)

console.log("C", myarr)