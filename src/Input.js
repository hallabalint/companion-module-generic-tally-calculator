modeul.export = class Input {
    constructor(controller, id) {
        this.id = id
        this.state = false;
        this.controller = controller;
    }

    setState(state) {
        this.state = state;
        controllerr.updateByInput(this.id, state);
    }
}