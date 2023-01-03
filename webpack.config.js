const path = require('path')

module.exports = {
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		alias: {
			src: path.resolve(__dirname, 'src'),
			assets: path.resolve(__dirname, 'assets'),
			components: path.resolve(__dirname, 'components'),
			constans: path.resolve(__dirname, 'constants'),
			models: path.resolve(__dirname, 'models'),
			pages: path.resolve(__dirname, 'pages'),
			utils: path.resolve(__dirname, 'utils'),
		},
		test: /\.(png|jpg|jpeg|gif|svg)$/i,
		type: 'asset/resource',
	},
}
