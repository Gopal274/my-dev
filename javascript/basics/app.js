console.table({
    name: "gopal",
    age: 10
});
console.log("hello world");
console.log("hello world");
console.log("hello world");
console.log("hello world");
console.log("hello world");
console.log("hello world");
console.clear();
console.log("hello");
console.log({
    name: "alex",
    age: 27
});
//veriables-->
// var
// let
// const
//declared variable
// let name;
// console.log(name);
//assign value
let banana;
banana = "banana";
console.log(banana);

// let var = "variable"
// console/let 10gopal ="variable".log(var)
//var
//class
//const
//if
//for
let gopal10 = "variable";
console.log(gopal10);
//let 10gopal ="variable"
//console.log=(10gopal)

// let hacker-arena= "variable";
// console.log(hacker-arena)

let hackerarena = "variable";
console.log(hackerarena);

let UPPERCASE = "variable";
let lowercase = "variable";
let youtubeChannel = "variable"; //camelcase

//1.create variable name (name ) & store your name
//2.create variable name (whatDoYouWannaBecaneInYourKife) & store you want to became
//3.create variable name (gender) & store your gender
//4.create variable name (twitterHandle) & store your twitterHandle
// finally log all the variables to the console

let name = "hacker-arena";
let whatDoYouWannaBecaneInYourLife = "professoinal doctor";
let gender = "sigma male ";
let twitterHandle = "hacker arena ";

console.log(name);
console.log(whatDoYouWannaBecaneInYourLife);
console.log(gender);
console.log(twitterHandle);

//primitive types
//1.number
let num = 10;
console.log(num);
console.log(typeof num); //typeof --> result keyword

//arithmatic/basic math
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(3 % 2);
console.log(3 ** 2);

let counter = 0;
console.log(counter);
counter++;
counter++;
counter++;
counter++;
console.log(counter);

counter--;
counter--;
console.log(counter);

//1. crwate variable name (firstFavNum) & store yiur favorute number
//2. crwate variable name (secondFavNum) & store your second favorute number
//3. add (firstFavNum & secondFavNum)
//4. subtract (firstFavNum & secondFavNum)
//5. multiply (firstFavNum & secondFavNum)
//6. devide (firstFavNum & secondFavNum)
//7. check (firstFavNum mod secondFavNum)
// check the power of ( firstFavNum)

let firstFavNum = -2;
let secondFavNum = 4;
console.log(firstFavNum + secondFavNum);
console.log(firstFavNum - secondFavNum);
console.log(firstFavNum * secondFavNum);
console.log(firstFavNum / secondFavNum);
console.log(firstFavNum % secondFavNum);
console.log(firstFavNum ** secondFavNum);

//boolean --> true or false
let isTrue = true;
console.log(isTrue);

isTrue = false;
console.log(isTrue);

isTrue = NaN;
console.log(isTrue);

let number = 10;
console.log(number + undefined);

//falsy values-->
//false
//null
//undefined
//0
//-0
//NaN
//"", ' ' ,(empty quotes)

let notDefined = undefined;
console.log(notDefined);
notDefined = null;
console.log(notDefined);

//1. create variable name (isJsProgrammingLanguage) g store true as a value
//2. create variable name (isJsHard) & store false as a value
//3. create variable name (favNumb) store your favorite number inside
//4. Now add favNumb with the value of undefined

let isJsProgrammingLanguage = true;
let isJsHard = false;
let favNumb = 4;
console.log(favNumb + undefined);
console.log(isJsProgrammingLanguage);
console.log(isJsHard);

// Comparison Operators -->
// Relational Operators :-->
// > Greater than
// < Less than
// >= Greater than or equal to
// <= Less than or equal to

console.log(10 > 10); // true||false ?   -->false
console.log(10 < 10); // -->false
console.log(10 < 50); // -->true
console.log(100 > 50); // -->true
console.log(10 <= 50); // -->true
console.log(100 >= 50); // -->true

//Equality Operators
// === strict Equality Operators (type + valur )
// !== strict non-Equality Operators
// == lose Equality Operators ( value)
// != not Equality Operators

console.log(10 === "10"); // --> false
console.log(10 === 10); // --> true
console.log(10 !== 10); // --> false
console.log(10 !== "10"); // --> true

console.log(10 == 10); // --> true
console.log(10 != "10"); // --> flase
console.log(10 != 10); // --> flase
console.log(10 != "10"); // --> flase

//1.create variable name (firstFavNumb) & store your favorite number
//2.create variable name (secondFavNumb) & store second fav number
//3.Checj (firstFavNumb is greater tha  secondFavNumb)
//4.Checj (firstFavNumb is less than secondFavNumb)
//5.Checj (firstFavNumb is greater than or equal to secondFavNumb)
//6.Checj (firstFavNumb is less than or equal to  secondFavNumb)
//7.Checj (firstFavNumb is equal to  secondFavNumb ) eith the help of strict Equality Operators
//8.Checj (firstFavNumb is equal to  secondFavNumb ) eith the help of loose Equality Operators
//9.Checj (firstFavNumb is not equal to  secondFavNumb ) eith the help of strict non-Equality Operators
//9.Checj (firstFavNumb is not equal to  secondFavNumb ) eith the help of loose non-Equality Operators

let firstFavNumb = 16;
let secondFavNumb = 13;
console.log(firstFavNumb > secondFavNumb);
console.log(firstFavNumb < secondFavNumb);
console.log(firstFavNumb >= secondFavNumb);
console.log(firstFavNumb <= secondFavNumb);
console.log(firstFavNumb === secondFavNumb);
console.log(firstFavNumb == secondFavNumb);
console.log(firstFavNumb !== secondFavNumb);
console.log(firstFavNumb != secondFavNumb);

//string -->
let firstName = "     hacker     ";
let secondName = "arena";
// let fullName = firstName +" " + secondName;

//1.Concatenation -->
// let fullName = firstName.concat(secondName);

//2. Append -->
// firstName += "YOUTUBER"

//3. Lenght -->
// console.log(firstName.lenght)

//4. Cases -->
// console.log(firstName.toLowerCase());
// console.log(firstName.toUpperCase());

//5. Slice-->
// console.log(firstName.slice(0, 1))

//6. Split & join-->
// console.log(firstName.split(""));
// console.log(firstName.split("").join("-"));

//7. Includes-->
// console.log(firstName.icludes("w"));

//8. Trim -->
// console.log(firstName.trim());

// console.log(fullName);

let desc = "this is some random";
// let fullName = `${firstName} ${secondName}`;
// console.log(fullName);
// //1. create a variable name (favActorFirstName) and store your fav Actor name.
//2. create a variable name (favActorLastName) & store the last name of (FA).
//3. create a variable name (fullName) & concatenare (favActorFirstName, favActorLastName).
//4. create a variable name (UPPERCASE) & CAPITALISE your fav actor name.
//5.  create a variable name (message ) & store `my favorite Actor Is (favActorName) & say something about your fav actor` Name should be in UPPERCASE.
//6. Now append this message to the (message  variable) 'his best show is in his first movie'
//7. now log you message-->

let favActorFirstName = "shradha";
let favActorLastName = " kapoor ";
let fullName = favActorFirstName.concat(favActorLastName);
let uppercase = fullName.toUpperCase();
let message = `my favorite actor is ${fullName} & she is daughter of sakti kapoor`;
message += "his best movie is her movie aashiqui2";
console.log(message);
