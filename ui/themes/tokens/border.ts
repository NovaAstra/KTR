import { pixelToRem } from '../utilties/css'

export const borderStyle = {
	none: 'none',
	solid: 'solid',
} as const

export const borderRadius = {
	extraSmall: pixelToRem(3),
	small: pixelToRem(3),
	medium: pixelToRem(6),
	large: pixelToRem(12),
	circle: '50%',
	full: pixelToRem(9999),
} as const
