var authenticator = require("authenticator");

//var formattedKey = 'KLB3 3KFZ 4IJ5 EKX4 LU3Y DDLO 2IDT GLNM'
// var formattedToken = authenticator.generateToken(formattedKey);

module.exports.getCode = function(formattedKey) {
  return authenticator.generateToken(formattedKey);
};
module.exports.getExpiredTime = function() {
  var now = new Date().getSeconds();
  if (now > 30) {
    return 60 - now;
  }
    return 30-now;
};
