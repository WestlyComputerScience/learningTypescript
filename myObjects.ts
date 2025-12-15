const User = {
    name: "Wes",
    email: "Awesome",
    isActive: true
}

function createUser({name, isPaid}: {name: string; isPaid: boolean}){ //specify object in TypeScript

}

createUser({name: "Wes", isPaid: false});

function createCourse():{name: string; isPaid: boolean}{ //This is a function_name(): {return_type_object} {definition}
    return {name: "Bob", isPaid: true}; // return object
}

createUser({name: "Wes", isPaid: false, email: "fakeEmail.com"}); // not contained in definition, so gives an error

let newUser = createUser({name: "Wes", isPaid: false});

export {};