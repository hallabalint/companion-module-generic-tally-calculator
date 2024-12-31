const Input = require('./Input');
const Output = require('./Output');
module.exports = {
    PortsConfig: function (self) {
        self.inputs = [];
        self.outputs = [];
        self.variables = [];
        for (let i = 0; i < self.config.input; i++) {
            self.inputs.push(new Input(self, i));
        }
        self.log('debug', 'Inputs created');
        self.log('debug', JSON.stringify(self.variables));
        self.setVariableDefinitions(self.variables);
    },

    SetRedOnInput: function (id, value, user) {
        if (self.inputs[id - 1].redState.SetState(value, user)) {
            //find all outputs that are connected to this input
            self.outputs.filter(output => output.input === id).forEach(element => {
                SetRedOnOutput(element.id, value, false);
            });;

        }
    },

    SetRedOnOutput: function (id, value, user) {
        if (self.outputs[id - 1].redState.SetState(value, user)) {
            //red tally on input of this output
            SetRedOnInput(self.output[id - 1].input, value, false);
        }
    }
}
