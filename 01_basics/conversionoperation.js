let score = "33abd" // undefined likhenge toh bhi NaN ayega
let scores = 33
let skore = null
console.log(typeof score);
console.log(typeof scores);
console.log(typeof skore);


let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

let valueINumber = String(skore)
console.log(typeof valueINumber);
console.log(valueINumber);
 
let valueinNumber = Number(skore)
console.log(typeof valueinNumber);
console.log(valueinNumber);

// true => 1; false => 0, boolean me convert ho jayega, valueinnumber nikalenge uska toh
// "" => false ; "anything" => true  (ye ho gya valueinboolean)


/******************************OPERATION**********************************/

    let v = 3
    let negv = -v
    console.log(negv)

     console.log(2+2)
      console.log(3-2)
       console.log(4*2)
        console.log(5**3) // 5 pwr 3
         console.log(7/2)
          console.log(8%9)

    let str1 = "hello"
    let str2 = " samridhi"
    let str3 = str1 + str2
    console.log(str3)

    console.log("1" + 2) // string + number
    console.log(1 + "2") // mumber + string
    console.log("1" + 2 + 2)
    console.log(1 + 2 + "2")
    console.log(true)
    console.log(+true) // we use plus to convert any datatype to a number but dont use this technique its not readable