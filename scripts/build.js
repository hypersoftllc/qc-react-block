// const fs = require('fs')
const fse = require('fs-extra')
const path = require('path')

const babel = require('babel-core')
// const copyfiles = require('copyfiles')
// const outputFileSync = require('output-file-sync')


let callback, inputFilename, outputFilename

inputFilename = path.resolve(__dirname, '../src/index.jsx')
callback = function (err, result) {
  if (err) {
    console.error(err)
  }
  let outputFilename = path.resolve(__dirname, '../build/Block.js')
  fse.outputFileSync(outputFilename, result.code, { encoding: 'utf8' })
}

babel.transformFile(inputFilename, callback)


inputFilename = path.resolve(__dirname, '../src/Block.css')
outputFilename = path.resolve(__dirname, '../build/Block.css')
callback = function (err) {
  if (err) {
    console.error(err)
  }
}
// fs.copyFile(inputFilename, outputFilename, callback)

// copyfiles([inputFilename, outputFilename], callback)

fse.copy(inputFilename, outputFilename)
    .catch(callback)
