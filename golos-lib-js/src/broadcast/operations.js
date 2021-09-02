module.exports = [
  {
    "roles": ["posting"],
    "operation": "vote",
    "params": [
      "voter",
      "author",
      "permlink",
      "weight"
    ]
  },
  {
    "roles": ["posting"],
    "operation": "comment",
    "params": [
      "parent_author",
      "parent_permlink",
      "author",
      "permlink",
      "title",
      "body",
      "json_metadata"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "transfer",
    "params": [
      "from",
      "to",
      "amount",
      "memo"
    ]
  },
  {
    "roles": ["active"],
    "operation": "transfer_to_vesting",
    "params": [
      "from",
      "to",
      "amount"
    ]
  },
  {
    "roles": ["active"],
    "operation": "withdraw_vesting",
    "params": [
      "account",
      "vesting_shares"
    ]
  },
  {
    "roles": ["active"],
    "operation": "limit_order_create",
    "params": [
      "owner",
      "orderid",
      "amount_to_sell",
      "min_to_receive",
      "fill_or_kill",
      "expiration"
    ]
  },
  {
    "roles": ["active"],
    "operation": "limit_order_cancel",
    "params": [
      "owner",
      "orderid"
    ]
  },
  {
    "roles": ["active"],
    "operation": "price",
    "params": [
      "base",
      "quote"
    ]
  },
  {
    "roles": ["active"],
    "operation": "feed_publish",
    "params": [
      "publisher",
      "exchange_rate"
    ]
  },
  {
    "roles": ["active"],
    "operation": "convert",
    "params": [
      "owner",
      "requestid",
      "amount"
    ]
  },
  {
    "roles": ["active"],
    "operation": "account_create",
    "params": [
      "fee",
      "creator",
      "new_account_name",
      "owner",
      "active",
      "posting",
      "memo_key",
      "json_metadata"
    ]
  },
  {
    "roles": ["owner", "active"],
    "operation": "account_update",
    "params": [
      "account",
      "owner",
      "active",
      "posting",
      "memo_key",
      "json_metadata"
    ]
  },
  {
    "roles": ["active"],
    "operation": "witness_update",
    "params": [
      "owner",
      "url",
      "block_signing_key",
      "props",
      "fee"
    ]
  },
  {
    "roles": ["posting"],
    "operation": "account_witness_vote",
    "params": [
      "account",
      "witness",
      "approve"
    ]
  },
  {
    "roles": ["posting"],
    "operation": "account_witness_proxy",
    "params": [
      "account",
      "proxy"
    ]
  },
  {
    "roles": ["active"],
    "operation": "pow",
    "params": [
      "worker",
      "input",
      "signature",
      "work"
    ]
  },
  {
    "roles": ["active"],
    "operation": "custom",
    "params": [
      "required_auths",
      "id",
      "data"
    ]
  },
  {
    "roles": ["posting"],
    "operation": "delete_comment",
    "params": [
      "author",
      "permlink"
    ]
  },
  {
    "roles": ["posting", "active"],
    "operation": "custom_json",
    "params": [
      "required_auths",
      "required_posting_auths",
      "id",
      "json"
    ]
  },
  {
    "roles": ["posting"],
    "operation": "comment_options",
    "params": [
      "author",
      "permlink",
      "max_accepted_payout",
      "percent_steem_dollars",
      "allow_votes",
      "allow_curation_rewards",
      "extensions"
    ]
  },
  {
    "roles": ["active"],
    "operation": "set_withdraw_vesting_route",
    "params": [
      "from_account",
      "to_account",
      "percent",
      "auto_vest"
    ]
  },
  {
    "roles": ["active"],
    "operation": "limit_order_create2",
    "params": [
      "owner",
      "orderid",
      "amount_to_sell",
      "exchange_rate",
      "fill_or_kill",
      "expiration"
    ]
  },
  {
    "roles": ["posting"],
    "operation": "challenge_authority",
    "params": [
      "challenger",
      "challenged",
      "require_owner"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "prove_authority",
    "params": [
      "challenged",
      "require_owner"
    ]
  },
  {
    "roles": ["active"],
    "operation": "request_account_recovery",
    "params": [
      "recovery_account",
      "account_to_recover",
      "new_owner_authority",
      "extensions"
    ]
  },
  {
    "roles": ["owner"],
    "operation": "recover_account",
    "params": [
      "account_to_recover",
      "new_owner_authority",
      "recent_owner_authority",
      "extensions"
    ]
  },
  {
    "roles": ["owner"],
    "operation": "change_recovery_account",
    "params": [
      "account_to_recover",
      "new_recovery_account",
      "extensions"
    ]
  },
  {
    "roles": ["active"],
    "operation": "escrow_transfer",
    "params": [
      "from",
      "to",
      "agent",
      "escrow_id",
      "sbd_amount",
      "steem_amount",
      "fee",
      "ratification_deadline",
      "escrow_expiration",
      "json_meta"
    ]
  },
  {
    "roles": ["active"],
    "operation": "escrow_dispute",
    "params": [
      "from",
      "to",
      "agent",
      "who",
      "escrow_id"
    ]
  },
  {
    "roles": ["active"],
    "operation": "escrow_release",
    "params": [
      "from",
      "to",
      "agent",
      "who",
      "receiver",
      "escrow_id",
      "sbd_amount",
      "steem_amount"
    ]
  },
  {
    "roles": ["active"],
    "operation": "pow2",
    "params": [
      "input",
      "pow_summary"
    ]
  },
  {
    "roles": ["active"],
    "operation": "escrow_approve",
    "params": [
      "from",
      "to",
      "agent",
      "who",
      "escrow_id",
      "approve"
    ]
  },
  {
    "roles": ["active"],
    "operation": "transfer_to_savings",
    "params": [
      "from",
      "to",
      "amount",
      "memo"
    ]
  },
  {
    "roles": ["active"],
    "operation": "transfer_from_savings",
    "params": [
      "from",
      "request_id",
      "to",
      "amount",
      "memo"
    ]
  },
  {
    "roles": ["active"],
    "operation": "cancel_transfer_from_savings",
    "params": [
      "from",
      "request_id"
    ]
  },
  {
    "roles": ["posting", "active", "owner"],
    "operation": "custom_binary",
    "params": [
      "id",
      "data"
    ]
  },
  {
    "roles": ["owner"],
    "operation": "decline_voting_rights",
    "params": [
      "account",
      "decline"
    ]
  },
  {
    "roles": ["active"],
    "operation": "reset_account",
    "params": [
      "reset_account",
      "account_to_reset",
      "new_owner_authority"
    ]
  },
  {
    "roles": ["owner", "posting"],
    "operation": "set_reset_account",
    "params": [
      "account",
      "current_reset_account",
      "reset_account"
    ]
  },
  {
    "roles": ["posting"],
    "operation": "claim_reward_balance",
    "params": [
      "account",
      "reward_steem",
      "reward_sbd",
      "reward_vests"
    ]
  },
  {
    "roles": ["active"],
    "operation": "fill_convert_request",
    "params": [
      "owner",
      "requestid",
      "amount_in",
      "amount_out"
    ]
  },
  {
    "roles": ["posting"],
    "operation": "comment_reward",
    "params": [
      "author",
      "permlink",
      "payout"
    ]
  },
  {
    "roles": ["active"],
    "operation": "liquidity_reward",
    "params": [
      "owner",
      "payout"
    ]
  },
  {
    "roles": ["active"],
    "operation": "interest",
    "params": [
      "owner",
      "interest"
    ]
  },
  {
    "roles": ["active"],
    "operation": "fill_vesting_withdraw",
    "params": [
      "from_account",
      "to_account",
      "withdrawn",
      "deposited"
    ]
  },
  {
    "roles": ["posting"],
    "operation": "fill_order",
    "params": [
      "current_owner",
      "current_orderid",
      "current_pays",
      "current_trade_fee",
      "current_trade_fee_receiver",
      "open_owner",
      "open_orderid",
      "open_pays",
      "open_trade_fee",
      "open_trade_fee_receiver"
    ]
  },
  {
    "roles": ["posting"],
    "operation": "fill_transfer_from_savings",
    "params": [
      "from",
      "to",
      "amount",
      "request_id",
      "memo"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "delegate_vesting_shares",
    "params": [
      "delegator",
      "delegatee",
      "vesting_shares"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "account_create_with_delegation",
    "params": [
      "fee",
      "delegation",
      "creator",
      "new_account_name",
      "owner",
      "active",
      "posting",
      "memo_key",
      "json_metadata",
      "extensions"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "account_create_with_invite",
    "params": [
      "invite_secret",
      "creator",
      "new_account_name",
      "owner",
      "active",
      "posting",
      "memo_key",
      "json_metadata",
      "extensions"
    ]
  },
  {
    "roles": ["posting"],
    "operation": "account_metadata",
    "params": [
      "account",
      "json_metadata"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "proposal_create",
    "params": [
      "author",
      "title",
      "memo",
      "expiration_time",
      "proposed_operations",
      "review_period_time",
      "extensions"
    ]
  },
  {
    "roles": ["posting", "active", "owner"],
    "operation": "proposal_update",
    "params": [
      "author",
      "title",
      "active_approvals_to_add",
      "active_approvals_to_remove",
      "owner_approvals_to_add",
      "owner_approvals_to_remove",
      "posting_approvals_to_add",
      "posting_approvals_to_remove",
      "key_approvals_to_add",
      "key_approvals_to_remove",
      "extensions"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "proposal_delete",
    "params": [
      "author",
      "title",
      "requester",
      "extensions"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "chain_properties_update",
    "params": [
      "owner",
      "props"
    ]
  },
  {
    "roles": ["active"],
    "operation": "break_free_referral",
    "params": [
      "referral",
      "extensions"
    ]
  },
  {
    "roles": ["active"],
    "operation": "delegate_vesting_shares_with_interest",
    "params": [
      "delegator",
      "delegatee",
      "vesting_shares",
      "interest_rate",
      "extensions"
    ]
  },
  {
    "roles": ["active"],
    "operation": "reject_vesting_shares_delegation",
    "params": [
      "delegator",
      "delegatee",
      "extensions"
    ]
  },
  {
    "roles": ["posting"],
    "operation": "worker_request",
    "params": [
      "author",
      "permlink",
      "worker",
      "required_amount_min",
      "required_amount_max",
      "vest_reward",
      "duration",
      "extensions"
    ]
  },
  {
    "roles": ["posting"],
    "operation": "worker_request_delete",
    "params": [
      "author",
      "permlink",
      "extensions"
    ]
  },
  {
    "roles": ["posting"],
    "operation": "worker_request_vote",
    "params": [
      "voter",
      "author",
      "permlink",
      "vote_percent",
      "extensions"
    ]
  },
  {
    "roles": ["posting"],
    "operation": "claim",
    "params": [
      "from",
      "to",
      "amount",
      "to_vesting",
      "extensions"
    ]
  },
  {
    "roles": ["posting"],
    "operation": "donate",
    "params": [
      "from",
      "to",
      "amount",
      "memo",
      "extensions"
    ]
  },
  {
    "roles": ["active"],
    "operation": "transfer_to_tip",
    "params": [
      "from",
      "to",
      "amount",
      "memo",
      "extensions"
    ]
  },
  {
    "roles": ["active"],
    "operation": "transfer_from_tip",
    "params": [
      "from",
      "to",
      "amount",
      "memo",
      "extensions"
    ]
  },
  {
    "roles": ["active"],
    "operation": "invite",
    "params": [
      "creator",
      "balance",
      "invite_key",
      "extensions"
    ]
  },
  {
    "roles": ["active"],
    "operation": "invite_claim",
    "params": [
      "initiator",
      "receiver",
      "invite_secret",
      "extensions"
    ]
  },
  {
    "roles": ["active"],
    "operation": "asset_create",
    "params": [
      "creator",
      "max_supply",
      "allow_fee",
      "allow_override_transfer",
      "json_metadata",
      "extensions"
    ]
  },
  {
    "roles": ["active"],
    "operation": "asset_update",
    "params": [
      "creator",
      "symbol",
      "symbols_whitelist",
      "fee_percent",
      "json_metadata",
      "extensions"
    ]
  },
  {
    "roles": ["active"],
    "operation": "asset_issue",
    "params": [
      "creator",
      "amount",
      "to",
      "extensions"
    ]
  },
  {
    "roles": ["active"],
    "operation": "asset_transfer",
    "params": [
      "creator",
      "symbol",
      "new_owner",
      "extensions"
    ]
  },
  {
    "roles": ["active"],
    "operation": "override_transfer",
    "params": [
      "creator",
      "from",
      "to",
      "amount",
      "memo",
      "extensions"
    ]
  },
  {
    "roles": ["active"],
    "operation": "invite_donate",
    "params": [
      "from",
      "invite_key",
      "amount",
      "memo",
      "extensions"
    ]
  },
  {
    "roles": ["active"],
    "operation": "invite_transfer",
    "params": [
      "from",
      "to",
      "amount",
      "memo",
      "extensions"
    ]
  },
  {
    "roles": ["active"],
    "operation": "limit_order_cancel_ex",
    "params": [
      "owner",
      "orderid",
      "extensions"
    ]
  },
]

