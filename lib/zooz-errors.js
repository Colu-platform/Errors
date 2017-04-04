module.exports = function (errors) {
	errors.create({
		behavior: 'OTHER',
	    name: 'ZoozGenericError',
	    code: 90000,
	    status: 500,
	    defaultMessage: 'Generic error'
	})

	errors.create({
	    behavior: 'OTHER',
	    name: 'ZoozBootstrapError',
	    code: 90001,
	    status: 500,
	    defaultMessage: 'Bootstrap error'
	})

	errors.create({
	    behavior: 'OTHER',
	    name: 'ZoozPrivateAreaUnauthorized',
	    code: 90002,
	    status: 401,
	    defaultMessage: 'Unauthorized for private area',
	    defaultResponse: 'unauthorized'
	})

	errors.create({
		behavior: 'OTHER',
		name: 'ZoozPurchaseValidateError',
		code: 90003,
		status: 400,
		defaultMessage: 'Cannot purchase - missing parameters'
	})

	errors.create({
		behavior: 'OTHER',
		name: 'ZoozPurchaseGetUserAccountError',
		code: 90004,
		status: 500,
		defaultMessage: 'Cannot purchase - getUserAccount failed'
	})

	errors.create({
		behavior: 'OTHER',
		name: 'ZoozPurchaseAccountNotFoundError',
		code: 90005,
		status: 404,
		defaultMessage: 'Cannot purchase - account not found',
		defaultResponse: 'account not found'
	})

	errors.create({
		behavior: 'OTHER',
		name: 'ZoozPurchaseGetCurrencyError',
		code: 90006,
		status: 500,
		defaultMessage: 'Cannot purchase - getCurrency failed'
	})

	errors.create({
		behavior: 'OTHER',
		name: 'ZoozPurchaseGetCurrencyNoDataError',
		code: 90007,
		status: 400,
		defaultMessage: 'Cannot purchase - no data found for currency'
	})

	errors.create({
		behavior: 'OTHER',
		name: 'ZoozApiCallError',
		code: 90008,
		status: 500,
		defaultMessage: 'Cannot make zooz api call'
	})

	errors.create({
		behavior: 'OTHER',
		name: 'ZoozOpenPaymentMissingAccountIdError',
		code: 90009,
		status: 400,
		defaultMessage: 'Cannot open payment - missing accountId',
		defaultResponse: 'missing account id'
	})

	errors.create({
		behavior: 'OTHER',
		name: 'ZoozOpenPaymentError',
		code: 90010,
		status: 500,
		defaultMessage: 'Cannot open payment'
	})

	errors.create({
		behavior: 'OTHER',
		name: 'ZoozSaleError',
		code: 90011,
		status: 500,
		defaultMessage: 'Cannot sale'
	})

	errors.create({
		behavior: 'OTHER',
		name: 'ZoozJwtError',
		code: 90012,
		status: 500,
		defaultMessage: 'Cannot get from user management'
	})
}