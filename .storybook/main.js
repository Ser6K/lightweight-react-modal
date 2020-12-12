const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [{ loader: require.resolve('ts-loader') }],
    })

    config.module.rules.find((rule) => rule.test.toString() === '/\\.css$/').exclude = /\.css$/

    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
        },
      ],
    })
    config.resolve.extensions.push('.ts', '.tsx')
    config.resolve.alias = {
      utils: path.resolve(__dirname, '../src/utils/utils'),
      register: path.resolve(__dirname, '../src/utils/register'),
    }
    return config
  },
}
