const path = require('path')

module.exports = env => {
  return {
    optimization: {
      usedExports: false,
    },
    entry: {
      index: './src/index.ts',
      getCase: './src/getCase.ts',
      isEmptyFunction: './src/isEmptyFunction.ts'
    },
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: '[name].js',
      clean: true,
    },
  }
}
