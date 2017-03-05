var fs = require('fs')
var path = require('path')
var errors = require('cc-errors')
var originalCreate = errors.create

// Colu base error (all errors will inherit from it)
errors.create({
  name: 'ColuError',
  code: 1
})

errors.create = function (options) {
  options.parent = options.parent || errors.ColuError
  errors.codes[options.code] = options
  return originalCreate(options)
}

errors.getDocs = function () {
  return fs.readFileSync(path.join(__dirname, '../docs', 'errors.md'), 'utf8')
}

errors.create({
  name: 'MultipleSendMethodsError',
  code: 50001,
  status: 400,
  defaultMessage: 'Trying to send with two or more sending methods'
})

errors.create({
  name: 'NoSendMethodError',
  code: 50002,
  status: 400,
  defaultMessage: "Can't find to whom to send the asset"
})

errors.create({
  name: 'VersionNotSupported',
  code: 50003,
  status: 410,
  defaultMessage: 'Version not supported'
})

errors.create({
  name: 'AppNameNotRecognized',
  code: 50004,
  status: 410,
  defaultMessage: 'AppName not recognized'
})

require('./community-errors.js')(errors)

module.exports = errors