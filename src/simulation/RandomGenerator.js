//The random seeded generator used is Mulberry32

export class RandomGenerator {
    constructor(seed) {
        if (!Number.isSafeInteger(seed)) {
        throw new TypeError(
            "RandomGenerator : la graine doit être un entier sûr."
        );
        }

        this.seed = seed >>> 0;
        this.state = this.seed;
    }

    next() {
        this.state = (this.state + 0x6d2b79f5) >>> 0;

        let value = Math.imul(
        this.state ^ (this.state >>> 15),
        this.state | 1
        );

        value ^= value + Math.imul(
        value ^ (value >>> 7),
        value | 61
        );

        return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
    }
}