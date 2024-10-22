//Without class 
/*
 let user1 = {firstName : "John" , lastName : "Doe" , age : 24};
 let user2 = {firstName : "Jame" , lastName : "Smith" , age : 23};

 function greetUser(user : {firstName : string , lastName : string}) {
        return `Hello ${user.firstName} ${user.lastName} `;
 }

 function getUserAge (user : {age : number}) {
    return user.age;
 }

 console.log(greetUser(user1));
 console.log(getUserAge(user1));

 console.log(greetUser(user2));
 console.log(getUserAge(user2));
 */
//With class 
var User = /** @class */ (function () {
    function User(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    User.prototype.greet = function () {
        return "Hello, ".concat(this.firstName, " ").concat(this.lastName);
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    return User;
}());
//Creating instances
var user1 = new User("John", "Doe", 25);
var user2 = new User("Jame", "Smith", 23);
console.log(user1.greet());
console.log(user1.getAge());
console.log(user2.greet());
console.log(user2.getAge());
