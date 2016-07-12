var errors = require('cc-errors')

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