import type { TypedArray, TypedArrayConstructor } from '../types'

import { TypedArrayEnum } from '../enums'

export const is_typed_array = <T = TypedArray>(value: any): value is T =>
	ArrayBuffer.isView(value) && !(value instanceof DataView)

export const get_shape = (value: any): number[] =>
	Array.isArray(value) || is_typed_array(value) ? [value.length, ...get_shape(value[0])] : []

export const get_array_type = (value: TypedArray): TypedArrayEnum => {
	const { constructor: { name = 'Float32Array' } = {} } = value || {}

	switch (name) {
		case 'Int8Array':
			return TypedArrayEnum.INT8
		case 'Int16Array':
			return TypedArrayEnum.INT16
		case 'Int32Array':
			return TypedArrayEnum.INT32
		case 'Uint8Array':
			return TypedArrayEnum.UINT8
		case 'Uint16Array':
			return TypedArrayEnum.UINT16
		case 'Uint32Array':
			return TypedArrayEnum.UINT32
		case 'Uint8ClampedArray':
			return TypedArrayEnum.UINT8C
		case 'Float32Array':
			return TypedArrayEnum.FLOAT32
		case 'Float64Array':
			return TypedArrayEnum.FLOAT64
		default:
			return TypedArrayEnum.FLOAT64
	}
}

export const get_typed_array = (value: TypedArrayEnum): TypedArrayConstructor => {
	switch (value) {
		case TypedArrayEnum.INT8:
			return Int8Array
		case TypedArrayEnum.INT16:
			return Int16Array
		case TypedArrayEnum.INT32:
			return Int32Array
		case TypedArrayEnum.UINT8:
			return Uint8Array
		case TypedArrayEnum.UINT16:
			return Uint16Array
		case TypedArrayEnum.UINT32:
			return Uint32Array
		case TypedArrayEnum.UINT8C:
			return Uint8ClampedArray
		case TypedArrayEnum.FLOAT32:
			return Float32Array
		case TypedArrayEnum.FLOAT64:
			return Float64Array
		default:
			return Float64Array
	}
}
