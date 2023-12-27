import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'
import { vars } from './var.css'

const unconditionalProperties = defineProperties({
	properties: {},
	shorthands: {},
})

const responsiveProperties = defineProperties({
	properties: {
		borderBottomWidth: vars.borderWidth,
		borderTopWidth: vars.borderWidth,
		borderLeftWidth: vars.borderWidth,
		borderRightWidth: vars.borderWidth,
		borderStyle: vars.borderStyle,
	},
	shorthands: {
		boderX: ['borderLeftWidth', 'borderRightWidth'],
		boderY: ['borderTopWidth', 'borderBottomWidth'],
		borderWidth: ['borderBottomWidth', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth'],
		borderLeftRadius: [],
		borderRightRadius: [],
		borderTopRadius: [],
		borderBottomRadius: [],
		marginX: [],
		marginY: [],
		margin: [],
		paddingX: [],
		paddingY: [],
	},
})

const colorProperties = defineProperties({
	properties: {},
	shorthands: {},
})

export const atomic = createSprinkles(
	responsiveProperties,
	unconditionalProperties,
	colorProperties,
)
