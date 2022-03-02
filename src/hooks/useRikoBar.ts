import { Currency, CurrencyAmount, Token } from '@amblade/patswap-sdk'

import { useCallback } from 'react'
import { useRikoBarContract } from './useContract'
import { useTransactionAdder } from '../state/transactions/hooks'

const useRikoBar = () => {
  const addTransaction = useTransactionAdder()
  const rikoBarContract = useRikoBarContract()

  const enter = useCallback(
    async (amount: CurrencyAmount<Token> | undefined) => {
      if (amount?.quotient) {
        try {
          const tx = await rikoBarContract?.enter(amount?.quotient.toString())
          return addTransaction(tx, { summary: 'Enter RikoBar' })
        } catch (e) {
          return e
        }
      }
    },
    [addTransaction, rikoBarContract]
  )

  const leave = useCallback(
    async (amount: CurrencyAmount<Token> | undefined) => {
      if (amount?.quotient) {
        try {
          const tx = await rikoBarContract?.leave(amount?.quotient.toString())
          return addTransaction(tx, { summary: 'Leave RikoBar' })
        } catch (e) {
          return e
        }
      }
    },
    [addTransaction, rikoBarContract]
  )

  return { enter, leave }
}

export default useRikoBar
