import { SignatureProviderRequestEnvelope } from 'arisen-signature-provider-interface'

import { TransactionInfo } from 'rix/Transaction'

export default interface DappRequest {
  transactionInfo?: TransactionInfo
  requestEnvelope: SignatureProviderRequestEnvelope
  requestError?: string
  newRequest?: boolean
}
