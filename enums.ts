// this works, but people can change variables
/*
const AISLE = 0;
const MIDDLE = 1;
const WINDOW = 2;

if(seat === AISLE){

}
*/

// Note: this consts comments out and gets rid of a bunch of JS code
const enum SeatChoice{ // this is better, a way to represent restricted options
    AISLE = 10, // if special code requires this in airplane or something
    MIDDLE, // make this 11 etc.
    WINDOW // 12
}

enum SeatChoice2{ // this is better, a way to represent restricted options
    AISLE = "AISLE", // if special code requires this in airplane or something
    MIDDLE = "MIDDLE", // make this 11 etc.
    WINDOW = "WINDOW", // 12
    THIRD, // doesn't have initializer (we're using strings)
    FOURTH = 0,
    FIFTH
}

const hcSeat = SeatChoice.AISLE;



export {};