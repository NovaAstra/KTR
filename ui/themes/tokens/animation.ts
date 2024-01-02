export const animationDuration = {
	immediately: '50ms',
	instantly: '0ms',
	paused: '320ms',
	promptly: '200ms',
	quickly: '100ms',
	slowly: '400ms',
} as const

export const animationFunction = {
	linear: 'cubic-bezier(0, 0, 1, 1)',
	easeInSmooth: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
	easeIn: 'cubic-bezier(0.5, 0, 0.84, 0.25)',
	easeOut: 'cubic-bezier(0.16, 0.75, 0.5, 1)',
	easeInOut: 'cubic-bezier(0.5, 0.05, 0.5, 0.95)',
	easeInOutSmooth: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
} as const
