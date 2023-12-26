export function getScopeName(value: string | null, path: Array<string>): string {
	return path.join('-')
}
