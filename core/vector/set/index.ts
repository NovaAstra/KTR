/**
 * @function set
 * @description Sets the element at `i, j, ..., n` to `value`
 * @param {Number[]} ...indices
 * @param {Number} value
 * @returns {this}
 */
export default function (this: any, ...args: number[]): void {
	const indices: number[] = args.slice(0, -1)
	const value: number = args[args.length - 1]

	this.check(...indices)

	const { shape } = this

	let index: number = indices[indices.length - 1]

	let i: number
	for (i = 0; i < indices.length - 1; i += 1) {
		index += indices[i] * shape[i + 1]
	}

	this.data[index] = value
}
