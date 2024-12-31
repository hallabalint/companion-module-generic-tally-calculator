const State = require('./state');
module.exports = class Input {
    constructor(controller, id) {
        this.id = id
        let redName = 'router_output_red_' + id
        let greenName = 'router_output_green_' + id
        let yellowName = 'router_output_yellow_' + id
        this.redState = new State(redName);
        this.greenState = new State(greenName);
        this.yellowState = new State(yellowName);
        this.controller = controller;
        this.input = 0;
        
        controller.config.red ? controller.variables.push({variableId: redName, name: 'Calculated red tally on router output ' + id }):'';
        controller.config.green ? controller.variables.push({variableId: greenName, name: 'Calculated green tally on router output ' + id }):'';
        controller.config.yellow ? controller.variables.push({variableId: yellowName, name: 'Calculated yellow tally on router output ' + id }):'';
    }

    SetInput(input) {
        if (this.input != 0) {
            this.controller.
        }
    }
}