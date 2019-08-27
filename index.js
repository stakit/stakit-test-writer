var concat = require('concat-stream')

module.exports = function () {
  var files = {}

  return {
    write,
    get
  }

  function write (file) {
    return new Promise(function (resolve) {
      file.stream.pipe(concat({ encoding: 'string' }, end))

      function end (html) {
        files[file.destination] = html
        resolve()
      }
    })
  }

  function get (path) {
    return files[path]
  }
}
