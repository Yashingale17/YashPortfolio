// Q : some inportant string operations in js 

let str1 = "Hello";
let str2 = "World";

let result = str1.concat(" " + str2);
console.log(result)

let TOlo = result.toLowerCase()
console.log(TOlo)

let toUp = result.toUpperCase();
console.log(toUp)

let splitt = result.split(" ")
console.log(splitt)

let substr = result.substring(0 , 3);
console.log(substr)

let len = result.length
console.log(len)

let replaceOper = result.replace("World" , "JavaScript");
console.log(replaceOper)