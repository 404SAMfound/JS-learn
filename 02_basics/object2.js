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
