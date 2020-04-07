var fs = require('fs');
var path = require('path');
// var directory = process.argv[2];
// var extension = '.'+process.argv[3];

module.exports = function(directory, files, callback) {




fs.readdir(directory, function (err, list) {
  if (err)
  return callback(err)
  list = list.filter(function (file) {
    return path.extname(file) === '.' + files
  })

  callback(null, list)




  
  })}
