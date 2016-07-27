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
	defaultMessage: 'Trying to send with two or more sending methods',
})

errors.create({
	name: 'NoSendMethodError',
	code: 50002,
	status: 400,
	defaultMessage: "Can't find to whom to send the asset"
})

module.exports = errors