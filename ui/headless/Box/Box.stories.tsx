import type { Meta, StoryObj } from '@storybook/vue3'

import { Box } from './Box'

const meta = {
	title: 'Layout/Box',
	component: Box,
	tags: ['autodocs'],
} satisfies Meta<typeof Box>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {},
	render: () => ({
		setup() {
			return () => <Box p-4 />;
		},
	}),
}

