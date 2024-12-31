const { combineRgb } = require('@companion-module/base')

module.exports = async function (self) {
	self.setFeedbackDefinitions({
		InputState: {
			name: 'Tally on input port',
			type: 'boolean',
			label: 'Tally State',
			defaultStyle: {
				bgcolor: combineRgb(255, 0, 0),
				color: combineRgb(0, 0, 0),
			},
			options: [
				{
					id: 'num',
					type: 'number',
					label: 'Test',
					default: 5,
					min: 0,
					max: 1000,
				},
			],
			callback: (feedback) => {
				return self.inputs[feedback.options.num-1].getState(null);
			},
		},
		OutputState: {
			name: 'Tally on output port',
			type: 'boolean',
			label: 'Tally State',
			defaultStyle: {
				bgcolor: combineRgb(255, 0, 0),
				color: combineRgb(0, 0, 0),
			},
			options: [
				{
					id: 'num',
					type: 'number',
					label: 'Test',
					default: 5,
					min: 0,
					max: 1000,
				},
			],
			callback: (feedback) => {
				return self.outputs[feedback.options.num-1].getState(true);
			},
		},
	})
}
