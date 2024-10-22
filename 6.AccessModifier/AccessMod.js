/*
class User {
    name : string ;
    age : number;

    constructor(name : string , age : number) {
        this.name = name;
        this.age = age;
    }
}
const user = new User("Alice" , 30);
console.log(user.name);
console.log(user.age);

user.name = "Bob";
user.age = 21;
console.log(user.name);
console.log(user.age);
*/
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.setAge = function (age) {
        if (age > 0) {
            this.age = age;
        }
    };
    return User;
}());
var user = new User("Alice", 30);
console.log(user.getName());
console.log(user.getAge());
user.setName('Bob');
user.setAge(-40);
console.log(user.getName());
console.log(user.getAge());
