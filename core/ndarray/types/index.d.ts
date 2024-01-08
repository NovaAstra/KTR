import { TypedArrayEnum } from '../enums'

export type TypedArray =
	| Uint8Array
	| Uint8ClampedArray
	| Uint16Array
	| Uint32Array
	| Int8Array
	| Int16Array
	| Int32Array
	| BigUint64Array
	| BigInt64Array
	| Float32Array
	| Float64Array

export type TypedArrayConstructor =
	| Uint8ArrayConstructor
	| Uint8ClampedArrayConstructor
	| Uint16ArrayConstructor
	| Uint32ArrayConstructor
	| Int8ArrayConstructor
	| Int16ArrayConstructor
	| Int32ArrayConstructor
	| BigUint64ArrayConstructor
	| BigInt64ArrayConstructor
	| Float32ArrayConstructor
	| Float64ArrayConstructor

export type DTypeLike = TypedArrayEnum

export interface INDArray {
	data: TypedArray
	dtype: DTypeLike
	shape: number[]
	strides: number[]
	size: number
	ndim: number
	itemsize: number
	nbytes: number
}
