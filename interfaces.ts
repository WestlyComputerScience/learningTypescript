interface User { // Note: no "=" sign like "type"
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    //startTrial: () => string
    startTrial(): string, // another way to say it's a function returning string (also doesn't force parameters)
    getCoupon(couponname: string, value: number): number
}

interface User { // called re-opening the inferace, adds variables to it
    githubToken: string
}

interface Admin extends User{ // extends an interface
    role: "admin" | "ta" | "learner"
}

// Note: don't name your interface similar to package naming!

const westly: Admin = {dbId: 22, email: "w", userId: 1, 
    role: "admin",
    startTrial: () => {
        return "trial started";
    },
    getCoupon: (name: "westly", discount: 2) => { // allowed to do this, no need to match couponname
        return 10;
    },
    githubToken: "2"};
westly.email = "w@gmail.com";
// westly.dbId = 2; // not allowed

export {};