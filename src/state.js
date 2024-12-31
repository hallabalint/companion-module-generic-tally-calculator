module.exports = class State {
    constructor(controller, varName) {
        this.varName = varName;
        this.userActive = false;
        this.calculateActive = false;
        this.controller = controller;
    }

    GetState() {
        return this.userActive || this.calculateActive;
    }

    SetState(state, user) {
        if (user) {
            if (this.GetState() === state) {
                return false;
            }
            this.userActive = state;
        } else {
            if (this.GetState() === state) {
                return false;
            }
            this.calculateActive = state;
        }
        this.controller.setVariableValue(this.varName, this.GetState()?1:0);
        return true;
    }
}