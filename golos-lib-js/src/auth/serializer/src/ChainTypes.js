var ChainTypes;

module.exports = ChainTypes = {};

ChainTypes.reserved_spaces = {
  relative_protocol_ids: 0,
  protocol_ids: 1,
  implementation_ids: 2
};

ChainTypes.operations = {
  vote: 0,
  comment: 1,
  transfer: 2,
  transfer_to_vesting: 3,
  withdraw_vesting: 4,
  limit_order_create: 5,
  limit_order_cancel: 6,
  feed_publish: 7,
  convert: 8,
  account_create: 9,
  account_update: 10,
  witness_update: 11,
  account_witness_vote: 12,
  account_witness_proxy: 13,
  pow: 14,
  custom: 15,
  report_over_production: 16,
  delete_comment: 17,
  custom_json: 18,
  comment_options: 19,
  set_withdraw_vesting_route: 20,
  limit_order_create2: 21,
  challenge_authority: 22,
  prove_authority: 23,
  request_account_recovery: 24,
  recover_account: 25,
  change_recovery_account: 26,
  escrow_transfer: 27,
  escrow_dispute: 28,
  escrow_release: 29,
  pow2: 30,
  escrow_approve: 31,
  transfer_to_savings: 32,
  transfer_from_savings: 33,
  cancel_transfer_from_savings: 34,
  custom_binary: 35,
  decline_voting_rights: 36,
  reset_account: 37,
  set_reset_account: 38,
  delegate_vesting_shares: 39,
  account_create_with_delegation: 40,
  account_metadata: 41,
  proposal_create: 42,
  proposal_update: 43,
  proposal_delete: 44,
  chain_properties_update: 45,
  break_free_referral: 46,
  delegate_vesting_shares_with_interest: 47,
  reject_vesting_shares_delegation: 48,
  transit_to_cyberway: 49,
  worker_request: 50,
  worker_request_delete: 51,
  worker_request_vote: 52,
  claim: 53,
  donate: 54,
  transfer_to_tip: 55,
  transfer_from_tip: 56,
  invite: 57,
  invite_claim: 58,
  account_create_with_invite: 59,
  asset_create: 60,
  asset_update: 61,
  asset_issue: 62,
  asset_transfer: 63,
  override_transfer: 64,
  invite_donate: 65,
  invite_transfer: 66,
  limit_order_cancel_ex: 67,
  account_setup: 68,
  paid_subscription_create: 69,
  paid_subscription_update: 70,
  paid_subscription_delete: 71,
  paid_subscription_transfer: 72,
  paid_subscription_cancel: 73,
  nft_collection: 74,
  nft_collection_delete: 75,
  nft_issue: 76,
  nft_transfer: 77,
  nft_sell: 78,
  nft_buy: 79,
  nft_cancel_order: 80,
  nft_auction: 81,

  fill_convert_request: 82,
  author_reward: 83,
  curation_reward: 84,
  comment_reward: 85,
  liquidity_reward: 86,
  interest: 87,
  fill_vesting_withdraw: 88,
  fill_order: 80,
  shutdown_witness: 90,
  fill_transfer_from_savings: 91,
  hardfork: 92,
  comment_payout_update: 93,
  comment_benefactor_reward: 94,
  return_vesting_delegation: 95,
  producer_reward: 96,
  delegation_reward: 97,
  auction_window_reward: 98,
};

//types.hpp
ChainTypes.object_type = {
  "null": 0,
  base: 1
};
