const name = "samridhi"
const repocount = 10
console.log(name + repocount + "value") // outdated shit

//modern shit
console.log(`hello my name is ${name} nd my repo count is ${repocount}`)

const appname = new String(`samsung clone-note`)
console.log(appname[8])  // 0th key(index) access krre h

console.log(appname.length)

console.log(appname.toUpperCase()) // ts will turn everthing to uppercase
console.log(appname.charAt(12)) // ts will tell kon se position pe kon sa character h
console.log(appname.indexOf(`e`)) //ts will tell kon sa character kon se position pe h

const newstring = appname.substring(0,6)
console.log(newstring) // 0 = 's' 6 = 'g' but last wali value include ni ho ri h kyuki nhi hoti h

const otherstring = appname.slice(-18, 6)
console.log(otherstring)

const newstringtwo = "   sam    "
console.log(newstringtwo)
console.log(newstringtwo.trim()) // isse saare unnecessary spaces trim ho jayenge