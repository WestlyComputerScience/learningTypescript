type User = {
    name: string;
    email: string;
    isActive: boolean;
    money: number;
}

type Mystring = string; // can rename string to your liking, lol

function createUser(user: User): User { // allowed to pass a user as an object, also allows to return User
    return {name: "", email: "", isActive: true, money: 2};
}

createUser(); // requires an argument of type user

createUser({name: "", email: "", isActive: true, money: 2}); // happy with this and checks for definition

export {}