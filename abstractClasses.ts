abstract class TakePhoto { // blueprint that cannot build objects (that's childs responsibility)
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void // no definition here, need to be implemented in child classes

    getReelTime(): number { // allows child's to use this class
        // some complex calculation
        return 8;
    }

}

// const wes = new TakePhoto("test", "test"); // cannot create objects from abstract class

class Instagram extends TakePhoto { // "extends" and not "implements"!
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter) // pass this onto parent class
    }

    getSepia(): void {
        console.log("Sepia");
    }
}

const we = new Instagram("test", "test", 3);