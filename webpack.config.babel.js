
export default (env = {}, argv) => ({
  mode: env.production ? 'production' : 'development',
  entry: `${__dirname}/index.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: `[name].js`
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  devtool: env.production ? 'source-maps' : 'eval',
})

