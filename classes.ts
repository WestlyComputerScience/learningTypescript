class User { // creates a class
    email: string // constructor in typescript requires visibility to pass errors
    name: string
    private readonly city: string = "" // needs an initializer since it's not in a constructor
    constructor(email: string, name: string){ // constructor
        this.email = email;
        this.name = name;
    }
}

const Westly = new User("w@thegoat.com", "westly"); // don't need to specify name: "westly" etc.
// Westly.city = "Chicago"; // can also apply readonly for saftey



// ========= PART 2 =============
class User1 { 
    public email: string
    #name: string = ""; // "#" = private in javascript, I'd prefer private though
    name: string // name is also public by default
    private readonly city: string = "" 
    constructor(email: string, name: string){ 
        this.email = email;
        this.name = name;
        this.city; // allowed to do this here
    }
}

const Westly1 = new User1("w@thegoat.com", "westly"); 
// Westly.city; // the private part doesn't allow us to use it!


// ========== Another, more professional, style ============
class User2 { 
    readonly city: string = "" 
    constructor(public email: string, public name: string, private userId: string){ 
        this.email = email;
        this.name = name;
        this.city;
    }
}

const Westly2 = new User2("w@thegoat.com", "westly", "2");

// =============== Getters and Setters, private methods, access modifiers ============

class User3 {
    private _courseCount = 1;
    readonly city: string = "";
    constructor(public email: string, public name: string, private userId: string){ 
        this.email = email;
        this.name = name;
        this.city;
    }

    get getAppleEmail(): string{ // "get" keyword to specify it's a getter method
        return `apple${this.email}`;
    }

    get courseCount(): number {
        return this._courseCount;
    }

    set courseCount(courseNum)/*: void*/ { // setter cannot have a return type notation, put nothing there!
        if (courseNum <= 1){
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }

    private deleteToken() { // only accessible within the class
        console.log("token deleted");
    }
}

class SubUser3 extends User3 { // inheritance for classes, note: it cannot inherit any private properties!
    isFamily: boolean = true;
    changeCourseCount() {
        this._courseCount = 4; // private, only accessible in User3
        // if it was "protected _courseCount," it's only accessible in the superclass and any classes inherited it
    }
}

const Westly3 = new User3("w@thegoat.com", "westly", "2");