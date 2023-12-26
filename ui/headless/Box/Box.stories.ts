import type { Meta, StoryObj } from '@storybook/vue3'

import { Box } from './Box'

const meta = {
	title: 'Box',
	component: Box,
	tags: ['autodocs'],
	argTypes: {},
	args: {},
} satisfies Meta<typeof Box>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {},
}
