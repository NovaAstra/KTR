import * as space from './space'
import * as typography from './typography'
import * as border from './border'

export const baseTokens = {
	...space,
	...typography,
	...border,
}

export const tokens = {
	...baseTokens,
}

export type BaseTokens = typeof baseTokens
export type Tokens = typeof tokens
