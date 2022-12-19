const path = require('path')

module.exports = {
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		alias: {
			src: path.resolve(__dirname, 'src'),
			components: path.resolve(__dirname, 'components'),
		},
	},
}
