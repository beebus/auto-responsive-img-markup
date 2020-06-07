// eslint-disable-next-line no-undef
module.exports = {
	"env": {
		"browser": true,
		"es2020": true,
		"jquery": true
	},
	"extends": "eslint:recommended",
	"parserOptions": {
		"ecmaVersion": 11
	},
	"plugins": [
		"dollar-sign",
		"jquery"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		]
	}
};
