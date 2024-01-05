import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
	{
		test: {
			include: ['core/**/*.{test,spec}.{ts,tsx}'],
			name: 'node',
			environment: 'node',
		},
	},
])
