module.exports = class Input {
    constructor(controller, id) {
        this.id = id + 1
        this.redName = 'router_output_red_' + this.id
        this.srcName = 'router_output_src_name_' + this.id
        this.redState = false
        this.controller = controller;
        this.input = 0;
        controller.variables.push({ variableId: this.redName, name: 'Calculated red tally on router output ' + this.id });
        controller.variables.push({ variableId: this.srcName, name: 'Calculated name based on selected input ' + this.id });
    }

    SetInput(input) {
        this.input = input;
        this.controller.traceTally();
        this.controller.updateNames();
    }

    SetName() {
        if (this.input == 0) {
            this.controller.setVariableValues({ [this.srcName]: '' });
            return;
        }
        let name = this.controller.inputs[this.input - 1]?.GetName().toString();
        this.controller.setVariableValues({ [this.srcName]: name });
    }

    GetState(recusive) {
        this.controller.log('debug', 'GetState output ' + this.id);
        if (recusive && this.input > 0) {
            let red = this.controller.inputs[this.input - 1].GetState(this) || this.redState;
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