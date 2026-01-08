// singleton
// Object.create
// 
// object literals
const mysym = Symbol ("key1")
const jsuser = {
    name: "samridhi",
    [mysym]: "mykey1",  // symbol ko krne ke liye bracket use krte hai
    age: 20,
    location: "bbsr",
    email: "2405680@kiit.ac.in",
    isloggedin: true,
    lastlogindays: ["monday", "thursday"]
}

console.log(jsuser["email"])
console.log(jsuser.email)
// console.log(jsuser.mysym) wrong way to access symbol property
console.log(typeof jsuser.mysym) 
console.log(jsuser[mysym]) // correct way to access symbol property
console.log(typeof jsuser[mysym])

jsuser.email = "ssmerp6430@gmail.com"
// Object.freeze(jsuser) // freeze krne ke baad object ke properties change nhi kr skte
jsuser.email = "kiit5680@gmail.com" // will not work
console.log(jsuser.email);
console.log(jsuser)

jsuser.greeting = function () {
    console.log("hello js user")
}

jsuser.greeting2 = function(){
    console.log(`hii js user, ${this.name}`)
}
 console.log(jsuser.greeting())
 console.log(jsuser.greeting)
console.log(jsuser.greeting2())
console.log(jsuser.greeting2)

 