import { NDArray } from '../core'

declare global {
	interface Window {
		nd: typeof NDArray
	}

	type Flatten<T extends any[]> = T extends []
		? []
		: T extends [infer F, ...infer R]
			? F extends any[]
				? [...Flatten<F>, ...Flatten<R>]
				: [F, ...Flatten<R>]
			: [T]

	type FixedArray<T, D extends number> = Array<T> & {
		length: D
	}

	type NestedArrays<T> = Array<T | NestedArrays<T>>
}
