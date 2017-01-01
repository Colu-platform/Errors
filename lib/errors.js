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

/******************************************** Community DB Errors ***********************/

errors.create({
  name: 'GeneralGetAccountFailed',
  code: 70001,
  status: 500,
  defaultMessage: 'Failed to retrieve account'
})


/******************************************** Community Errors ***********************/
errors.create({
  name: 'CommunityAccountNotExist',
  code: 60001,
  status: 500,
  defaultMessage: 'Failed to retrieve account'
})


module.exports = errors
