function detectType(val: number | string | number[]) { // array of numbers could be an issue in this function!
    // return val.toLowerCase(); // gives error, we don't know for sure if it's a string
    if (typeof val === "string") {
        val.toLowerCase();
    }
    if(typeof val === "number"){
        return val + 3;
    }
    // or just return val + 3 after the first if-case since it's garunteed to be a number
}

// aka, this is called "Type Guard"
function provideId(id: string | null) { // very good practice!
    if(!id) {
        console.log("Please provide ID");
        return;
    }
    id.toLowerCase();
}

// Note: this case doesn't account for empty string
function printAll(strs: string | string[] | null) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
}

// ======== the "in" operation narrowing ========
// used to narrow down potential types

interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdmin(account: User | Admin): boolean {
    // "in" helps us narrow down which interface the input is from
    if ("isAdmin" in account) { // this variable is in our Admin class
        return account.isAdmin;
    }
    return false; // since we couldn't find the variable, probably not an Admin, lol
}

// ======== "instance of" narrowing ========

function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}

type Fish = {swim: () => void};
type Bird = {fly: () => void};

function isFish(pet: Fish | Bird): pet is Fish { // if this returns as true, then it's a fish, else we don't know
    return (pet as Fish).swim !== undefined // check if when we wrap the object it has the method we want
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet // typescript cannot tell if it's a fish or bird based on our methods!
        return "fish food"
    } else {
        pet // after we did "pet is Fish," typescript now knows for sure!
        return "bird food"
    }
}

// ======== Type Narrowing with Discriminated Unions ========

// Note: questionable practice, but exists
interface Circle {
    kind: "circle"
    radius: number
}

interface Square {
    kind: "square"
    side: number
}

interface Rectangle {
    kind: "rectangle"
    length: number
    width: number
}

type Shape = Circle | Square;

function getTrueShape(shape: Shape) {
    if (shape.kind == "circle") { // allows us to do this, lol
        return Math.PI * shape.radius ** 2;
    }
    return shape.side ** 2;
}

// Option 2:

type Shape2 = Circle | Square | Rectangle

function getArea(shape: Shape2) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side
        default:
            const _defaultforshape: never = shape; // this will give an error if we didn't account for all types (Ex: rectangle)
            return _defaultforshape;
    }
}