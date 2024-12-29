module.export = class State {
    constructor() {
        this.red = false;
        this.green = false;
        this.yellow = false;
    }

    setRed(state) {
        this.red = state;
    }

    setGreen(state) {
        this.green = state;
    }

    setYellow(state) {
        this.yellow = state;
    }

    getRed() {
        return this.red;
    }

    getGreen() {
        return this.green;
    }

    getYellow() {
        return this.yellow;
    }
}