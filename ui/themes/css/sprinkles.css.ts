import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'

const colors = {
	'blue-50': '#eff6ff',
	'blue-100': '#dbeafe',
	'blue-200': '#bfdbfe',
	'gray-700': '#374151',
	'gray-800': '#1f2937',
	'gray-900': '#111827',
}

const colorProperties = defineProperties({
	conditions: {
		lightMode: {},
		darkMode: { '@media': '(prefers-color-scheme: dark)' },
	},
	defaultCondition: 'lightMode',
	properties: {
		color: colors,
		background: colors,
	},
})

export const atomic = createSprinkles(colorProperties)
