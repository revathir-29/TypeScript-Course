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
 class User {
    firstName : string;
    lastName : string;
    age : number;

    constructor(firstName : string , lastName : string , age : number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    greet() {
        return `Hello, ${this.firstName} ${this.lastName}`
    }
    getAge() {
        return this.age;
    }
 }

 //Creating instances
 let user1 = new User("John" , "Doe" , 25);
 let user2 = new User("Jame" , "Smith" , 23);

 console.log(user1.greet());
 console.log(user1.getAge());
 console.log(user2.greet());
 console.log(user2.getAge());
