const { InstanceBase, Regex, runEntrypoint, InstanceStatus } = require('@companion-module/base')
const UpgradeScripts = require('./src/upgrades')
const UpdateActions = require('./src/actions')
const UpdateFeedbacks = require('./src/feedbacks')
const UpdateVariableDefinitions = require('./src/variables')
const { PortsConfig, SetRedOnInput, SetRedOnOutput, TraceTally, UpdateNames, SetName } = require('./src/Controller')

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
		this.initPortConfig()
	}
	// When module gets deleted
	async destroy() {
		this.log('debug', 'destroy')
	}

	async configUpdated(config) {
		this.config = config
		this.initPortConfig()
	}

	// Return config fields for web config
	getConfigFields() {
		return [
			{
				type: 'number',
				id: 'input',
				label: 'Input count',
				width: 3,
				default: 10,
			},
			{
				type: 'number',
				id: 'output',
				label: 'Outputs count',
				width: 3,
				default: 10,
			}
		]
	}
	initPortConfig() {
		PortsConfig(this);
	}

	updateActions() {
		UpdateActions(this)
	}

	updateFeedbacks() {
		UpdateFeedbacks(this)
	}

	updateVariableDefinitions() {
		//UpdateVariableDefinitions(this)
	}

	setRedOnInput(port, value) {
		SetRedOnInput(this, port, value);
	}

	setRedOnOutput(port, value) {
		SetRedOnOutput(this, port, value);
	}
	traceTally() {
		TraceTally(this);
	}
	updateNames() {
		UpdateNames(this)
	}
	setName(id, name) {
		SetName(this, id, name)
	}
}

runEntrypoint(ModuleInstance, UpgradeScripts)
