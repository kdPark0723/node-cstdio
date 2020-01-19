const printf = require('printf');

module.exports = function (writeStream, format, ...args) {
  return printf(writeStream, format, ...args);
};
