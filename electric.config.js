'use strict';

var marble = require('marble');

module.exports = {
	metalComponents: ['electric-marble-components', 'marble-topbar'],
	sassOptions: {
		includePaths: ['node_modules', marble.src]
	},
	vendorSrc: ['node_modules/marble/build/fonts/**'],
	codeMirrorLanguages: ['xml', 'css', 'javascript', 'shell', 'sass'],
	codeMirrorTheme: 'monokai',
	pathDest: 'docs',
	deployOptions: {
		branch: 'netlify'
	}
};
