module.exports = function (errors) {
  /** ****************************************** Community Errors ***********************/

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityGenericError',
    code: 60000,
    status: 500,
    defaultMessage: 'Generic error'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityBootstrapError',
    code: 60001,
    status: 500,
    defaultMessage: 'Bootstrap error'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityVersionNotSupported',
    code: 60002,
    status: 410,
    defaultMessage: 'Version not supported',
    defaultResponse: 'Gone'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityUserManegmentError',
    code: 60003,
    status: 500,
    defaultMessage: 'Cannot get user by token from user management',
    defaultResponse: 'User management error'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityMerchantByRemoteIdNotFound',
    code: 60004,
    status: 403,
    defaultMessage: 'Cannot find merchant by remoteId'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityMerchantByOwnerNotFound',
    code: 60005,
    defaultMessage: 'Cannot find merchant by owner'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityColuUserNotFound',
    code: 60006,
    status: 404,
    defaultMessage: 'Cannot find user in usermanagement admin proxy'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityUploadImageError',
    code: 60007,
    status: 500,
    defaultMessage: 'Cannot upload image',
    defaultResponse: 'Could not upload file'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityUploadImageFormatNotSupported',
    code: 60008,
    status: 400,
    defaultMessage: 'Cannot upload image - format not supported',
    defaultResponse: 'Image format not supported, please use png gif or jpeg'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityUploadImageSizeTooBig',
    code: 60009,
    status: 400,
    defaultMessage: 'Cannot upload image - size too big',
    defaultResponse: 'Image size too big, please use an image under 50KB'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityGetCurrencyError',
    code: 60010,
    status: 500,
    defaultMessage: 'Cannot get currency'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityCurrencyNotFoundError',
    code: 60011,
    status: 400,
    defaultMessage: 'Cannot get currency - not found',
    defaultResponse: 'currency not found'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityMerchantCreate',
    code: 60012,
    status: 500,
    defaultMessage: 'Cannot create merchant'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityMerchantCreateAsAdmin',
    code: 60013,
    status: 500,
    defaultMessage: 'Cannot create merchant as admin'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountByRemoteIdNotFound',
    code: 60014,
    status: 400,
    defaultMessage: 'Cannot find account by remoteId'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityMerchantNotFound',
    code: 60015,
    status: 404,
    defaultMessage: 'Cannot find merchant',
    defaultResponse: 'merchant not found'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityMerchantCreateColuUser',
    code: 60016,
    status: 500,
    defaultMessage: 'Cannot create colu user for merchant'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityMerchantSwitchAccountOwner',
    code: 60017,
    status: 400,
    defaultMessage: 'Cannot switch account owner for merchant',
    defaultResponse: 'failed to switchAccountOwner'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityMerchantUpdateMeta',
    code: 60018,
    status: 400,
    defaultMessage: 'Cannot update meta for merchant',
    defaultResponse: 'failed to updateMeta'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityMerchantSwitchTerminalUser',
    code: 60019,
    status: 400,
    defaultMessage: 'Cannot switch terminal user for merchant',
    defaultResponse: 'failed to switchTerminalUser'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityMerchantAddTerminalUser',
    code: 60020,
    status: 400,
    defaultMessage: 'Cannot add terminal user for merchant',
    defaultResponse: 'failed to addTerminalUsers'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityMerchantUpdateData',
    code: 60021,
    status: 500,
    defaultMessage: 'Cannot update merchant data',
    defaultResponse: 'failed to update merchant'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityPaymentGetById',
    code: 60022,
    status: 500,
    defaultMessage: 'Cannot get payment by id'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityPaymentCreate',
    code: 60023,
    status: 500,
    defaultMessage: 'Cannot create payment'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityPaymentGetByAccount',
    code: 60024,
    status: 500,
    defaultMessage: 'Cannot get payment by account'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityPaymentGetByAccountInvalidParams',
    code: 60025,
    status: 400,
    defaultMessage: 'Cannot get payment by account - invalid params',
    defaultResponse: 'Invalid params'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityFilterEncoderParseError',
    code: 60026,
    status: 400,
    defaultMessage: 'Filter encoder parse error',
    defaultResponse: 'Filter error: '
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityTerminalGetError',
    code: 60027,
    status: 500,
    defaultMessage: 'Cannot get terminal by id'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityTerminalUserUnauthorized',
    code: 60028,
    status: 401,
    defaultMessage: 'Cannot get terminal - use unauthorized',
    defaultResponse: 'User not authorized'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityTerminalsGetByAccountError',
    code: 60029,
    status: 500,
    defaultMessage: 'Cannot get terminals for account'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityTerminalsGetByAccountNotFound',
    code: 60030,
    status: 404,
    defaultMessage: 'Cannot get terminals for account - not found',
    defaultResponse: 'cant find terminals'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityTerminalsGetForUser',
    code: 60031,
    status: 500,
    defaultMessage: 'Cannot get terminals for user'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityTerminalCreate',
    code: 60032,
    status: 500,
    defaultMessage: 'Cannot create terminal'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityTerminalUpdate',
    code: 60033,
    status: 500,
    defaultMessage: 'Cannot update terminal'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityTerminalDisable',
    code: 60034,
    status: 500,
    defaultMessage: 'Cannot disable terminal'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityTerminalSetActive',
    code: 60035,
    status: 500,
    defaultMessage: 'Cannot set active state of terminal'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityPrivateAreaUnauthorized',
    code: 60036,
    status: 401,
    defaultMessage: 'Unauthorized for private area',
    defaultResponse: 'unauthorized'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityMerchantsPrivateAreaUnauthorized',
    code: 60037,
    status: 401,
    defaultMessage: 'Unauthorized for marchants private area',
    defaultResponse: 'unauthorized'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAdminAreaUnauthorized',
    code: 60038,
    status: 401,
    defaultMessage: 'Unauthorized for admin area',
    defaultResponse: 'unauthorized'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountSendContextError',
    code: 60039,
    status: 500,
    defaultMessage: 'Cannot get singleSendContext for account send'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountSendInvalidParams',
    code: 60040,
    status: 400,
    defaultMessage: 'Cannnot do account send - invalid params',
    defaultResponse: 'Invalid params'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountSendIsActive',
    code: 60041,
    status: 500,
    defaultMessage: 'Cannot get isActive for account send'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountSendInactivePayer',
    code: 60042,
    status: 400,
    defaultMessage: 'Cannot do account send - payer inactive',
    defaultResponse: 'payer account is not active'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountSendInactivePayee',
    code: 60043,
    status: 400,
    defaultMessage: 'Cannot do account send - payee inactive',
    defaultResponse: 'payee account is not active'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountSendIsOwner',
    code: 60044,
    status: 500,
    defaultMessage: 'Cannot get isOwner for account send'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountSendIsOwnerUnauthorized',
    code: 60045,
    status: 401,
    defaultMessage: 'Unauthorized user for account send',
    defaultMessage: 'User not authorized'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountCheckDepositStatus',
    code: 60046,
    status: 500,
    defaultMessage: 'Cannot do account send - deposit check failed'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountSendTransferBeforeFirstDeposit',
    code: 60047,
    status: 400,
    defaultMessage: 'Cannot do account send before first deposit',
    defaultResponse: 'cannot transfer p2p funds before first deposit'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountSendError',
    code: 60048,
    status: 500,
    defaultMessage: 'Cannot send to account'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountGetByOwnerNoBalance',
    code: 60049,
    status: 500,
    defaultMessage: 'Cannot get accounts by owner'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountGetByOwnerNoAccounts',
    code: 60050,
    status: 422,
    defaultMessage: 'Cannot get accounts by owner - no accounts',
    defaultResponse: 'No accounts found for this user'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountGetByOwnerNotFound',
    code: 60051,
    status: 404,
    defaultMessage: 'Cannot get accounts by owner - not found',
    defaultResponse: 'Account not found'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountBalance',
    code: 60052,
    status: 500,
    defaultMessage: 'Cannot get account balance'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAdminMoneyOutUnauthorized',
    code: 60053,
    status: 403,
    defaultMessage: 'Admin money out unauthorized - not office ip',
    defaultResponse: 'NOPE'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAdminMoneyOutMissingParams',
    code: 60054,
    status: 400,
    defaultMessage: 'Admin money out is missing params',
    defaultResponse: 'missing parameters'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAdminMoneyOutGetCurrencyError',
    code: 60055,
    status: 500,
    defaultMessage: 'Cannot get currency for admin money out'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAdminMoneyOutGetAccountError',
    code: 60056,
    status: 500,
    defaultMessage: 'Cannot get account for admin money out'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAdminMoneyError',
    code: 60057,
    status: 500,
    defaultMessage: 'Admin money out error'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountRefundGetPopulated',
    code: 60058,
    status: 500,
    defaultMessage: 'Cannot refund - getPopulated failed'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountRefundNotFound',
    code: 60059,
    status: 400,
    defaultMessage: 'Cannot refund - transaction not found',
    defaultResponse: 'cannot find transaction'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountRefundSend',
    code: 60060,
    status: 500,
    defaultMessage: 'Cannot refund - send failed'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountGetByOwnerPopulateRemote',
    code: 60061,
    status: 500,
    defaultMessage: 'Cannot get account by owner'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountGetByRemoteId',
    code: 60062,
    status: 500,
    defaultMessage: 'Cannot get account by remote id'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountGetByRemoteIdIsOwner',
    code: 60063,
    status: 500,
    defaultMessage: 'Cannot get account by remote id - isOwner failed'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountGetByRemoteIdUnauthorized',
    code: 60064,
    status: 401,
    defaultMessage: 'Cannot get account by remote id - unauthorized',
    defaultResponse: 'User not authorized'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountCreate',
    code: 60065,
    status: 500,
    defaultMessage: 'Cannot create account'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountAddCurrency',
    code: 60066,
    status: 500,
    defaultMessage: 'Cannot add currency to account'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountRemove',
    code: 60067,
    status: 500,
    defaultMessage: 'Cannot remove account'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountAddOwner',
    code: 60068,
    status: 500,
    defaultMessage: 'Cannot add owner to account'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountAddOwnersInvalidParams',
    code: 60069,
    status: 400,
    defaultMessage: 'Cannot add owners to account - invalid params',
    defaultResponse: 'Invalid params'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountAddOwners',
    code: 60070,
    status: 500,
    defaultMessage: 'Cannot add owners to account'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountRemoveOwner',
    code: 60071,
    status: 500,
    defaultMessage: 'Cannot remove owner from account'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountSetActive',
    code: 60072,
    status: 500,
    defaultMessage: 'Cannot set account active state'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountSetActiveAdmin',
    code: 60073,
    status: 500,
    defaultMessage: 'Cannot set account active state (admin)'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountUpdateMeta',
    code: 60074,
    status: 500,
    defaultMessage: 'Cannot update account meta'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountTxsStatsInvalidParams',
    code: 60075,
    status: 400,
    defaultMessage: 'Cannot get account txs stats - invalid params',
    defaultResponse: 'Params invalid'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountTxsStats',
    code: 60076,
    status: 500,
    defaultMessage: 'Cannot get account txs stats'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountTxsInvalidParams',
    code: 60077,
    status: 400,
    defaultMessage: 'Cannot get account txs - invalid params',
    defaultResponse: 'Params invalid'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountTxsGet',
    code: 60078,
    status: 500,
    defaultMessage: 'Cannot get account txs'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountTxsGetPaginated',
    code: 60079,
    status: 500,
    defaultMessage: 'Cannot get account txs paginated'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityTerminalPaymentList',
    code: 60080,
    status: 500,
    defaultMessage: 'Cannot get terminal payment list'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityTerminalPaymentListPaginated',
    code: 60081,
    status: 500,
    defaultMessage: 'Cannot get terminal payment list paginated'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityGetCommunitiesAccountByOwner',
    code: 60082,
    status: 500,
    defaultMessage: 'Cannot get communities - user accounts by owner failed'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityGetCommunitiesAccountByOwnerNoAccounts',
    code: 60083,
    status: 422,
    defaultMessage: 'Cannot get communities - no accounts',
    defaultResponse: 'Failed to retrieve user accounts'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityGetCommunities',
    code: 60084,
    status: 500,
    defaultMessage: 'Cannot get communities - getAccountsCommunities failed'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityCompleteCommunity',
    code: 60085,
    status: 500,
    defaultMessage: 'Cannot complete community'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityGetCommunity',
    code: 60086,
    status: 500,
    defaultMessage: 'Cannot get community by id'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityGetCommunityByAdmin',
    code: 60087,
    status: 500,
    defaultMessage: 'Cannot get community by admin'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityUpdateCommunitySettings',
    code: 60088,
    status: 500,
    defaultMessage: 'Cannot update community settings'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAddAdminsToCommunityInvalidParams',
    code: 60089,
    status: 400,
    defaultMessage: 'Cannot add admins to community - invalid params',
    defaultResponse: 'Invalid params'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAddAdminsToCommunity',
    code: 60090,
    status: 500,
    defaultMessage: 'Cannot add admins to community'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityRemoveAdminFromCommunity',
    code: 60091,
    status: 500,
    defaultMessage: 'Cannot remove admin from community'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityCreateCommunity',
    code: 60092,
    status: 500,
    defaultMessage: 'Cannot create community'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityPaymentList',
    code: 60093,
    status: 500,
    defaultMessage: 'Cannot get payment list'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityCreateCommunityAndCurrencyInvalidParams',
    code: 60094,
    status: 400,
    defaultMessage: 'Cannot create community and currency - invalid params',
    defaultResponse: 'Invalid community or currency data'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityCreateCommunity',
    code: 60095,
    status: 500,
    defaultMessage: 'Cannot create community'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityCreateCommunityCurrency',
    code: 60096,
    status: 500,
    defaultMessage: 'Cannot create community - currency create'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityGetCommunityAccountGetByAdmin',
    code: 60097,
    status: 500,
    defaultMessage: 'Cannot get community account - get by admin'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityGetCommunityAccountUnauthorized',
    code: 60098,
    status: 403,
    defaultMessage: 'Cannot get community account - unauthorized',
    defaultResponse: 'User not authorized to view community'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityGetCommunityAccountGetByRemoteId',
    code: 60099,
    status: 500,
    defaultMessage: 'Cannot get community account - get by remoteId'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityJoinIsOwner',
    code: 60100,
    status: 500,
    defaultMessage: 'Cannot join community - isOwner failed'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityJoinUnauthorized',
    code: 60101,
    status: 401,
    defaultMessage: 'Cannot join community - unauthorized',
    defaultResponse: 'User not authorized'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityGetMerchants',
    code: 60102,
    status: 500,
    defaultMessage: 'Cannot get community merchants'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityGetMerchantsPaginated',
    code: 60103,
    status: 500,
    defaultMessage: 'Cannot get community merchants paginated'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityGetMembers',
    code: 60104,
    status: 500,
    defaultMessage: 'Cannot get community members'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityGetMembersPaginated',
    code: 60105,
    status: 500,
    defaultMessage: 'Cannot get community members paginated'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityGetLocalEconomies',
    code: 60106,
    status: 500,
    defaultMessage: 'Cannot get local economies'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityGetLocalEconomiesPaginated',
    code: 60107,
    status: 500,
    defaultMessage: 'Cannot get local economies paginated'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityGetAllTransactions',
    code: 60108,
    status: 500,
    defaultMessage: 'Cannot get community all transactions'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityGetAllTransactionsPaginated',
    code: 60109,
    status: 500,
    defaultMessage: 'Cannot get community all transactions paginated'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountRefundIsAdmin',
    code: 60110,
    status: 500,
    defaultMessage: 'Cannot get community admin record'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountRefundIsOwner',
    code: 60111,
    status: 500,
    defaultMessage: 'Cannot determine account owner'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountRefundMultipleRecip',
    code: 60112,
    status: 400,
    defaultMessage: 'Transaction has multiple recipients cannot refund'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountRefundFind',
    code: 60113,
    status: 500,
    defaultMessage: 'Cannot search for transaction'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountRefundExists',
    code: 60114,
    status: 400,
    defaultMessage: 'Transaction already refunded'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'MerchantUpdateStateUnauthorized',
    code: 60115,
    status: 403,
    defaultMessage: 'Cannot change merchant state - unauthorized',
    defaultResponse: 'User not authorized to change merchant state'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'MerchantAccountUpdateStateUnauthorized',
    code: 60116,
    status: 403,
    defaultMessage: 'Cannot change merchant account state - unauthorized',
    defaultResponse: 'User not authorized to change merchant account state'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'MerchantDeletionUnauthorized',
    code: 60117,
    status: 403,
    defaultMessage: 'Cannot delete merchant - unauthorized',
    defaultResponse: 'User not authorized to delete merchant'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountRefundTxStateInvalid',
    code: 60118,
    status: 500,
    defaultMessage: 'Cannot refund - tx state invalid - send failed'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountSendIOBuild',
    code: 60119,
    status: 500,
    defaultMessage: 'Cannot build the types for i\\os of this transaction'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityAccountSendGetAccount',
    code: 60120,
    status: 500,
    defaultMessage: 'Cannot get account'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityPromotionCreate',
    code: 60121,
    status: 500,
    defaultMessage: 'Cannot create promotion'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityPromotionEdit',
    code: 60122,
    status: 500,
    defaultMessage: 'Cannot edit promotion'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityPromotionGetByMerchant',
    code: 60123,
    status: 500,
    defaultMessage: 'Cannot get promotions by merchant'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityPromotionGetByCommunity',
    code: 60124,
    status: 500,
    defaultMessage: 'Cannot get promotions by community'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityPromotionStop',
    code: 60125,
    status: 500,
    defaultMessage: 'Cannot stop promotion'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityPromotionMerchantHasActive',
    code: 60126,
    status: 500,
    defaultMessage: 'Cannot create promotion - merchant already has active/pending promotion'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityWidgetCreate',
    code: 60127,
    status: 500,
    defaultMessage: 'Cannot create widget'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityWidgetEdit',
    code: 60128,
    status: 500,
    defaultMessage: 'Cannot edit widget'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityWidgetGetByCommunity',
    code: 60129,
    status: 500,
    defaultMessage: 'Cannot get widgets by community'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityWidgetActivate',
    code: 60130,
    status: 500,
    defaultMessage: 'Cannot activate widget'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityWidgetAlreadyActive',
    code: 60131,
    status: 500,
    defaultMessage: 'Cannot activate widget - community already has an active widget'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityWidgetDeactivate',
    code: 60132,
    status: 500,
    defaultMessage: 'Cannot deactivate widget'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityUpdateColuUser',
    code: 60133,
    status: 500,
    defaultMessage: 'Cannot update colu user'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityInvalidateColuUserSessionTokens',
    code: 60134,
    status: 500,
    defaultMessage: 'Cannot invalidate colu user session tokens'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityBuildTransaction',
    code: 60135,
    status: 500,
    defaultMessage: 'Cannot build new transaction'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunitySubmitTransaction',
    code: 60136,
    status: 500,
    defaultMessage: 'Cannot submit transaction'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityTransactionById',
    code: 60137,
    status: 500,
    defaultMessage: 'Cannot get transaction by id'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityTransactionsList',
    code: 60138,
    status: 500,
    defaultMessage: 'Cannot get transactions'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityTransactionsListPaginated',
    code: 60139,
    status: 500,
    defaultMessage: 'Cannot get transactions paginated'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityTransactionOptions',
    code: 60140,
    status: 500,
    defaultMessage: 'Cannot get transaction options'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityMerchantUpdateTerminalPermissions',
    code: 60141,
    status: 500,
    defaultMessage: 'Cannot update terminal permissions'
  })
  /** ****************************************** Messages Errors ***********************/
  errors.create({
    behavior: 'OTHER',
    name: 'CommunityMessagesByOwnerPaginated',
    code: 70000,
    status: 500,
    defaultMessage: 'Cannot get messages by owner paginated'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityMessageMarkAsRead',
    code: 70001,
    status: 500,
    defaultMessage: 'Cannot mark as read'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityMessageById',
    code: 70002,
    status: 500,
    defaultMessage: 'Cannot get message by id'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityMessageByIdInvalidOwner',
    code: 70003,
    status: 500,
    defaultMessage: 'Cannot get message by id - invalid owner'
  })

  /** ****************************************** Referral Errors ***********************/
  errors.create({
    behavior: 'OTHER',
    name: 'CommunityReferralValidationError',
    code: 80000,
    status: 400,
    defaultMessage: 'Cannot create referral - validation error'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityReferralCreate',
    code: 80001,
    status: 500,
    defaultMessage: 'Cannot create referral'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityReferralGetByRefereePopulated',
    code: 80002,
    status: 500,
    defaultMessage: 'Cannot get referral by referee (populated)'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityReferralGetCommunityAccountByCurrency',
    code: 80003,
    status: 500,
    defaultMessage: 'Cannot get community account by currency'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityReferralSendBonus',
    code: 80004,
    status: 500,
    defaultMessage: 'Cannot send referral bonus'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityReferralRedeem',
    code: 80005,
    status: 500,
    defaultMessage: 'Cannot redeem referral'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityReferralGetCurrency',
    code: 80006,
    status: 500,
    defaultMessage: 'Cannot get currency for referral'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityReferralAlreadyRedeemed',
    code: 80007,
    status: 500,
    defaultMessage: 'already redeemed'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityReferralDisabledOnCummunity',
    code: 80008,
    status: 500,
    defaultMessage: 'disabled'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityReferralGetCurrencyByCommunity',
    code: 80009,
    status: 500,
    defaultMessage: 'Cannot get currency by community'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityReferralGetCommunity',
    code: 80010,
    status: 500,
    defaultMessage: 'Cannot get community for referral'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunitySendTransactionReport',
    code: 80011,
    status: 500,
    defaultMessage: 'could not send report'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityApiInvalidParams',
    code: 80020,
    status: 400,
    defaultMessage: 'Community API - Invalid params',
    defaultResponse: 'Invalid params'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'AccountStatsAddCampaignError',
    code: 80021,
    status: 500,
    defaultMessage: 'Account stats - failed to add campaign',
    defaultResponse: 'Invalid params'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'CommunityP2PDisabled',
    code: 80022,
    status: 400,
    defaultMessage: 'P2P transactions disabled',
    defaultResponse: 'P2P transactions disabled'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'AccountBalanceLimitExceeded',
    code: 80023,
    status: 400,
    defaultMessage: 'Balance limit exceeded',
    defaultResponse: 'Balance limit exceeded'
  })

  errors.create({
    behavior: 'OTHER',
    name: 'AccountBalaceActivityExceeded',
    code: 80024,
    status: 400,
    defaultMessage: 'Account BalaceActivity Exceeded',
    defaultResponse: 'Account BalaceActivity Exceeded'
  })
}
