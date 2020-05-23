import { Abi } from '@arisencore/js/dist/rixjs-rpc-interfaces'

const ARISEN_ASSERT_ACCOUNT = 'arisen.assert'
const ARISEN_ASSERT_ACTION = 'require'

export interface TransactionInfo {
  actions: Action[]
}

export interface Action {
  account: string
  name: string
  authorization: PermissionLevel[]
  data: any
}

export interface PermissionLevel {
  actor: string
  permission: string
}

export interface AbiInfo {
  abi: Abi
  accountName: string
}

export const isAssertRequireAction = (action: Action) => {
  return action.account === ARISEN_ASSERT_ACCOUNT && action.name === ARISEN_ASSERT_ACTION
}
