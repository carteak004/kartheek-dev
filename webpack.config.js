const path = require('path')

module.exports = {
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		alias: {
			src: path.resolve(__dirname, 'src'),
			assets: path.resolve(__dirname, 'assets'),
			components: path.resolve(__dirname, 'components'),
			pages: path.resolve(__dirname, 'pages'),
		},
		test: /\.(png|jpg|jpeg|gif)$/i,
		type: 'asset/resource',
	},
}
