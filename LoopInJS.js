const flag =true
let i=0;

if(!flag){

    console.log("Condition is satisfied")
}
else{
    console.log(flag)
    console.log("Condition not satisfied")
}

while(i<5){
    console.log(i)
    i++

}

do{
 i++
}while(i<5)
console.log(i)
console.log("*************************")

let n =0;
for(let j=1;j<100;j++){

    if(j%2==0 || j%5==0){
        n++
        console.log("The number is multiple of 2 & 5 : " + j)

        if(n ==3)
        break
    }


   
}