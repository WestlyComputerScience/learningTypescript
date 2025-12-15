let score: number | string = 3123; // reccommended to keep as script as possible (basically allows this variable to be 2 things)

let score1: number | string | boolean | user | point = 3123; // not reccommended, lol

score = 44;
score = "55";

type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}

let westly: User | Admin = {name: "wes", id: 123};

let westly = {username: "wo", id: 445};

function getDbId(id: number | string){
    // making some API calls
    console.log(`DB if is: ${id}`)
}

getDbId(2);
getDbId("3");

function getDbId2(id: number | string){
    id.toLowerCase(); // treats it as a string AND number, both are possible use cases
    if(typeof id == "string"){
        id.toLowerCase(); // fixes our problem!
    }
}

// === ARRAYS ===

const data: number[] | string[] = [1, 2, 3, "4"]; // don't do this!
const data2: (number | string | boolean)[] = [true, 2, 3, "4"]; // wrap in parenthesese!

let pi: 3.14; // lol, we can say it has to be this number exactly
pi = 3.15; 

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
seatAllotment = "car"; // it's useful in this sense!

export {};