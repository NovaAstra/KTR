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

	type FixedArray<T = unknown, D extends number> = T[] & {
		length: D
	}

	type NestedArray<T> = T[] | NestedArray<T>[];
}
