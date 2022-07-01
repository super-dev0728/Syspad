module.exports = {
    resolve: {
      fallback: {
        buffer: require.resolve('buffer/'),
        path: require.resolve('path-browserify'),
        stream: require.resolve('stream-browserify')
      }
    },
    module: {
      rules: [
        {
          test: /\.json$/,
          loader: 'json-loader'
        }
      ]
    }
};