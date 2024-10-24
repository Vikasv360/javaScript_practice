var marks = Array(4)

//Decalaration of array and initializing values
var marks = new Array(20,85,78,95)

var marks = [25,56,78,95]

console.log(" Array list before modification : " + marks)

//Reinitialization
marks[2]=14

console.log(" Array list after modification : " + marks)

//Length of an array
console.log(marks.length)

//To add new element into an array, Which will be added at the end

marks.push(45)

console.log("After appending new element into an array : " + marks)

//To delete the last element from last
marks.pop()

console.log("After deleting element from last array : " + marks)

//To add element in array from beginning

marks.unshift(77)

console.log("After adding element from beginning : " + marks)

//To find the index of an element in an array
console.log("To check an index of an element in array : " + marks.indexOf(56))

//To check an element is present in an array
console.log("To check an element is present in an array : " + marks.includes(100))
console.log("To check an element is present in an array : " + marks.includes(77))




