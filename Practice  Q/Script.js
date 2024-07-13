var a = 7 ;
console.log(typeof a , a)

let name = "yash";
console.log(typeof name , name)

const bool = true;
console.log(typeof bool, bool)

let arr = [1,2,3,4]
console.log(typeof arr , arr);
console.log(Array.isArray(arr))

let obj = {
    name : "Yash",
    age : 21,
}
console.log(typeof obj , obj)


let myname = "Yash";
console.log(myname);
myname = "sahil"
console.log(myname)



// const redeclar = "variable"
// console.log(redeclar);
//  redeclar = "redeclared";
// console.log(redeclar)


// 

let name1 = "Yash"
const gender = "male"

let age = 22;
const boolval = false 

console.log(name1)
console.log(gender)
console.log(age)
console.log(boolval)


// let and const behavior demonstration 

let name2 = "sahil";
console.log(name2)
name2 = "Yash";
console.log(name2)

const name3 = "sahil";
console.log(name2)
name3 = "Yash"; // this will give use the typeerror that assignment to constant variable. 
console.log(name2)