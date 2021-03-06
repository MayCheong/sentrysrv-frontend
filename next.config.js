//This file is used for configuration for next.js
//This file is used for configuration for next.js
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			env: {
				backend_urlp: 'http://localhost:1337'
			},
		/* development only config options here */
		}
	}

	return {
		env: {
			env: {
				backend_urlp: 'http://localhost:1337'
			},
		},
		/* config options for all phases except development here */
	}
}
