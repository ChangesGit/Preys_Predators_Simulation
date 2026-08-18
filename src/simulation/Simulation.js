export class Simulation {
    constructor() {
        this.isRunning = false;
        this.speed = 1;
    }

    play() {
        this.isRunning = true;
    }

    pause() {
        this.isRunning = false;
    }

    setSpeed(speed) {
        if(speed === 1 || speed === 2 || speed === 4) {
            this.speed = speed;
        }
        else {
            throw new Error(
                `Simulation : Simulation's speed cannot be ${speed}, allowed values are 1, 2 and 4.`
            );
        }
    }
}