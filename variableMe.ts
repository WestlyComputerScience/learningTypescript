let greetings: string = "Hello Westly";

let myNum: number = 6;

myNum.toUpperCase(); // also doesn't work lol

greetings.toLowercase(); //incorrect method names, also gives suggestions (potentially from own code too after learning!)

// if I try to assign it 6
greetings = 6; // lol we love typescript (good for safety)

console.log(greetings);

// number

let userId: number = 334466; //annotates that userId is a number and always should be a number
let userId2 = 33445566; // typescript also assigns this automatically detect this is a number!
userId2.toFixed; // hover over variable to see

//userId.    (shows all number functions)

// boolean
let isLoggedIn: boolean = false;

// isLoggedIn.       (shows all boolean functions)



export {} // gets rid of our error
