type User = {
    readonly _id: string; // nobody should be able to manipulate the ID, can't change it
    name: string;
    email: string;
    isActive: boolean;
    credCardDetails?: number; // not all users have this, so make it optional
}

let myUser: User = {
    _id: "12345",
    name: "larry",
    email: "fake@emal.com",
    isActive: false
};

myUser.email = "h@gmail.com";
myUser._id = "empty"; // doesn't allow us to change it, good!

type cardNumber = {
    cardNumber: string;
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & { // combine both the object's variables
    cvv: number
};



export {};