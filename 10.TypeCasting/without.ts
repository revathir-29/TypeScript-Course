interface User {
    name : string ;
    age : number;
}
const jsonData = '{ "name" : "Alice" , "age" : 30}' ;

const user = JSON.parse(jsonData)

console.log(`Name ${user.name} , Age : ${user.age} , Email : ${user.email}`)