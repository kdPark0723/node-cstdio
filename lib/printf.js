const printf = require('printf');

module.exports = function (format, ...args) {
  const str = printf(format, ...args);
  console.log(str);

  return str.length;
};
