'use strict'

const fs = require('fs')
const path = require('path')

module.exports = dir => {
  const items = {}
  fs.readdirSync(dir)
    .filter(file => (file.indexOf('.') !== 0) && file !== 'index.js' && (file.slice(-3) === '.js'))
    .forEach(file => {
      const item = require(path.resolve(dir, file))
      items[item.name] = item
    })
  return items
}
