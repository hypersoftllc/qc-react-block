const fse = require('fs-extra')
const path = require('path')

const babel = require('babel-core')


let callback, inputFilename, outputFilename

inputFilename = path.resolve(__dirname, '../src/index.jsx')
callback = function (err, result) {
  if (err) {
    console.error(err)
  }
  let outputFilename = path.resolve(__dirname, '../lib/Block.js')
  fse.outputFileSync(outputFilename, result.code, { encoding: 'utf8' })
}
babel.transformFile(inputFilename, callback)


inputFilename = path.resolve(__dirname, '../src/Block.css')
outputFilename = path.resolve(__dirname, '../lib/Block.css')
callback = function (err) {
  if (err) {
    console.error(err)
  }
}
fse.copy(inputFilename, outputFilename)
    .catch(callback)
