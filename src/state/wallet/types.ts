import { CurrencyAmount, Token } from '@amblade/patswap-sdk'

type TokenAddress = string

export type TokenBalancesMap = Record<TokenAddress, CurrencyAmount<Token>>
