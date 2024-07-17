// var a = 7 ;
// console.log(typeof a , a)

// let name = "yash";
// console.log(typeof name , name)

// const bool = true;
// console.log(typeof bool, bool)

// let arr = [1,2,3,4]
// console.log(typeof arr , arr);
// console.log(Array.isArray(arr))

// let obj = {
//     name : "Yash",
//     age : 21,
// }
// console.log(typeof obj , obj)


// let myname = "Yash";
// console.log(myname);
// myname = "sahil"
// console.log(myname)



// // const redeclar = "variable"
// // console.log(redeclar);
// //  redeclar = "redeclared";
// // console.log(redeclar)


// // 

// let name1 = "Yash"
// const gender = "male"

// let age = 22;
// const boolval = false 

// console.log(name1)
// console.log(gender)
// console.log(age)
// console.log(boolval)


// // let and const behavior demonstration 

// let name2 = "sahil";
// console.log(name2)
// name2 = "Yash";
// console.log(name2)

// const name3 = "sahil";
// console.log(name2)
// name3 = "Yash"; // this will give use the typeerror that assignment to constant variable. 
// console.log(name2)


// Day 2 
// Operaters 

// arrithmetic Operaters

// console.log(5 + 5 );
// console.log(10 - 5);
// console.log(5 * 5);
// console.log(25/5);
// console.log(26%5);// to find reminder 
// console.log(25%5);//reminder 

// // Assignemt Operaters
// // using += and -= operater to add and subtracting number in the variales
// let a =5;
// console.log(a += 5);

// let b = 10;
// console.log(b -= 5);

// // compraion operaters 
// // using < & >
// let c = 6;
// let v = 7;
// console.log(c < v);
// console.log(c > v);

// // using<= and >=

// let z = 10 ;
// let q = 20 ;
// let h = 20;
// console.log(z >= q);
// console.log(h >= q);
// console.log(z <=q);

// // using == and === 

// let namee = "6";
// let nameee = 6;
// console.log(namee == nameee)

// let namee1 = "6";
// let nameee1 = 6;
// console.log(namee1 === nameee1)

// let namee2 = 6;
// let nameee2 = 6;
// console.log(namee2 === nameee2)


// // Logical operaters 

// // using && 

// let name17 = true ;
// let namee17 = true ;

// if (name17 && namee17 === true) {
//     console.log("both true");
// }

// // using || 

// let age = 5;
// isstudent = false;

// if (age <= 18 || isstudent) {
//     console.log("yess")
// }else {
//     console.log("No");
// }

// // using !

// let fullname = "Yash Ingale" ;
// if (fullname != "Yash Ingale") {
//     console.log("Enter FullName")
// }else {
//     console.log(`full name is ${fullname}`);
// }

// let fullname1 = "Yash" ;
// if (fullname1 != "Yash Ingale") {
//     console.log("Enter FullName")
// }else {
//     console.log(`full name is ${fullname1}`);
// }

// // using ternory operater 

// let num = 5 ;
// console.log(num >0 ? "Positive" : "negative");


// Day 3 .

// controle strecture or flow controle or statements

// check if number is positive or negative 
// let a = 6;
// if (a > 0 || a === 0) {
//     console.log("Positive");
// } else {
//     console.log("Negative");
// }


// if a person is eligible to vote ;

// let persongAge = 17;
// if (persongAge >= 18) {
//     console.log("person is elagible to vote");
// } else {
//     console.log("person is underAge to vote");
// }

// const num = 6
// switch (num) {
//     case 1:
//         console.log('Jan')
//         break;
//     case 2:
//         console.log("fab");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("Jun");
//         break;
//     case 7:
//         console.log("July");
//         break;
//     case 8:
//         console.log("August");
//         break;
//     case 9:
//         console.log("seo");
//         break;
//     case 10:
//         console.log("Oct");
//         break;
//     case 11:
//         console.log("Nov");
//         break;
//     case 12:
//         console.log("Dec");
//         break;
//     default:
//         break;
// }


// let score = 98;
// switch (true) {   // here the key is a boolean value because booleam value compaers the below case statemanet if it's true then it executes the true case other wise it moves to other cases 
//     // why we cannot use score in key here becaue score cannot compareed directly to case's score as it is a condition os to compare the condition we need boolean value
//     case score >= 80:
//         console.log('A Grade')
//         break;
//     case score >= 75 && score <= 79:
//         console.log("B Grade");
//         break;
//     case score >= 50 && score <= 74:
//         console.log("B Grade");
//         break;
//     case score >= 35 && score <= 49:
//         console.log("D Grade");
//         break;
//     case score < 35:
//         console.log("Fail");
//         break;
//     default:
//         break;
// }

// let evenORdd = 5;
// console.log(evenORdd % 2 === 0 ? 'even Num' : ' odd Num')


// let year = 2029;

// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     console.log("Leap Year")
// } else {
//     console.log("Not a leap Year");
// }

// let year2 = 2029;

// if (year2 % 4 === 0 || (year2 % 100 !== 0 && year2 % 400 === 0)) {
//     console.log("Leap Year");
// } else {
//     console.log("Not a leap Year");
// }


// let checkNum = -1;
// if (checkNum > 0) {
//     console.log("Positive");
// } else if (checkNum < 0) {
//     console.log("Negative");
// } else {
//     console.log('Its ZERO');
// }

// let Mark = 56;

// switch (true) {
//     case (Mark > 80):
//         console.log("A");
//         break;

//     case (Mark >= 75 && Mark <= 79):
//         console.log("B");
//         break;
//     case (Mark >= 60 && Mark <= 74):
//         console.log("C");
//         break;
//     case (Mark >= 40 && Mark <= 59):
//         console.log("D");
//         break;
//     case (Mark >= 35 && Mark <= 39):
//         console.log("E");
//         break;
//     default:
//         console.log("Fail!!!")
//         break;
// }



// let leapyear = 2040;

// if ((leapyear % 4 === 0 && leapyear % 100 !== 0) || leapyear %400 === 0) {
//     console.log("Year is a Leap");
// }else {
//     console.log("Year is Not a leap Year");
// }


// day 4 

// Loops 

// i = 1;
// for (let i = 1; i <=10; i++) {
//     console.log(i);  
// }

// for (let i = 1 ; i <= 10 ; i++) {
//     const result = 5 * i;
//     console.log(`5 x ${i} = ${result}`);
// }

// num = 1;
// sum = 0 ;
// while (num <=10) {
//     sum += num;
//     num++;
// }
// console.log(sum);


// num = 10 ;

// while (num >= 0) {
//     console.log(num)
//     num--
// }


// no = 1 ;
// do {
//     console.log(no)
//     no++
// }while (no <= 5);

// num = 5;
// fact = 1;
// i = 1;

// do {
//     fact = fact * i ;
//     i++;
// }while (i <= num);
// console.log(fact)



// let line = 5 ;
// for (i = 1; i <=line ; i++) {
//     let stars = '';
    
//     for (j = 1; j<=i ; j++) {
//         stars += '* '
//     }
//     console.log(stars)
// }



// let linesss = 7;
// for (let i = 1; i <=linesss; i++) {
//     let star = ''; 
//     for (let j = 1; j <=i; j++){
//         star = star + "* "
//     }
//     console.log(star)
// }



// for (i= 1; i<=10 ; i++) {
//     if(i === 5) {
//         continue
//     }
//     console.log(i)
// }

// for (let i = 1; i<=10;i++){
//     console.log(i)
//     if(i===7) {
//         break
//     }
// }

// let num = 1;
// for (num = 1 ; num<=10 ; num++){
//     console.log(num)
// }

// let a = 1
// while (a <=10) {
//     console.log(a)
//     a++
// }


// for(let multi = 1; multi<=10 ; multi++) {
//     let result = multi * 5;
//     console.log(`5 x ${multi} = ${result}`)
// }

// for (s = 1 ; s <=10; s++) {
//     let result = 17 * s;
//     console.log(`7 x ${s} = ${result}`)
// }

// summ = 0
// let i = 1
// while (i <=10) {
//     summ += i;
//     i++
// }
// console.log(summ)


// let numOf = 10;
//  factroal = 1;
//  noo = 1

// do {
//     factroal = factroal * noo;
//     noo++
// } while (noo <= numOf);
// console.log(factroal);


// Day 5 

// Functions..

// function evenOdd () {

//     if (num % 2 === 0 ) {
//         console.log("Even")
//     }else{
//         console.log("Odd")
//     } 
// }
// evenOdd(num=5);


// function squareFun () {
//     let Numm = 5
//     let output = Numm * Numm
//     console.log(output)
// }
// squareFun()


// let maxNum = function (num1 , num2) {
//     if (num1 > num2) {
//         console.log(num1)
//     }else {
//         console.log(num2)
//     }
// }
// num1 = 15;
// num2 = 14;
// maxNum(num1 , num2)

// const maxNum2 = function (a,b) {
//    return (a > b) ? a : b;
// }
// let b = 30;
// let a = 40;
// console.log(maxNum2(a,b))


// let concatfun = function (str1, str2) {
//     return str1.concat(" " + str2)
// }
// str1 = "Hello";
// str2 = "World";
// console.log(concatfun(str1, str2))

// const ArroFUn = (add1 , add2) => {
//     return add1 + add2
// };
// add1 = 5;
// add2 = 7;
// console.log(ArroFUn(add1 ,add2))


// const findStr = (strFind) => {
//     if (strFind.includes("sa")) {
//         return true;
//     } else {
//         return false;
//     }
// }
// strFind = "sahil";
// console.log(findStr(strFind))


let  product = (a ,b = 5) => {
    return a * b;
}

a = 5;
console.log(product(a));


const greet = (Name, age = 21) => {
    return `hello how are you ${Name}`
}
Name = "Yash";
console.log(greet(Name))



let  howNo = (func , n) =>  {
    for(let i = 0; i <n ; i++) {
        func();
    }
}

function gree () {
    console.log("Hello!!!");
}
howNo(gree , 3)



// Define the first function: doubles the value
function double(x) {
    return x * 2;
}

// Define the second function: squares the value
function square(x) {
    return x * x;
}

let highor = (fun1 , fun2 , Val) => {
    let result = fun1(Val)
    let result2 = fun2(result)
    return result2
}
console.log(highor(double , square , 5))


function evenOdd (num)  {
    if (num % 2 === 0) {
        console.log("Even")
    }else {
        console.log("Odd")
    }
}
evenOdd(7)


let sq = (square) => {
    return square * square;
}
console.log(sq(5))


function concatstr(str1 , str2) {
    return str1.concat(" " + str2);
}
console.log(concatstr("Ingale" , "Yash"))


let sumfun1 = (no , no1) => {
    return no + no1
}
console.log(sumfun1(5,6))

let sumfun = (numm1 , numm2) => numm1 + numm2;
console.log(sumfun(5 ,5))


let high = function (fun , n ) {
    for (i=0; i <n; i++) {
        fun()
    }
}

function timesss () {
    console.log("Yash!!")
}

high(timesss , 5)