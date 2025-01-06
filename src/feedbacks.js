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
					label: 'Port',
					default: 5,
					min: 0,
					max: 1000,
				},
			],
			callback: (feedback) => {
				let port = parseInt(feedback.options.num)
				if (isNaN(port)) {
					return
				}
				return self.inputs[port-1].GetState(null);
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
					label: 'Port',
					default: 5,
					min: 0,
					max: 1000,
				},
			],
			callback: (feedback) => {
				let port = parseInt(feedback.options.num)
				if (isNaN(port)) {
					return
				}
				return self.outputs[port-1].GetState(true);
			},
		},
	})
}
