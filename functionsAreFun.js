//Block of code to perform some action is called functions/method
//var keyword - var keyword scope is at the global level or function level
//let keyword - global level and block level
 
//At global level - var keyword
 var tone="loud"
 if(1==1){
 var tone="soft"
 }

 console.log(tone)

 //At function level - var keyword

var greet="Good afternoon"

function add(a,b){

    var greet="Good morning" //This will not be printed, as its scope is inside the function
    return a+b;
}
console.log(greet)

let sum = add(4,5)

console.log(sum)


//Anyonymous function --> 

//1st way
let intSum = function(c,d){
return c+d
}

console.log(intSum(2,4))

//2nd way

let intNum= (e,f)=>e+f

console.log(intNum(34,546))
