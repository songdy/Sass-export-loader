const { buffer } = require('sass-export-extend')

module.exports = function(source) {
  this.cacheable();
  const callback = this.async();
  buffer([source]).then(asObject => {
    const asString = JSON.stringify(asObject)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
    callback(null, `module.exports = ${asString}`);
  })
};