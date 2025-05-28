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

let password;
if ((password = 8)) {
    console.log("welcome");
} else if (password <= 8) {
    console.log("password is too short");
} else if (password >= 8) {
    console.log("Too long password");
}
