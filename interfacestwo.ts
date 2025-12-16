interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

interface Story {
    createStory(): void
}

class Instagram implements TakePhoto { // gives error until we have requirements
    constructor( // Note: this is another way to write constructor professionally
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){

    }
}

class Youtube implements TakePhoto, Story {
     constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public extra: number // no errors for doing extra!
    ){

    }

    createStory(): void { // required by our interface "Story"
        console.log("story was created");
    }
}