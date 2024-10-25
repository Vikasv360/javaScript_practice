var marks = [20,34,567,78,54,12]

//Reduce method/function can be used when we want to reduce an array to single values.
//Eg: summing values, flattening arrays and other cumulative operations
let total = marks.reduce((sum,mark)=>{
    return sum+mark},0)
 console.log(total)
 