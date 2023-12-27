export function getScopeName(_value: string | null, path: Array<string>): string {
	return path.join('-').replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}
