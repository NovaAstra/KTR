import { describe, expect, it } from 'vitest'

import { array } from '.'

describe(`(nd) array`, () => {
	it(`should work as expected`, () => {
		const x = array([0, 0, 0])

		expect(x).toEqual(array([0, 0, 0]))
	})

	it(`should work as expected in two dimensions`, () => {
		const x = array([0, 0])

		expect(x).toEqual(array([0, 0]))
	})

	it(`should work as expected in TypedArray`, () => {
		const x = array(new Float32Array(4))

		expect(x).toEqual(array(new Float32Array(4)))
	})

	it(`should work as expected in TypedArray`, () => {
		const x = array([[1, 2], [3]])

		expect(x).toEqual(array([[1, 2], [3]]))
	})
})
