import { describe, expect, it } from 'vitest'

import { getShape } from '.'

describe(`(utilties) getShape`, () => {
	it(`should work as expected`, () => {
		const x: number[] = [1, 2, 3]
		const y: number[][] = [[1], [2], [3]]
		const z: number[][][] = [[[1]], [[2]], [[3]]]

		expect(getShape(x)).toStrictEqual([3])
		expect(getShape(y)).toStrictEqual([3, 1])
		expect(getShape(z)).toStrictEqual([3, 1, 1])
	})
})
