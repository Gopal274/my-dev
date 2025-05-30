let a = 20;
let b = 20;

if (a > b) {
    console.log("a is greater than b");
} else if (a < b) {
    console.log("a is less then b");
} else {
    console.log("a is equal to b");
}

let time = 5;
let greetings;

if (time < 10) {
    greetings = "Good Morning";
    console.log(greetings);
} else if (time < 20) {
    greetings = "Good Day";
    console.log(greetings);
} else {
    greetings = " Good Evening";
    console.log(greetings);
}

//1. create a variable name (password ) & store nothing
//2. if password is equal to 8 print " welcome "
//3. if  password is less than or equal to 8 print "password is too short "
//4. if password is greater than or equal to 8 print " Too long Password " & " Password should be 8 charaters"
//5. if all fails print " please provide a password"

let password = 8;

if (password === 8) {
    console.log("welcome");
} else if (password <= 8) {
    console.log("password is too short");
} else if (password >= 8) {
    console.log("Too long password");
} else {
    console.log("please provide a password");
}

// Switch Statements -->

let X = 0;
let bulb;

switch (X) {
    case 0:
        bulb = "off";
        console.log(bulb);
        break;
    case 1:
        bulb = "On";
        console.log(bulb);
        break;
    default:
        bulb = " no value found";
        console.log(bulb);
}

let day;

switch (day) {
    case "monday":
        console.log("Today is monday");
        break;
    case "tuesday":
        console.log("Today is tuesday");
        break;
    case "wednesday":
        console.log("Today is wednesday");
        break;
    case "thirsday":
        console.log("Today is thirsday");
        break;
    case "friday":
        console.log("Today is friday");
        break;
    case "satuarday":
        console.log("Today is satuarday");
        break;
    case "sunday":
        console.log("Today is sunday");
        break;
    default:
        console.log("don't know what day today is");
}

//1. Create variable name (fruit) & store "banana".
//2. if case is "banana" print "Banana is good!"
//3. if case is "orange" print "i am not a fan of of orange."
//4. if case is "Apple " print "Hoe you likr them apples?"
//5. default "I have never heard of that fruit"

let fruit = "banana";

switch (fruit) {
    case "banana":
        console.log("Banana is good!");
        break;
    case "orange":
        console.log("I am not a fan of orange.");
        break;
    case "apple":
        console.log("Hope you like them apples?");
        break;
    default:
        console.log("I have never heard of that fruit");
}

// for loop -->
//
// for (let i = 1; i <= 2; i++) {
//     console.log("---outer loop---", i);
//     // nested loop
//     for (let j = 1; j <= 2; j++) {
//         console.log("---inner loop ---", j);
//     }
// }

// print your name & numbet from 0 through 1000
// for (let k = 0; k<=1000 ; k++){
//   console.log("hacker-arena",k)
// }

// while loop -->
// let i = 1;
//
// while (i <= 5) {
//     console.log("hi world ", i);
//     i++;
// }

// Print "your name" 100 times to the console using while loop
// Iteratoin will start from 10

// let j = 10;
//
// while (j <= 100) {
//     console.log("hacker-arena", j);
//     j++;
// }

// Do while loop -->

// let k = 1;
//
// do {
//     console.log("hi world", k);
//     k++;
// } while (k <= 5);

//print "your Name " 400 times to the console using do-while-loop.
//Iteration should start from 20.

// let m = 20;
//
// do {
//     console.log("hacker-arena", m);
//     m++;
// } while (m <= 400);

// 1. --> logical AND (&&)
const x = true;
const y = false;
const z = 4;

console.log(x && y);
console.log(z > 2 && z < 2);

// 2. --> logical OR (||)
console.log(x || y);
console.log(y || y);
console.log(z > 2 || z < 2);
// 3. --> logical NOT (!)
console.log(!x);

let passwords = "hacker-arena";
if (passwords.length >= 8 && passwords.includes("arena")) {
    console.log("valid password");
} else {
    console.log("Invalid Password");
}

if (passwords.length >= 8 || passwords.includes("arena")) {
    console.log("valid password");
} else {
    console.log("Invalid Password");
}

let isTrue = true;
console.log(!isTrue);

// Arrays --> 0 index based

// empty array

let myList = [];
console.log(myList);

const numbersArray = [1, 2, 3, 4, 5];
console.log(numbersArray);

const stringArr = ["eat", " sleep", "code", " repeat"];
console.log(stringArr);

console.log(stringArr[0]);

// nested Array/ Two Dimension
const nestArr = ["one", ["two", "three"], 1, true, false];
console.log(nestArr);
console.log(nestArr[1][1]);

const myLetters = ["h", "e", "l", "l", "o"];
console.log(myLetters);

//1. Create Array name (favSingers) & store 3 favorite Singers
//2. log the first singer in that array
//3. Create array name (favNumbers) g store 4 fav Numbers.
//4. Create array name (mixedArr) store ["string",["otherarray"], 123,true]
//5. Now Access each item in that array by using [] notatoin.

let favSingers = ["Arjit singh", "yo yo honey", "lata mangeshkar"];
console.log(favSingers[0]);
let favNumbers = [4, 12, 13, 27];
let mixedArr = ["hi", ["fruit", "vegetable", 234], 78, true];
console.log(mixedArr[0]);
console.log(mixedArr[1][0]);
console.log(mixedArr[1][1]);
console.log(mixedArr[1][2]);
console.log(mixedArr[2]);
console.log(mixedArr[3]);

const fruits = [
    "apples",
    "pomegranate",
    "mango",
    "strawberries",
    "pineapple",
    "grapefruit"
];

console.log(fruits.length);

fruits.push("banana");
//add an item at the end of array
console.log(fruits.length);

fruits.pop();
//remove an item at the end of array
console.log(fruits);

fruits.shift();
// remove an item at the starting of an array
console.log(fruits);

fruits.unshift("orange");
// adds the item atvthe bigining of an array
console.log(fruits);

const moreFruits = [
    "watermelon",
    "kiwi",
    "papaya",
    "blueberries",
    "blackberries",
    "peach",
    "plum",
    "cherry",
    "guava",
    "dragon fruit",
    "lychee",
    "coconut"
];
const totalFruits = fruits.concat(moreFruits);
// add two Arrays
console.log(totalFruits);

const pl = ["javascript", "golang", "python", "php"];
const numbers = [3, 5, 2, 4, 1];

console.log(pl.includes("golang"));
console.log(pl.includes("dart"));
console.log(pl.join("-"));
console.log(pl.reverse());

console.log(pl.slice(0, 2));

console.log(numbers);
console.log(numbers.sort());

//OBJECTS -->

let person = {
    firstName: "hacker",
    lastName: "arena",
    age: 17,
    location: ["planet", "earth", "india"],
    isProgrammer: true,
    10: "ten"
};
console.log(person);

const arr = [];
console.log(typeof arr);
console.log(typeof person);

// Accessing Items from OBJECTS -->

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.location);
console.log(person.isProgrammer);

console.log(person["firstName"]);
console.log(person["location"]);

// console.log(person.10)  --> Error
console.log(person["10"]);

person.fullName = "hacker-arena";
console.log(person);

delete person.fullName;
console.log(person);

//1. create object name (car)
//2. add (type , model , color ) as properties
//3. check the type of OBJECTS
//4. update the type property to "Toyoto"
//add new property wheels
//6. log car to the console

let car = {
    type: "bmw",
    model: "z1",
    color: "gray"
};
console.log(typeof car);
console.log(car.type);
console.log((car.type = "Toyato"));

car.wheel = "black";
console.log(car);

// Function
// function declaration
function great() {
    console.log("hello from a function");
}

// run /excute function

great();
great();
great();

function sayHello(name) {
    console.log(`Hello ${name}`);
    // console.log("hello" + "" + name)
}

sayHello("hacker");
sayHello("arena");

// return function

function add(m, n) {
    return m + n;
}

// console.log(add(10, 20));

const res = add(10, 30);
const res1 = add(100, 3);
const res2 = add(1000, 301);
const res3 = add(100, 300);
console.log(res);
console.log(res1);
console.log(res2);
console.log(res3);

//1. Create a functoin name (myFunction)
//2. This function have two parameters
//3. Any number we pass as argument it will multiply that number.
//4. As argument pass your favorite number.
//5. log the value.

function myFunction(A, B) {
    console.log(A * B);
}

myFunction(10, 20);

function myfunction(p1, p2) {
    return p1 * p2;
}
let U = myfunction(1, 100);
console.log(U);

// Function declaration
function sayHi(username) {
    console.log(`hello ${username}`);
}
sayHi("hacker-arena");
// Function Expression
const graating = function (user) {
    console.log(`hello ${user}`);
};
graating("yogesh");

function showCallFunc(fn) {
    const value = 10;
    fn(value);
}
showCallFunc(function fn(value) {
    console.log(value);
});

function gret(name, cb) {
    console.log(`hello ${name}`);
    cb();
}

function cb() {
    console.log(`i am callback function`);
}
gret("john", cb);

//1. Create a function name (showCallFun)
//2. pass "f" as parameter
//3. inside that functio , create variable which holds value of 1p
//4. pass that value to calk function
//5. now create callback function & print that value which you pass as parameter to the callback functi

function showCallFun(f) {
    let val = 10;
    f(val);
}


showCallFun(function f(val) {
  console.log(val);
});

//Scopes

let textMessage = "hi"
console.log(textMessage);