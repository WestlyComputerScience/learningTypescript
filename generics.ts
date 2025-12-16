// Note: can use any, but defeats the point

const score: Array<number> = [] // one way to declare an array
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val; // can be boolean or a number, problem!
}

function identityTwo(val: any):any {
    return val; // hmm, no idea what the value could be
}

function identityThree<Type>(val: Type): Type { // ready to accept whatever you wish, but this value is logged when calling the function!
    return val;
}

// it automatically converts it for us, lol
identityThree("3");
identityThree(3);

function identityFour<T>(val: T): T { // "T" is convention for this
    return val;
}

interface Bottle {
    brand: string
    type: number
}

identityFour<Bottle>({brand: "wes", type: 2}); //syntax to pass on object

// =========== Generics Arrays ==========

function getSearchProducts<T>(products: T[]): T { // take generic arrays
    // return 3; // cannot do, must be type T as you specified!
    
    // do some database operations
    const myIndex = 3;
    return products[myIndex]; // doesn't mention it in vid, but this is an error since there's no justfication that element 3 is null
}

// how to make generic arrow function
const getMoreSearchProducts = <T>(products: T[]): T => {
    // do some database ops
    const myIndex = 4;
    return products[myIndex];
}

const getMoreSearchProducts1 = <T,>(products: T[]): T => { // the extra comma to mention that it's a generic tag and NOT JSX syntax but rather a syntax for generics
    // do some database ops
    const myIndex = 4;
    return products[myIndex];
}

// ======== Generic Classes ========

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends number>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

// It now has to be in the realm of database-related classes
function anotherFunction2<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

anotherFunction(3, 4.6); // we can do ints and floats with this extends double checking it's in that realm
anotherFunction2(3, {connection: "wes", username: "bob", password: "1234"});

interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product);
    }
}