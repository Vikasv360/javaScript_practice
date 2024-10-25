//String manipulation

let str="Monday "

console.log(str.length)

let subStr=str.slice(0,3)
console.log(subStr)

console.log(str[4])


let strSpil=str.split("n")
console.log(strSpil[0])
console.log(strSpil[1])
console.log(strSpil[1].length)
console.log(strSpil[1].trim().length)


//converting string to integer

let date="23"
let nextDate="30"

let diff= parseInt(nextDate)-parseInt(date)
console.log(diff)
console.log(typeof(diff))

//To convert number to string
console.log(diff.toString())

console.log(typeof(diff.toString()))

let newQuote = str+ "is a Funday" 

console.log(newQuote)

//To find index value of day in "newQuote" variable
let count=0
let value = newQuote.indexOf("day")
console.log(value)

while(value!== -1){
    count++
    value = newQuote.indexOf("day",value+1)
}

console.log(count)