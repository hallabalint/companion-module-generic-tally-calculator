module.exports = function (self) {
	self.setActionDefinitions({
		crosspoint: {
			name: 'Set X/Y Point',
			options: [
				{
					id: 'x',
					type: 'number',
					label: 'Source',
					default: 5,
					min: 1,
				},
				{
					id: 'y',
					type: 'number',
					label: 'Destination',
					default: 5,
					min: 1,
				},
			],
			callback: async (event) => {
				let id = parseInt(event.options.x) - 1;
				self.outputs[id].SetInput(event.options.y);
			},
		},
		setTallyOutput: {
			name: 'Set Tally on Output port',
			options: [
				{
					id: 'portnumber',
					type: 'number',
					label: 'Port',
					default: 5,
					min: 1,
				},
				{
					id: 'state',
					type: 'dropdown',
					label: 'Tally',
					choices: [
						{ id: true, label: 'On' },
						{ id: false, label: 'Off' },
					],
				},
			],
			callback: async (event) => {
				self.setRedOnOutput(event.options.portnumber, event.options.state);
			},
		},
		setTallyInput: {
			name: 'Set Tally on Input port',
			options: [
				{
					id: 'portnumber',
					type: 'number',
					label: 'Port',
					default: 5,
					min: 1,
				},
				{
					id: 'state',
					type: 'dropdown',
					label: 'Tally',
					choices: [
						{ id: true, label: 'On' },
						{ id: false, label: 'Off' },
					],
				},
			],
			callback: async (event) => {
				self.setRedOnInput(event.options.portnumber, event.options.state);
			},
		}
	})

}
