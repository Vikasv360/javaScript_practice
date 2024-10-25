//Class is similar to obejcts which holds the properties

class Customer {

    //Defining the properties in class
    customerName = "Canara"
    customerLastName = "Bank"
    customerPhoneNum = "789963413"

    //Properties can be defined using get method

    get customerLocation() {

        return "Bangalore"
    }
   

    //construct is a method which executes by default when an object is created for that class

    //The declared variables in the constructor is called as Instance variables
    constructor(firstName,LastName){

        //To access these variable outside the constructor, we use below code
        //this keyword is used to have the scope of these variables across the whole class
        this.firstName =firstName
        this.LastName=LastName
    }

    //Methods in class
    fullName(){
        console.log(this.firstName + this.LastName)
    }
 

}

//To retrive the property values from class we have to create an object of the class

let cust = new Customer("Vikas","V");
console.log(cust.customerName + " : "
    + cust.customerLastName + " : "
    + cust.customerPhoneNum + " : "
    + cust.customerLocation)

    console.log("**********************************")
    console.log(cust.fullName())
