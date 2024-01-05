import { describe, test, expect } from 'vitest'

const person = {
	isActive: true,
	age: 32,
}

describe(`(v) array`, () => {
	test('should work as expected', () => {
		expect(person).toBeDefined()
	})
})
