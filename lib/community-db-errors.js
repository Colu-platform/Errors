module.exports = function (errors) {
  errors.create({
    behavior: 'OTHER',
    name: 'GeneralGetAccountFailed',
    code: 100000,
    status: 500,
    defaultMessage: 'Failed to retrieve account'
  })
}