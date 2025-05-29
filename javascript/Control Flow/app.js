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
let greatings;

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

for (let i = 1; i <= 2; i++) {
    console.log("---outer loop---", i);
    // nested loop
    for (let j = 1; j <= 2; j++) {
        console.log("---inner loop ---", j);
    }
}

// print your name & numbet from 0 through 1000
// for (let k = 0; k<=1000 ; k++){
//   console.log("hacker-arena",k)
// }

// while loop -->
let i = 1;

while (i <= 5) {
    console.log("hello world ", i);
    i++;
}

// Print "your name" 100 times to the console using while loop
// Iteratoin will start from 10

let j = 10;

while (j <= 100) {
    console.log("hacker-arena", j);
    j++;
}

// Do while loop -->

let k = 1 
 
do {
  console.log("hello world", k)
  k++
}while (k <= 5)

//print "your Name " 400 times to the console using do-while-loop.
//Iteration should start from 20.

let j = 20 

do {
  console.log("hacker-arena", j)
  j++;
}while(j<=400)

