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
        for (let i = 0; i < self.config.output; i++) {
            self.outputs.push(new Output(self, i));
        }
        self.setVariableDefinitions(self.variables);

        self.traceTally();
    },

    SetRedOnInput: function (self, id, value) {
        if (self.inputs[id - 1].SetState(value)) {
           self.traceTally();
        }
    },

    SetRedOnOutput: function (self, id, value) {
        if (self.outputs[id - 1].SetState(value)) {
            self.log('debug', 'SetRedOnOutput ' + id + ' ' + value);
            self.traceTally();
        }
    },

    TraceTally: function (self) {
        self.outputs.forEach(element => {
            element.GetState(true);
        });
        self.inputs.forEach(element => {
            element.GetState(null);
        });
        
    }

}
