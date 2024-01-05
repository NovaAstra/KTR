import { describe, expect, test } from 'vitest'

import { TypedArrayEnum } from '../enums'
import { get_typed_array, get_array_type } from '.'

describe(`(utilties) is get_array_type`, () => {
	test('should work as expected', () => {
		expect(get_array_type(new Int8Array())).toStrictEqual(TypedArrayEnum.INT8)
		expect(get_array_type(new Int16Array())).toStrictEqual(TypedArrayEnum.INT16)
		expect(get_array_type(new Int32Array())).toStrictEqual(TypedArrayEnum.INT32)
		expect(get_array_type(new Uint8Array())).toStrictEqual(TypedArrayEnum.UINT8)
		expect(get_array_type(new Uint16Array())).toStrictEqual(TypedArrayEnum.UINT16)
		expect(get_array_type(new Uint32Array())).toStrictEqual(TypedArrayEnum.UINT32)
		expect(get_array_type(new Uint8ClampedArray())).toStrictEqual(TypedArrayEnum.UINT8C)
		expect(get_array_type(new Float32Array())).toStrictEqual(TypedArrayEnum.FLOAT32)
		expect(get_array_type(new Float64Array())).toStrictEqual(TypedArrayEnum.FLOAT64)
	})
})

describe(`(utilties) is get_typed_array`, () => {
	test('should work as expected', () => {
		expect(get_typed_array(TypedArrayEnum.INT8)).toStrictEqual(Int8Array)
		expect(get_typed_array(TypedArrayEnum.INT16)).toStrictEqual(Int16Array)
		expect(get_typed_array(TypedArrayEnum.INT32)).toStrictEqual(Int32Array)
		expect(get_typed_array(TypedArrayEnum.UINT8)).toStrictEqual(Uint8Array)
		expect(get_typed_array(TypedArrayEnum.UINT16)).toStrictEqual(Uint16Array)
		expect(get_typed_array(TypedArrayEnum.UINT32)).toStrictEqual(Uint32Array)
		expect(get_typed_array(TypedArrayEnum.UINT8C)).toStrictEqual(Uint8ClampedArray)
		expect(get_typed_array(TypedArrayEnum.FLOAT32)).toStrictEqual(Float32Array)
		expect(get_typed_array(TypedArrayEnum.FLOAT64)).toStrictEqual(Float64Array)
	})
})
