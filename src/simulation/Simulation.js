export class Simulation {
    constructor() {
        this.isRunning = false;
    }

    play() {
        this.isRunning = true;
    }

    pause() {
        this.isRunning = false;
    }
}