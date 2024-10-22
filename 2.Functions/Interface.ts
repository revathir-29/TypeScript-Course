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

interface User {
    firstName : string ;
    lastName : string ;
    age : number ;
    middlename? : string;
}

function greetUser(user : User) {
    return `Hello ${user.firstName} ${user.lastName}`;
}

function logUserDetails (user : User) {
    console.log(`User : ${user.firstName} ${user.lastName} , Age : ${user.age}`);
}

let user1 = {firstName : "John" , lastName : "Doe" , age : 19};

console.log(greetUser(user1));
logUserDetails(user1);