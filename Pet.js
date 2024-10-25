
module.exports=class Pets{

    petName = "Dog"
    petCategory ="Friendly"

    get petLocation(){

        return "Bangalore"
    } 

    constructor(firstName,lastName){

        this.firstName=firstName
        this.lastName=lastName

    }
  
     //Methods in class
     fullName(){
        console.log(this.firstName + " " + this.lastName)
    }

}

