export const durations = {
	'100': '100ms',
	'200': '200ms',
	'300': '300ms',
} as const

export const timingFunctions = {
	linear: 'cubic-bezier(0, 0, 1, 1)',
	inSmooth: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
	in: 'cubic-bezier(0.5, 0, 0.84, 0.25)',
	out: 'cubic-bezier(0.16, 0.75, 0.5, 1)',
	inOut: 'cubic-bezier(0.5, 0.05, 0.5, 0.95)',
	inOutSmooth: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
} as const
