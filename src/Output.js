const State = require('./src/State.js');
modeul.export = class Input {
    constructor(controller, id) {
        this.id = id
        this.state = new State();
        this.controller = controller;
    }

    setRedState(state) {
        this.state.setRed(state);
        controllerr.updateByInput(this.id, this.state);
    }
    setYellowState(state) {
        this.state.setYellow(state);
        controllerr.updateByInput(this.id, this.state);
    }
    setGreenState(state) {
        this.state.setGreen(state);
        controllerr.updateByInput(this.id, this.state);
    }
}