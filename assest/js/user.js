export default class User{

    constructor (Name , age){
        this.Name = Name;
        this.age = age;
    }
}
 export function PrintName(Name){
console.log(`your name ${Name}`)
}

export function PrintAge(age){
console.log(`your age is ${age}`)
}
