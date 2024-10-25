//Inheritance is Object oriented programming js
//Here one class can inherit the properties, method/function of other class
//The class which inherits the property of other class is called as subclass/derived/child class
//the class whose properties are inherited is known as superclass

const Pets = require("./Pet")
class Dogs extends Pets{

    //step 1:
 //create a constructor
constructor(firstName,lastName){
    //call parent class constructor
    super(firstName,lastName)
}

}

let dog=new Dogs("Rocky","Pinku")
dog.fullName()
console.log(dog.petLocation)