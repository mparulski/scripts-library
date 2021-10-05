const path = require('path')

module.exports = env => {
  return {
    entry: {
      getCase: './src/getCase.ts',
      isEmptyFunction: './src/isEmptyFunction.ts'
    },
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: '[name].js',
    },
  }
}
