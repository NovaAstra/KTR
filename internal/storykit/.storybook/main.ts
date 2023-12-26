import type { StorybookConfig } from '@storybook/vue3-vite'
import type { InlineConfig } from 'vite'

import { mergeConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Jsx from '@vitejs/plugin-vue-jsx'
import { vanillaExtractPlugin as Vanilla } from '@vanilla-extract/vite-plugin'

const config: StorybookConfig = {
	stories: ['../../../**/*.stories.@(ts|tsx|vue|mdx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
	],
	framework: {
		name: '@storybook/vue3-vite',
		options: {},
	},
	viteFinal: (config: InlineConfig) => {
		const plugins = [Vue(), Jsx(), Vanilla()]

		return mergeConfig(config, {
			plugins,
		})
	},
	docs: {
		autodocs: 'tag',
	},
}
export default config
