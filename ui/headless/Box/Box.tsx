import { defineComponent } from 'vue'
import { atomic } from '@ktr/themes'

export const Box = defineComponent({
	name: 'Box',
	inheritAttrs: false,
	setup() {
		return () => (
			<div
				class={atomic({
					borderWidth: '1'
				})}
			>
				232
			</div>
		)
	},
})
