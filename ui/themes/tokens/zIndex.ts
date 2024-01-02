import { string } from '../utilties/css'

export const zIndex = {
	deepdive: string(9999),
	default: string(1),
	dialog: string(6000),
	docked: string(4),
	dropdown: string(7000),
	modal: string(9000),
	overlay: string(8000),
	popup: string(5000),
	reminder: string(8500),
	spinner: string(9050),
	sticky: string(100),
	toast: string(10000),
} as const
