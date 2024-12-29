const { InstanceBase, Regex, runEntrypoint, InstanceStatus } = require('@companion-module/base')
const UpgradeScripts = require('./src/upgrades')
const UpdateActions = require('./src/actions')
const UpdateFeedbacks = require('./src/feedbacks')
const UpdateVariableDefinitions = require('./src/variables')

class ModuleInstance extends InstanceBase {
	constructor(internal) {
		super(internal)
	}

	async init(config) {
		this.config = config

		this.updateStatus(InstanceStatus.Ok)

		this.updateActions() // export actions
		this.updateFeedbacks() // export feedbacks
		this.updateVariableDefinitions() // export variable definitions
	}
	// When module gets deleted
	async destroy() {
		this.log('debug', 'destroy')
	}

	async configUpdated(config) {
		this.config = config
	}

	// Return config fields for web config
	getConfigFields() {
		return [
			{
				type: 'number',
				id: 'input',
				label: 'Input count',
				width: 3,
				regex: Regex.NUMBER,
				default: 10,
			},
			{
				type: 'number',
				id: 'output',
				label: 'Outputs count',
				width: 3,
				regex: Regex.NUMBER,
				default: 10,
			},
			{
				type: 'checkbox',
				id: 'red',
				label: 'Calculate red tally',
				default: true,
			},
			{
				type: 'checkbox',
				id: 'green',
				label: 'Calculate green tally',
				default: false,
			},
			{
				type: 'checkbox',
				id: 'yellow',
				label: 'Calculate yellow tally',
				default: false,
			}
		]
	}

	updateActions() {
		UpdateActions(this)
	}

	updateFeedbacks() {
		UpdateFeedbacks(this)
	}

	updateVariableDefinitions() {
		UpdateVariableDefinitions(this)
	}
}

runEntrypoint(ModuleInstance, UpgradeScripts)
