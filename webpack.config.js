const path = require('path')

module.exports = {
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		alias: {
			src: path.resolve(__dirname, 'src'),
			assets: path.resolve(__dirname, 'assets'),
			components: path.resolve(__dirname, 'components'),
		},
		test: /\.(png|jpg|jpeg|gif)$/i,
		type: 'asset/resource',
	},
}
