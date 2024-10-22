/*
class User {
    name : string ;
    age : number;

    constructor(name : string , age : number) {
        this.name = name ;
        this.age = age;
    }

    isAdult() {
        return this.age >= 18;
    }
}
const user = new User("Alice" , 30);
console.log(user.isAdult());
*/
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.isAdult = function (age) {
        return age >= 18;
    };
    return User;
}());
console.log(User.isAdult(30), '30');
console.log(User.isAdult(10), '10');
