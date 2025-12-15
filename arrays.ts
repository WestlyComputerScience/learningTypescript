const superHeros: string[] = []

const money: number[] = []
const money2: Array<number> = []; // also works

superHeros.push("spiderman");
money.push(20000);
money2.push(20000);

type User = {
    name: string;
    isActive: boolean;
}

const allUsers: User[] = []; // array of users

allUsers.push({name: "", isActive: true});

const MlModels: number[][] = [
    [255, 255, 255],
    "", // doesn't allow us!
    []
];

export {}