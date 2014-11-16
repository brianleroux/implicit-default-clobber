# implicit default

### problem

es6 to es5 transpilers that encounter `export default` syntax will generate a module with a key `default`. most node modules expect that a single function export. 

this module "fixes" this by blindly concatenating `module.exports = exports.default` onto the file passed in. you can then publish your generated es5 source to npm and other folks can use it normally.

so instead of this:

    var somemodule = require('somemodule').default

consumers of your code you can just use the 'normal' expected require syntax

    var somemodule = require('somemodule')

### install

    npm i implicit-default-clobber --save-dev

### usage

```
{
  "scripts":{

    "implicit-default":"implicit-default infile.js > outfile.js",
    "start":"6to5 index.js > dist/index.js && npm run implicit-default"
  }
}
```


