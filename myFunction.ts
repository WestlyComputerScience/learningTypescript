
// number on the outside allows us to specify return type!
function addTwo(num: number): number{ // need to specify type for parameters
    //num.toUpperCase(); // bad, it allows us to do this :(
    //return num + 2;
    return "wrong type";
}

function getUpper(val: string){
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean){ // Note: if you never call this, it doesn't show up in the js compiled version!
    // implement :D
}

// Note: it's false by default;
let loginUser = (name: string, email: string, isPaid: boolean = false) => {}; // arrowhead function
// which allows us to do this
loginUser("w", "w@w.com");

let myValue = addTwo(5); // allows us to do this with a string :(

let test: string = 'lower';

test = getUpper(test);

console.log(test);

function getValue(myVal: number): boolean{ // how do I return multiple types? (later notes)
    if(myVal > 5){
        return true; // want true
    }
    return "200 OK"; // returns status code if error
}

const getHello = (s: string): string => {  // how to do for arrow function!
    return "";
}

const heros = ["thor", "spiderman", "ironman"];

heros.map((hero) => { // automatically predicts all our information correctly
    return `hero is ${hero}`;
});

const heros2 = [1, 2, 3];

// Note: good practice to also define return type!
heros2.map((hero): string => { // automatically predicts all our information correctly (changes to numbers)
    return `hero is ${hero}`;
});

function consoleError(errorMessage: string): void{ // good practice to mention it returns nothing!
    console.log(errorMessage);
    // "return 1;" will give us an error
}

function handleError(errmsg: string): never{ // "never" specifies the function will never return a value (void returns nothing), good for error handling
    throw new Error(errmsg); // basically the function terminates execution of the program or throws an exception
    // "never" also appears when TypeScript determines there's nothing left in a union
}

export {}