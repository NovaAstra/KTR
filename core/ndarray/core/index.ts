import type { TypedArray, INDArray, DTypeLike } from '../types'

import { TypedArrayEnum } from '../enums'
import { getDType, isTypedArray, getTypedArray, getShape } from '../utilties'

export class NDArray implements INDArray {
	public data: TypedArray = new Float64Array(0)

	public dtype: DTypeLike = TypedArrayEnum.FLOAT64

	public shape: number[] = [0]

	public strides: number[] = [0]

	public size: number = 0

	public ndim: number = 0

	public itemsize: number = 0

	public nbytes: number = 0

	public constructor(data: any, dtype?: DTypeLike, shape?: number[]) {
		if (!data) return

		if (data instanceof NDArray) return data

		this.dtype = dtype ?? getDType(data)
		this.shape = shape ?? getShape(data)
		this.data = isTypedArray(data)
			? data
			: new (getTypedArray(this.dtype))(data)
	}
}

