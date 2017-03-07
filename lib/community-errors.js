module.exports = function (errors) {
  /******************************************** Community Errors ***********************/

  errors.create({
    name: 'CommunityGenericError',
    code: 60000,
    status: 500,
    defaultMessage: 'Generic error'
  })

  errors.create({
    name: 'CommunityBootstrapError',
    code: 60001,
    status: 500,
    defaultMessage: 'Bootstrap error'
  })

  errors.create({
    name: 'CommunityVersionNotSupported',
    code: 60002,
    status: 410,
    defaultMessage: 'Version not supported',
    defaultResponse: 'Gone'
  })

  errors.create({
    name: 'CommunityUserManegmentError',
    code: 60003,
    status: 500,
    defaultMessage: 'Cannot get user by token from user management',
    defaultResponse: 'User management error'
  })

  errors.create({
    name: 'CommunityMerchantByRemoteIdNotFound',
    code: 60004,
    status: 403,
    defaultMessage: 'Cannot find merchant by remoteId'
  })

  errors.create({
    name: 'CommunityMerchantByOwnerNotFound',
    code: 60005,
    defaultMessage: 'Cannot find merchant by owner'
  })

  errors.create({
    name: 'CommunityColuUserNotFound',
    code: 60006,
    status: 432,
    defaultMessage: 'Cannot find user in usermanagement admin proxy',
    defaultResponse: 'User _ID_ not found'
  })

  errors.create({
    name: 'CommunityUploadImageError',
    code: 60007,
    status: 500,
    defaultMessage: 'Cannot upload image',
    defaultResponse: 'Could not upload file'
  })

  errors.create({
    name: 'CommunityUploadImageFormatNotSupported',
    code: 60008,
    status: 400,
    defaultMessage: 'Cannot upload image - format not supported',
    defaultResponse: 'Image format not supported, please use png gif or jpeg'
  })

  errors.create({
    name: 'CommunityUploadImageSizeTooBig',
    code: 60009,
    status: 400,
    defaultMessage: 'Cannot upload image - size too big',
    defaultResponse: 'Image size too big, please use an image under 50KB'
  })

  errors.create({
    name: 'CommunityGetCurrencyError',
    code: 60010,
    status: 500,
    defaultMessage: 'Cannot get currency'
  })

  errors.create({
    name: 'CommunityCurrencyNotFoundError',
    code: 60011,
    status: 400,
    defaultMessage: 'Cannot get currency - not found',
    defaultResponse: 'currency not found'
  })

  errors.create({
    name: 'CommunityMerchantCreate',
    code: 60012,
    status: 500,
    defaultMessage: 'Cannot create merchant'
  })

  errors.create({
    name: 'CommunityMerchantCreateAsAdmin',
    code: 60013,
    status: 500,
    defaultMessage: 'Cannot create merchant as admin'
  })

  errors.create({
    name: 'CommunityAccountByRemoteIdNotFound',
    code: 60014,
    status: 400,
    defaultMessage: 'Cannot find account by remoteId'
  })

  errors.create({
    name: 'CommunityMerchantNotFound',
    code: 60015,
    status: 404,
    defaultMessage: 'Cannot find merchant',
    defaultResponse: 'merchant not found'
  })

  errors.create({
    name: 'CommunityMerchantCreateColuUser',
    code: 60016,
    status: 500,
    defaultMessage: 'Cannot create colu user for merchant'
  })

  errors.create({
    name: 'CommunityMerchantSwitchAccountOwner',
    code: 60017,
    status: 400,
    defaultMessage: 'Cannot switch account owner for merchant',
    defaultResponse: 'failed to switchAccountOwner'
  })

  errors.create({
    name: 'CommunityMerchantUpdateMeta',
    code: 60018,
    status: 400,
    defaultMessage: 'Cannot update meta for merchant',
    defaultResponse: 'failed to updateMeta'
  })

  errors.create({
    name: 'CommunityMerchantSwitchTerminalUser',
    code: 60019,
    status: 400,
    defaultMessage: 'Cannot switch terminal user for merchant',
    defaultResponse: 'failed to switchTerminalUser'
  })

  errors.create({
    name: 'CommunityMerchantAddTerminalUser',
    code: 60020,
    status: 400,
    defaultMessage: 'Cannot add terminal user for merchant',
    defaultResponse: 'failed to addTerminalUsers'
  })

  errors.create({
    name: 'CommunityMerchantUpdateData',
    code: 60021,
    status: 500,
    defaultMessage: 'Cannot update merchant data',
    defaultResponse: 'failed to update merchant'
  })

  errors.create({
    name: 'CommunityPaymentGetById',
    code: 60022,
    status: 500,
    defaultMessage: 'Cannot get payment by id'
  })

  errors.create({
    name: 'CommunityPaymentCreate',
    code: 60023,
    status: 500,
    defaultMessage: 'Cannot create payment'
  })

  errors.create({
    name: 'CommunityPaymentGetByAccount',
    code: 60024,
    status: 500,
    defaultMessage: 'Cannot get payment by account'
  })

  errors.create({
    name: 'CommunityPaymentGetByAccountInvalidParams',
    code: 60025,
    status: 400,
    defaultMessage: 'Cannot get payment by account - invalid params',
    defaultResponse: 'Invalid params'
  })

  errors.create({
    name: 'CommunityFilterEncoderParseError',
    code: 60026,
    status: 400,
    defaultMessage: 'Filter encoder parse error',
    defaultResponse: 'Filter error: '
  })

  errors.create({
    name: 'CommunityTerminalGetError',
    code: 60027,
    status: 500,
    defaultMessage: 'Cannot get terminal by id'
  })

  errors.create({
    name: 'CommunityTerminalUserUnauthorized',
    code: 60028,
    status: 401,
    defaultMessage: 'Cannot get terminal - use unauthorized',
    defaultResponse: 'User not authorized'
  })

  errors.create({
    name: 'CommunityTerminalsGetByAccountError',
    code: 60029,
    status: 500,
    defaultMessage: 'Cannot get terminals for account'
  })

  errors.create({
    name: 'CommunityTerminalsGetByAccountNotFound',
    code: 60030,
    status: 404,
    defaultMessage: 'Cannot get terminals for account - not found',
    defaultResponse: 'cant find terminals'
  })

  errors.create({
    name: 'CommunityTerminalsGetForUser',
    code: 60031,
    status: 500,
    defaultMessage: 'Cannot get terminals for user'
  })

  errors.create({
    name: 'CommunityTerminalCreate',
    code: 60032,
    status: 500,
    defaultMessage: 'Cannot create terminal'
  })

  errors.create({
    name: 'CommunityTerminalUpdate',
    code: 60033,
    status: 500,
    defaultMessage: 'Cannot update terminal'
  })

  errors.create({
    name: 'CommunityTerminalDisable',
    code: 60034,
    status: 500,
    defaultMessage: 'Cannot disable terminal'
  })

  errors.create({
    name: 'CommunityTerminalSetActive',
    code: 60035,
    status: 500,
    defaultMessage: 'Cannot set active state of terminal'
  })

  errors.create({
    name: 'CommunityPrivateAreaUnauthorized',
    code: 60036,
    status: 401,
    defaultMessage: 'Unauthorized for private area',
    defaultResponse: 'unauthorized'
  })

  errors.create({
    name: 'CommunityMerchantsPrivateAreaUnauthorized',
    code: 60037,
    status: 401,
    defaultMessage: 'Unauthorized for marchants private area',
    defaultResponse: 'unauthorized'
  })

  errors.create({
    name: 'CommunityAdminAreaUnauthorized',
    code: 60038,
    status: 401,
    defaultMessage: 'Unauthorized for admin area',
    defaultResponse: 'unauthorized'
  })

  errors.create({
    name: 'CommunityAccountSendContextError',
    code: 60039,
    status: 500,
    defaultMessage: 'Cannot get singleSendContext for account send'
  })

  errors.create({
    name: 'CommunityAccountSendInvalidParams',
    code: 60040,
    status: 400,
    defaultMessage: 'Cannnot do account send - invalid params',
    defaultResponse: 'Invalid params'
  })

  errors.create({
    name: 'CommunityAccountSendIsActive',
    code: 60041,
    status: 500,
    defaultMessage: 'Cannot get isActive for account send'
  })

  errors.create({
    name: 'CommunityAccountSendInactivePayer',
    code: 60042,
    status: 400,
    defaultMessage: 'Cannot do account send - payer inactive',
    defaultResponse: 'payer account is not active'
  })

   errors.create({
    name: 'CommunityAccountSendInactivePayee',
    code: 60043,
    status: 400,
    defaultMessage: 'Cannot do account send - payee inactive',
    defaultResponse: 'payee account is not active'
  })

   errors.create({
    name: 'CommunityAccountSendIsOwner',
    code: 60044,
    status: 500,
    defaultMessage: 'Cannot get isOwner for account send'
   })

   errors.create({
    name: 'CommunityAccountSendIsOwnerUnauthorized',
    code: 60045,
    status: 401,
    defaultMessage: 'Unauthorized user for account send',
    defaultMessage: 'User not authorized'
   })

   errors.create({
    name: 'CommunityAccountCheckDepositStatus',
    code: 60046,
    status: 500,
    defaultMessage: 'Cannot do account send - deposit check failed'
   })

   errors.create({
    name: 'CommunityAccountSendTransferBeforeFirstDeposit',
    code: 60047,
    status: 400,
    defaultMessage: 'Cannot do account send before first deposit',
    defaultResponse: 'cannot transfer p2p funds before first deposit'
   })

   errors.create({
    name: 'CommunityAccountSendError',
    code: 60048,
    status: 500,
    defaultMessage: 'Cannot send to account'
   })

   errors.create({
    name: 'CommunityAccountGetByOwnerNoBalance',
    code: 60049,
    status: 500,
    defaultMessage: 'Cannot get accounts by owner'
   })

   errors.create({
    name: 'CommunityAccountGetByOwnerNoAccounts',
    code: 60050,
    status: 422,
    defaultMessage: 'Cannot get accounts by owner - no accounts',
    defaultResponse: 'No accounts found for this user'
   })

   errors.create({
    name: 'CommunityAccountGetByOwnerNotFound',
    code: 60051,
    status: 404,
    defaultMessage: 'Cannot get accounts by owner - not found',
    defaultResponse: 'Account not found'
   })

   errors.create({
    name: 'CommunityAccountBalance',
    code: 60052,
    status: 500,
    defaultMessage: 'Cannot get account balance'
   })

   errors.create({
    name: 'CommunityAdminMoneyOutUnauthorized',
    code: 60053,
    status: 403,
    defaultMessage: 'Admin money out unauthorized - not office ip',
    defaultResponse: 'NOPE'
   })

   errors.create({
    name: 'CommunityAdminMoneyOutMissingParams',
    code: 60054,
    status: 400,
    defaultMessage: 'Admin money out is missing params',
    defaultResponse: 'missing parameters'
   })

   errors.create({
    name: 'CommunityAdminMoneyOutGetCurrencyError',
    code: 60055,
    status: 500,
    defaultMessage: 'Cannot get currency for admin money out'
   })

   errors.create({
    name: 'CommunityAdminMoneyOutGetAccountError',
    code: 60056,
    status: 500,
    defaultMessage: 'Cannot get account for admin money out'
   })

   errors.create({
    name: 'CommunityAdminMoneyError',
    code: 60057,
    status: 500,
    defaultMessage: 'Admin money out error'
   })

   errors.create({
    name: 'CommunityAccountRefundGetPopulated',
    code: 60058,
    status: 500,
    defaultMessage: 'Cannot refund - getPopulated failed'
   })

   errors.create({
    name: 'CommunityAccountRefundNotFound',
    code: 60059,
    status: 400,
    defaultMessage: 'Cannot refund - transaction not found',
    defaultResponse: 'cannot find transaction'
   })

   errors.create({
    name: 'CommunityAccountRefundSend',
    code: 60060,
    status: 500,
    defaultMessage: 'Cannot refund - send failed'
   })

   errors.create({
    name: 'CommunityAccountGetByOwnerPopulateRemote',
    code: 60061,
    status: 500,
    defaultMessage: 'Cannot get account by owner'
   })

   errors.create({
    name: 'CommunityAccountGetByRemoteId',
    code: 60062,
    status: 500,
    defaultMessage: 'Cannot get account by remote id'
   })

   errors.create({
    name: 'CommunityAccountGetByRemoteIdIsOwner',
    code: 60063,
    status: 500,
    defaultMessage: 'Cannot get account by remote id - isOwner failed'
   })

   errors.create({
    name: 'CommunityAccountGetByRemoteIdUnauthorized',
    code: 60064,
    status: 401,
    defaultMessage: 'Cannot get account by remote id - unauthorized',
    defaultResponse: 'User not authorized'
   })

   errors.create({
    name: 'CommunityAccountCreate',
    code: 60065,
    status: 500,
    defaultMessage: 'Cannot create account'
   })

   errors.create({
    name: 'CommunityAccountAddCurrency',
    code: 60066,
    status: 500,
    defaultMessage: 'Cannot add currency to account'
   })

   errors.create({
    name: 'CommunityAccountRemove',
    code: 60067,
    status: 500,
    defaultMessage: 'Cannot remove account'
   })

   errors.create({
    name: 'CommunityAccountAddOwner',
    code: 60068,
    status: 500,
    defaultMessage: 'Cannot add owner to account'
   })

   errors.create({
    name: 'CommunityAccountAddOwnersInvalidParams',
    code: 60069,
    status: 400,
    defaultMessage: 'Cannot add owners to account - invalid params',
    defaultResponse: 'Invalid params'
   })

   errors.create({
    name: 'CommunityAccountAddOwners',
    code: 60070,
    status: 500,
    defaultMessage: 'Cannot add owners to account'
   })

   errors.create({
    name: 'CommunityAccountRemoveOwner',
    code: 60071,
    status: 500,
    defaultMessage: 'Cannot remove owner from account'
   })

   errors.create({
    name: 'CommunityAccountSetActive',
    code: 60072,
    status: 500,
    defaultMessage: 'Cannot set account active state'
   })

   errors.create({
    name: 'CommunityAccountSetActiveAdmin',
    code: 60073,
    status: 500,
    defaultMessage: 'Cannot set account active state (admin)'
   })

   errors.create({
    name: 'CommunityAccountUpdateMeta',
    code: 60074,
    status: 500,
    defaultMessage: 'Cannot update account meta'
   })

   errors.create({
    name: 'CommunityAccountTxsStatsInvalidParams',
    code: 60075,
    status: 400,
    defaultMessage: 'Cannot get account txs stats - invalid params',
    defaultResponse: 'Params invalid'
   })

   errors.create({
    name: 'CommunityAccountTxsStats',
    code: 60076,
    status: 500,
    defaultMessage: 'Cannot get account txs stats'
   })

   errors.create({
    name: 'CommunityAccountTxsInvalidParams',
    code: 60077,
    status: 400,
    defaultMessage: 'Cannot get account txs - invalid params',
    defaultResponse: 'Params invalid'
   })

   errors.create({
    name: 'CommunityAccountTxsGet',
    code: 60078,
    status: 500,
    defaultMessage: 'Cannot get account txs'
   })

   errors.create({
    name: 'CommunityAccountTxsGetPaginated',
    code: 60079,
    status: 500,
    defaultMessage: 'Cannot get account txs paginated'
   })

   errors.create({
    name: 'CommunityTerminalPaymentList',
    code: 60080,
    status: 500,
    defaultMessage: 'Cannot get terminal payment list'
   })

   errors.create({
    name: 'CommunityTerminalPaymentListPaginated',
    code: 60081,
    status: 500,
    defaultMessage: 'Cannot get terminal payment list paginated'
   })

   errors.create({
    name: 'CommunityGetCommunitiesAccountByOwner',
    code: 60082,
    status: 500,
    defaultMessage: 'Cannot get communities - user accounts by owner failed'
   })

   errors.create({
    name: 'CommunityGetCommunitiesAccountByOwnerNoAccounts',
    code: 60083,
    status: 422,
    defaultMessage: 'Cannot get communities - no accounts',
    defaultResponse: 'Failed to retrieve user accounts'
   })

   errors.create({
    name: 'CommunityGetCommunities',
    code: 60084,
    status: 500,
    defaultMessage: 'Cannot get communities - getAccountsCommunities failed'
   })

   errors.create({
    name: 'CommunityCompleteCommunity',
    code: 60085,
    status: 500,
    defaultMessage: 'Cannot complete community'
   })

   errors.create({
    name: 'CommunityGetCommunity',
    code: 60086,
    status: 500,
    defaultMessage: 'Cannot get community by id'
   })

   errors.create({
    name: 'CommunityGetCommunityByAdmin',
    code: 60087,
    status: 500,
    defaultMessage: 'Cannot get community by admin'
   })

   errors.create({
    name: 'CommunityUpdateCommunitySettings',
    code: 60088,
    status: 500,
    defaultMessage: 'Cannot update community settings'
   })

   errors.create({
    name: 'CommunityAddAdminsToCommunityInvalidParams',
    code: 60089,
    status: 400,
    defaultMessage: 'Cannot add admins to community - invalid params',
    defaultResponse: 'Invalid params'
   })

   errors.create({
    name: 'CommunityAddAdminsToCommunity',
    code: 60090,
    status: 500,
    defaultMessage: 'Cannot add admins to community'
   })

   errors.create({
    name: 'CommunityRemoveAdminFromCommunity',
    code: 60091,
    status: 500,
    defaultMessage: 'Cannot remove admin from community'
   })

   errors.create({
    name: 'CommunityCreateCommunity',
    code: 60092,
    status: 500,
    defaultMessage: 'Cannot create community'
   })

   errors.create({
    name: 'CommunityPaymentList',
    code: 60093,
    status: 500,
    defaultMessage: 'Cannot get payment list'
   })

   errors.create({
    name: 'CommunityCreateCommunityAndCurrencyInvalidParams',
    code: 60094,
    status: 400,
    defaultMessage: 'Cannot create community and currency - invalid params',
    defaultResponse: 'Invalid community or currency data'
   })

   errors.create({
    name: 'CommunityCreateCommunity',
    code: 60095,
    status: 500,
    defaultMessage: 'Cannot create community'
   })

   errors.create({
    name: 'CommunityCreateCommunityCurrency',
    code: 60096,
    status: 500,
    defaultMessage: 'Cannot create community - currency create'
   })

   errors.create({
    name: 'CommunityGetCommunityAccountGetByAdmin',
    code: 60097,
    status: 500,
    defaultMessage: 'Cannot get community account - get by admin'
   })

   errors.create({
    name: 'CommunityGetCommunityAccountUnauthorized',
    code: 60098,
    status: 403,
    defaultMessage: 'Cannot get community account - unauthorized',
    defaultResponse: 'User not authorized to view community'
   })

   errors.create({
    name: 'CommunityGetCommunityAccountGetByRemoteId',
    code: 60099,
    status: 500,
    defaultMessage: 'Cannot get community account - get by remoteId'
   })

   errors.create({
    name: 'CommunityJoinIsOwner',
    code: 60100,
    status: 500,
    defaultMessage: 'Cannot join community - isOwner failed'
   })

   errors.create({
    name: 'CommunityJoinUnauthorized',
    code: 60101,
    status: 401,
    defaultMessage: 'Cannot join community - unauthorized',
    defaultResponse: 'User not authorized'
   })

   errors.create({
    name: 'CommunityGetMerchants',
    code: 60102,
    status: 500,
    defaultMessage: 'Cannot get community merchants'
   })

   errors.create({
    name: 'CommunityGetMerchantsPaginated',
    code: 60103,
    status: 500,
    defaultMessage: 'Cannot get community merchants paginated'
   })

   errors.create({
    name: 'CommunityGetMembers',
    code: 60104,
    status: 500,
    defaultMessage: 'Cannot get community members'
   })

   errors.create({
    name: 'CommunityGetMembersPaginated',
    code: 60105,
    status: 500,
    defaultMessage: 'Cannot get community members paginated'
   })

   errors.create({
    name: 'CommunityGetLocalEconomies',
    code: 60106,
    status: 500,
    defaultMessage: 'Cannot get local economies'
   })

   errors.create({
    name: 'CommunityGetLocalEconomiesPaginated',
    code: 60107,
    status: 500,
    defaultMessage: 'Cannot get local economies paginated'
   })

   errors.create({
    name: 'CommunityGetAllTransactions',
    code: 60108,
    status: 500,
    defaultMessage: 'Cannot get community all transactions'
   })

   errors.create({
    name: 'CommunityGetAllTransactionsPaginated',
    code: 60109,
    status: 500,
    defaultMessage: 'Cannot get community all transactions paginated'
   })

  /******************************************** Community DB Errors ***********************/

  errors.create({
    name: 'GeneralGetAccountFailed',
    code: 70001,
    status: 500,
    defaultMessage: 'Failed to retrieve account'
  })
}