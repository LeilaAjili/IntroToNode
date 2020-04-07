var module = require('./mymodule.js')
var directory = process.argv[2]
var files = process.argv[3]

module(directory, files, function (err, list) {
  
list.forEach(function (file) {

    console.log(file)

 
  }
  )})