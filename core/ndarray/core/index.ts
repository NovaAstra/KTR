import type { TypedArray, INDArrayOptions, INDArray } from '../types'

import { TypedArrayEnum } from '../enums'
import {
	getDType,
	isTyped,
	getTyped,
	flatten,
	getShape,
	getSize,
} from '../utilties'

export class NDArray implements INDArray {
	public data: TypedArray = new Float64Array(64)

	public dtype: TypedArrayEnum = TypedArrayEnum.FLOAT64

	public shape: number[] = [0]

	public size: number = 0

	public constructor(
		data?: TypedArray | NDArray | NestedArray<number>,
		options?: INDArrayOptions,
	) {
		if (!data) return

		if (data instanceof NDArray) return data

		const { dtype, shape, size } = options ?? {}

		this.dtype = dtype ?? getDType(data)
		this.shape = shape ?? getShape(data)
		this.data = isTyped(data) ? data : new (getTyped(this.dtype))(flatten(data))
		this.size = size ?? getSize(this.shape)
	}
}
