import { pixelToRem, pixel } from '../utilties/css'

export const borderStyle = {} as const

export const borderWidth = {
	small: pixel(1),
	medium: pixel(1.5),
	large: pixel(2),
} as const

export const borderRadius = {
	small: pixelToRem(3),
	medium: pixelToRem(6),
	large: pixelToRem(12),
	full: pixelToRem(9999),
} as const
