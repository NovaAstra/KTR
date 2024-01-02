import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'

const unconditionalProperties = defineProperties({
	properties: {},
	shorthands: {},
})

const responsiveProperties = defineProperties({
	properties: {},
	shorthands: {},
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
