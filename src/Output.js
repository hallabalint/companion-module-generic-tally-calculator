module.exports = class Input {
    constructor(controller, id) {
        this.id = id + 1
        this.redName = 'router_output_red_' + this.id
        this.redState = false
        this.controller = controller;
        this.input = 0;
        controller.variables.push({ variableId: this.redName, name: 'Calculated red tally on router output ' + this.id });
    }

    SetInput(input) {
        this.input = input;
    }

    GetState(recusive) {
        this.controller.log('debug', 'GetState output ' + this.id);
        if (recusive && this.input > 0) {
            let red =  this.controller.inputs[this.input - 1].GetState(this) || this.redState;
            this.controller.setVariableValues({ [this.redName]: red ? 1 : 0 });
            return red;
        } else {
            this.controller.setVariableValues({ [this.redName]: this.redState ? 1 : 0 });
            return this.redState;
        }
    }

    SetState(value) {
        if (this.redState != value) {
            this.redState = value;
            this.controller.setVariableValues({ [this.redName]: this.redState ? 1 : 0 });
            return true;
        }
        return false;
    }
}