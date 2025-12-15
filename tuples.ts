const User: (string | number | boolean)[] = [1, "wo", false]; // want string, number, boolean in precise order!

const User2: [string, number, boolean] = [1, "wo", false];
const User3: [string, number, boolean] = ["wo", 1, false]; // yep!

let rgb: [number, number, number] = [255, 123, 76];

type User = [number, string] // need to be in tuple format!

const newUser: User = [112, "westly@theBest.com"];

newUser[1] = "wo.com"; // allows me to change the values (it's a constant)

newUser.push(true); // doesn't allow us to do it! This was an older issue within the community

export {};