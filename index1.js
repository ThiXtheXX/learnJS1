// let name='Mosh';
// let age=30;
// let isApproved=false;
// let firstName=undefined;
// let selectedColor=null;

let person = {
    name:'Mosh',
    age:30
};

//Braket Notation
person['name']='Mary';//name=Mary
//dot Notation
person.name='John';//name=John
console.log(person.name) 


//function/ performing a task
function greet(name) {
    console.log('Hello' + name)
}

greet(' Jonh');

let employee={
    baseSalary:30_000,
    overtime:10,
    rate:30,
}
console.log(employee);