const spotifyuser = new Object() // object constructor
const spotifyuser1 = {} // object literal

spotifyuser.id = "ssmerp6430"
spotifyuser.name = "Samridhi"


console.log(spotifyuser) // empty object created using object constructor

const regularuser = {
    email: "ssam@gmail.com",
    fullname: {
        Userfullname: {
            firstname: "samridhi",
            lastname: "kumari"

        
        }
    }
}
console.log(regularuser.fullname.Userfullname.lastname);

const obj1 = {1: "a", 2: "b"} //
const obj2 = {3: "c", 4: "d"} //

const obj3 = {obj1, obj2}
console.log(obj3); // does not merge obj1 and obj2

const obj4 = {...obj1, ...obj2} // to merge two obj or array, use spread operator to merge objects
console.log(obj4); // merged object

const obj5 = Object.assign({}, obj1, obj2) // another way to merge two objects. it is advised to use bracket notation to create a new empty object
console.log(obj5); // merged object

const users = [
    {
        id: 1,
        email: "sam@gmail.com"
    }
]
console.log(spotifyuser);
console.log(Object.keys(spotifyuser)); // to get all keys of an object
console.log(Object.values(spotifyuser)); // to get all values of an object
console.log(Object.entries(spotifyuser)); // to get key value pairs in the form of array of arrays

//----------------------------------------------------------------------------------------------------------

//object destructuring

const course = {
    coursename: "js basics",
    price: "999",
    courseInstructor: "samridhi"

}

//course.courseInstructor // its the normal way to access the property of an object

const {courseInstructor: inst} = course // object destructuring syntax, we can also rename the variable while destructuring
const {price} = course
console.log(courseInstructor); //output: samridhi
console.log(inst); //output: samridhi
console.log(price);


// apna kaam kisi or ke sar pr dalna h toh usko API kehte h
// API ek aisa interface h jiske through do applications apas me baat kr skte h
// jaise ki humne kisi website pr login krne k liye google ya facebook ka use kiya h toh wo ek API h
// API ek tarah se middleware ka kaam krta h jo do applications ke beech data exchange krta h
// REST API ek aisa API h jo HTTP requests ka use krta h data ko access krne k liye
// REST API me CRUD operations hote h jo ki Create, Read, Update, Delete ke liye use hote h
// REST API me endpoints hote h jo ki URLs hote h jinke through hum data ko access krte h
// REST API me statelessness hota h jiska matlab hai ki har request independent hoti h aur server ko previous request ka koi pata nahi hota
// REST API me resources hote h jo ki data entities hote h jinhe hum access krte h
// REST API me JSON format ka use hota h data exchange krne ke liye kyunki ye lightweight aur easy to parse hota h



// JSON (JavaScript Object Notation) ek lightweight data interchange format hai jo human-readable text me data ko represent karta hai
// JSON me data key-value pairs ke form me hota hai jisme keys strings hoti hain aur values strings, numbers, arrays, objects, booleans ya null ho sakti hain
// JSON ka use web applications me data exchange ke liye hota hai, jaise ki client-server communication me
// JSON ko JavaScript me easily parse aur generate kiya ja sakta hai, lekin ye language-independent format hai aur kai programming languages me use kiya ja sakta hai
// JSON ka syntax JavaScript object syntax se milta julta hai, lekin kuch differences hote hain, jaise ki keys hamesha double quotes me honi chahiye
// JSON data ko store karne ke liye files me .json extension ka use kiya jata hai

// {
//     "name": "samridhi",
//     "coursename": "js basics",
//     "price": "FREE"
// }

[
    {}, // randomuser me API se API generated data aata h
    {}, // its format is weird and dont understand it, to understand we can use json formatter.
    {}, //
]