import * as animation from './animation'
import * as border from './border'
import * as cursor from './cursor'
import * as opacity from './opacity'
import * as shadows from './shadows'
import * as spacing from './spacing'
import * as typography from './typography'
import * as zIndex from './zIndex'

export const baseTokens = {
	...animation,
	...border,
	...cursor,
	...opacity,
	...shadows,
	...spacing,
	...typography,
	...zIndex,
}

export const colorTokens = {
	
}

export type BaseTokens = typeof baseTokens
