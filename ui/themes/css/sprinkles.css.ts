import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'

const unconditionalProperties = defineProperties({
	properties: {},
})

const responsiveProperties = defineProperties({
	properties: {
		paddingLeft: ['12px'],
		paddingRight: ['12px'],
		display: ['block', 'flex', 'inline-flex', 'grid', 'inline-block', 'none', 'contents'],
	},
	shorthands: {
		fixed: ['display'],
		px: ['paddingLeft', 'paddingRight'],
	},
})

const colorProperties = defineProperties({
	properties: {},
})

export const atomic = createSprinkles(
	responsiveProperties,
	unconditionalProperties,
	colorProperties,
)
