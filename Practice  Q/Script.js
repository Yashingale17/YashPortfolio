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
let a = 6;
if (a > 0 || a === 0) {
    console.log("Positive");
} else {
    console.log("Negative");
}


// if a person is eligible to vote ;

let persongAge = 17;
if (persongAge >= 18) {
    console.log("person is elagible to vote");
} else {
    console.log("person is underAge to vote");
}

const num = 6
switch (num) {
    case 1:
        console.log('Jan')
        break;
    case 2:
        console.log("fab");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("Jun");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("seo");
        break;
    case 10:
        console.log("Oct");
        break;
    case 11:
        console.log("Nov");
        break;
    case 12:
        console.log("Dec");
        break;
    default:
        break;
}


let score = 98;
switch (true) {   // here the key is a boolean value because booleam value compaers the below case statemanet if it's true then it executes the true case other wise it moves to other cases 
    // why we cannot use score in key here becaue score cannot compareed directly to case's score as it is a condition os to compare the condition we need boolean value
    case score >= 80:
        console.log('A Grade')
        break;
    case score >= 75 && score <= 79:
        console.log("B Grade");
        break;
    case score >= 50 && score <= 74:
        console.log("B Grade");
        break;
    case score >= 35 && score <= 49:
        console.log("D Grade");
        break;
    case score < 35:
        console.log("Fail");
        break;
    default:
        break;
}

let evenORdd = 5;
console.log(evenORdd % 2 === 0 ? 'even Num' : ' odd Num')


let year = 2029;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Leap Year")
} else {
    console.log("Not a leap Year");
}

let year2 = 2029;

if (year2 % 4 === 0 || (year2 % 100 !== 0 && year2 % 400 === 0)) {
    console.log("Leap Year");
} else {
    console.log("Not a leap Year");
}


let checkNum = -1;
if (checkNum > 0) {
    console.log("Positive");
} else if (checkNum < 0) {
    console.log("Negative");
} else {
    console.log('Its ZERO');
}

let Mark = 56;

switch (true) {
    case (Mark > 80):
        console.log("A");
        break;

    case (Mark >= 75 && Mark <= 79):
        console.log("B");
        break;
    case (Mark >= 60 && Mark <= 74):
        console.log("C");
        break;
    case (Mark >= 40 && Mark <= 59):
        console.log("D");
        break;
    case (Mark >= 35 && Mark <= 39):
        console.log("E");
        break;
    default:
        console.log("Fail!!!")
        break;
}



let leapyear = 2040;

if ((leapyear % 4 === 0 && leapyear % 100 !== 0) || leapyear %400 === 0) {
    console.log("Year is a Leap");
}else {
    console.log("Year is Not a leap Year");
}