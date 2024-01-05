export default function (this: any, ...indices: number[]): number {
	this.check(...indices)

	const { data, shape } = this
	const { length } = shape
	let index: number = indices[length - 1]

	let i: number
	let j: number
	for (i = 0; i < length - 1; i += 1) {
		let p: number = 1
		for (j = i + 1; j < length; j += 1) {
			p *= shape[j]
		}

		index += indices[i] * p
	}

	return data[index]
}
