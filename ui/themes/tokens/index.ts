import * as animation from './animation'
import * as border from './border'
import * as space from './space'
import * as typography from './typography'
import * as zIndex from './zIndex'
import * as cursor from './cursor'

export const baseTokens = {
	...animation,
	...border,
	...space,
	...typography,
	...zIndex,
	...cursor,
}

export const tokens = {
	...baseTokens,
}

export type BaseTokens = typeof baseTokens
export type Tokens = typeof tokens
