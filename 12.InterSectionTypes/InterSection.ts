interface Employee {
    name : string;
    id : number;
}
interface Admin {
    isAdmin : boolean;
    accessLevel : number
}

type AdminEmployee = Employee & Admin;

let adminEmployee : AdminEmployee = {
    id : 123,
    name : "Alice" , 
    isAdmin : true,
    accessLevel : 2
}
let emp = {
    id : 1234 ,
    name : "Bob"
}
console.log("Employee Details...")
console.log(emp.id);
console.log(emp.name);
console.log("Admin Details...")
console.log(adminEmployee.id);
console.log(adminEmployee.name);
console.log(adminEmployee.isAdmin);
console.log(adminEmployee.accessLevel);

