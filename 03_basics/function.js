function saymyname(){
console.log("S");
console.log("A");
console.log("M");
console.log("R");
console.log("I");
console.log("D");
console.log("H");
console.log("I");
}

saymyname();

function addtwonumbers(num1, num2){ // function with parameters
    console.log(num1 + num2); // returning the sum of two numbers
}
addtwonumbers(5, 7); // function call with arguments, this is arguments are passed to parameters

//const result = addtwonumbers(10, 15); // function call with arguments
//console.log(result); // undefined, since the function does not return anything 

// to avoid this, we use return statement

function addtwonumberswithreturn(num1, num2){
    let result = num1 + num2;
    return result;
 
    //  console.log(); // this line will never be executed because it is after the return statement

}
 const result = addtwonumberswithreturn(20, 30);
 console.log(result); // output: 50

 function userloginmessage(username) {
    return `${username} just logged in`;  
 }
    console.loguserloginmessage("huuhuihiu this is samridhi");
 