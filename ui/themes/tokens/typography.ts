import { pixelToRem } from '../utilties/css'

export const fontFamily = {
	text: `-apple-system, BlinkMacSystemFont, 'Segoe UI (Custom)', Roboto, 'Helvetica Neue', 'Open Sans (Custom)', system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'`,
	code: `'Menlo', 'Consolas (Custom)', 'Bitstream Vera Sans Mono', monospace, 'Apple Color Emoji', 'Segoe UI Emoji'`,
	emphasis: `'Times New Roman', 'Times', serif`,
	quote: `'Times New Roman', 'Times', serif`,
} as const

export const fontWeight = {
	light: '300',
	regular: '400',
	medium: '500',
	bold: '700',
} as const

export const fontSize = {
	'1': pixelToRem(12),
	'2': pixelToRem(14),
	'3': pixelToRem(16),
	'4': pixelToRem(18),
	'5': pixelToRem(20),
	'6': pixelToRem(24),
	'7': pixelToRem(28),
	'8': pixelToRem(35),
	'9': pixelToRem(60),
} as const

export const letterSpacing = {
	'1': '0.0025em',
	'2': '0em',
	'3': '0em',
	'4': '-0.0025em',
	'5': '-0.005em',
	'6': '-0.00625em',
	'7': '-0.0075em',
	'8': '-0.01em',
	'9': '-0.025em',
} as const

export const lineHeight = {
	'1': pixelToRem(16),
	'2': pixelToRem(20),
	'3': pixelToRem(24),
	'4': pixelToRem(26),
	'5': pixelToRem(28),
	'6': pixelToRem(30),
	'7': pixelToRem(36),
	'8': pixelToRem(40),
	'9': pixelToRem(60),
} as const
