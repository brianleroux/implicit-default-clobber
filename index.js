#!/usr/bin/env node
var path = require('path')
  , fs = require('fs')

function defaultify(thefile) {
  var infile = path.resolve(process.cwd(), thefile)
    , contents = fs.readFileSync(infile, 'utf8')
  contents += "module.exports = exports.default"
  fs.writeFileSync(infile, contents)
}

if (require.main === module) {
  defaultify(process.argv[2])
}
else {
  module.exports = defaultify
}

