import type { TypedArray, TypedArrayConstructor } from '../types'

import { TypedArrayEnum } from '../enums'

export const isTyped = <T extends TypedArray>(data: any): data is T =>
	ArrayBuffer.isView(data) && !(data instanceof DataView)

export const getTyped = (dtype: TypedArrayEnum): TypedArrayConstructor => {
	switch (dtype) {
		case 'int8':
			return Int8Array
		case 'uint8':
			return Uint8Array
		case 'int16':
			return Int16Array
		case 'uint16':
			return Uint16Array
		case 'int32':
			return Int32Array
		case 'uint32':
			return Uint32Array
		case 'uint8c':
			return Uint8ClampedArray
		case 'float32':
			return Float32Array
		case 'float64':
			return Float64Array
		default:
			return Float64Array
	}
}

export const getDType = (
	data: TypedArray | NestedArray<number>,
): TypedArrayEnum => {
	switch (Object.prototype.toString.call(data)) {
		case `[object Int8Array]`:
			return TypedArrayEnum.INT8
		case `[object Uint8Array]`:
			return TypedArrayEnum.UINT8
		case `[object Int16Array]`:
			return TypedArrayEnum.INT16
		case `[object Uint16Array]`:
			return TypedArrayEnum.UINT16
		case `[object Int32Array]`:
			return TypedArrayEnum.INT32
		case `[object Uint32Array]`:
			return TypedArrayEnum.UINT32
		case `[object Uint8ClampedArray]`:
			return TypedArrayEnum.UINT8C
		case `[object Float32Array]`:
			return TypedArrayEnum.FLOAT32
		case `[object Float64Array]`:
			return TypedArrayEnum.FLOAT64
		default:
			return TypedArrayEnum.FLOAT64
	}
}

export const flatten = (data: NestedArray<number>): number[] =>
	data.reduce<number[]>(
		(acc: number[], next: NestedArray<number> | number) =>
			acc.concat(Array.isArray(next) ? flatten(next) : next),
		[],
	)

export const getShape = (data: TypedArray | NestedArray<number>): number[] =>
	Array.isArray(data) || isTyped(data)
		? [data.length].concat(
				getShape(data[0] as TypedArray | NestedArray<number>),
			)
		: []

export const getSize = (shape: number[]): number =>
	shape.reduce((a: number, b: number): number => a * b, 1)
