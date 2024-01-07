import type { TypedArray } from '../types'

import { NDArray } from '../core'

export const array = (data: TypedArray | NestedArray<number>) =>
	new NDArray(data)
