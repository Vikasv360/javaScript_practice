//Objects are collection of properties

//Declaring object
//Objects are declared in Key pair values format

let employee={

    empName :"Vikas",
    empId : 3090
}
console.log(employee)

//Retrieving the values of an object
//1. dot notation

console.log(employee.empName)
console.log(employee.empId)


//1. Array format
console.log(employee['empName'])
console.log(employee['empId'])

//We can also change the property value of an object at run time: eg:

employee.empName="Amit"
console.log(employee.empName)

//We can also add new properties into objects at run time
employee.gender="Male"

console.log(employee)

//To delete property from an object

delete employee.gender

console.log(employee)

//To check if the property exist in the given object

console.log('gender' in employee)


//To print all the property values of given Object

for(let key in employee){
    console.log(employee[key])
    
}

console.log("**********************************************************")

//We can aalso add functions into an objects

let Banks={

    bankName :"SBI",
    IFSC : "SBI0123",
    code : 123,

    transactionIdentifier : function(){
        return this.bankName + this.code + this.IFSC
    }
} 
console.log(Banks.transactionIdentifier())