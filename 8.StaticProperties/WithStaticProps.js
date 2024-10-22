var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        User.totalUsers++;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.getTotalUsers = function () {
        return User.totalUsers;
    };
    User.totalUsers = 0;
    return User;
}());
console.log(User.totalUsers, "Users at start");
var user1 = new User("Alice");
var user2 = new User("Bob");
var user3 = new User("Cyan");
console.log(user1.getName());
console.log(user2.getName());
console.log(user3.getName());
console.log(User.totalUsers, "Users at end");
