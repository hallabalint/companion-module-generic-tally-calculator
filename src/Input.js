module.exports = class Input {
    constructor(controller, id) {
        this.id = id + 1
        this.redName = 'router_input_red_' + this.id
        this.redState = false
        this.controller = controller;
        controller.variables.push({ variableId: this.redName, name: 'Calculated red tally on router input ' + this.id });
    }

    GetState(caller) {
        let self = this;
        this.controller.log('debug', 'GetState input ' + this.id);
        if (this.redState) {
            return true;
        }
        //find all outputs of this input
        this.controller.outputs.filter(output => output.input == this.id).forEach(element => {

            if (element.GetState(false)) {
                self.controller.log('debug', 'element: ' + element.input + ' ' + element.id);
                self.controller.log('debug', self.redName)
                self.controller.setVariableValues({ [self.redName]: 1 });
                return true;
            }
        });
        this.controller.setVariableValues({ [this.redName]: 0 });
        return false;
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