/*
function greetUser(user : {firstName : string , lastName : string  }) {
    return `Hello ${user.firstName} ${user.lastName}`;
}

function logUserDetails (user : {firstName : string , lastName : string , age : number }) {
    console.log(`User : ${user.firstName} ${user.lastName} , Age : ${user.age}`);
}

let user1 = {firstName : "John" , lastName : "Doe" , age : 19};

console.log(greetUser(user1));
logUserDetails(user1);
*/
function greetUser(user) {
    return "Hello ".concat(user.firstName, " ").concat(user.lastName);
}
function logUserDetails(user) {
    console.log("User : ".concat(user.firstName, " ").concat(user.lastName, " , Age : ").concat(user.age));
}
var user1 = { firstName: "John", lastName: "Doe", age: 19 };
console.log(greetUser(user1));
logUserDetails(user1);
