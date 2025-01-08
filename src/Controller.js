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
        for (let i = 0; i < self.config.input; i++) {
            self.inputs[i].SetName(self.config?.names[i] || '', false);

        }
        self.setVariableDefinitions(self.variables);
        self.updateNames();
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
            self.log('debug', element.input + ' ' + element.id);
            element.GetState(true);
        });
        self.inputs.forEach(element => {
            element.GetState(null);
        });
        self.checkFeedbacks('InputState', 'OutputState');

    },

    UpdateNames: function (self) {
        self.outputs.forEach(element => {
            element.SetName();
        });

        let names = [];
        self.inputs.forEach(element => {
            names.push(element.GetName());
        });
        self.config['names'] = names;
        self.log('info',JSON.stringify(self.config));
        //self.config.options.names = names;
        self.saveConfig(self.config);

    },
    SetName: function (self, id, name) {
        self.inputs[id - 1].SetName(name);
    },

}
