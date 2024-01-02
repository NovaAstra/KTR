export enum Breakpoint {
	XXS = 'xxs',
	XS = 'xs',
	SM = 'sm',
	MD = 'md',
	LG = 'lg',
	XL = 'xl',
}

export const breakpointNames = [
	Breakpoint.XXS,
	Breakpoint.XS,
	Breakpoint.SM,
	Breakpoint.MD,
	Breakpoint.LG,
	Breakpoint.XL,
] as const

export const breakpoints = {
	[Breakpoint.XXS]: 0,
	[Breakpoint.XS]: 520,
	[Breakpoint.SM]: 768,
	[Breakpoint.MD]: 1024,
	[Breakpoint.LG]: 1280,
	[Breakpoint.XL]: 1640,
} as const
