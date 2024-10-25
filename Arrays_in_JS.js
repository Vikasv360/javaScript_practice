var marks = Array(6)
var marks = new Array(20,34,567,78,54,12) //Array declaration

var marks = [20,34,567,78,54,12] //Array declaration
console.log(marks)
console.log(marks[2])
marks[3]=14 //Re-declaration
console.log(marks)

console.log(marks.length) //Length of an array
marks.push(32) //To add element at last
console.log(marks)
marks.pop() //To 

console.log(marks)
marks.unshift(12) //To add element as first element in array

console.log(marks)
console.log(marks.indexOf(567))

console.log(marks.includes(78))

console.log("*************************")

let sum=0;

for(let i=0;i<marks.length;i++){
    sum=sum+marks[i]
}

console.log(sum)

//Reduce method/function can be used when we want to reduce an array to single values.
//Eg: summing values, flattening arrays and other cumulative operations
let total = marks.reduce((sum,mark)=>{
   return sum+mark},0)
console.log(total)

console.log("*******************")

let scores=[12,7,84,94,6,1,2,9]

let evenScores=[]
let oddScores=[]

for(let i=0;i<scores.length;i++){
    if(scores[i]%2==0){
        evenScores.push(scores[i])
    }
    else{
        oddScores.push(scores[i])
    }
}
console.log("The even scores array : [" + evenScores + "]")
console.log("The odd scores array : [" + oddScores+ "]")

//We can use filter method when we want to filter out an array based on some conditions
//filter method: to create a new array from an existing array

let newfilterEvenScores= scores.filter(score=>score%2==0)
console.log(newfilterEvenScores)


//map function