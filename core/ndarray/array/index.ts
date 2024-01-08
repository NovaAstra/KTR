import type { TypedArray } from '../types'

import { NDArray } from '../core'

export const array = (data: TypedArray | NDArray | NestedArray<number>) =>
	new NDArray(data)
