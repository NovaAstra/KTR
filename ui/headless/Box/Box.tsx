import { defineComponent } from 'vue';
import { atomic } from '@ktr/themes'

export const Box = defineComponent({
    name: 'Box',
    inheritAttrs: false,
    setup() {
        console.log(atomic.properties)
        return () => <div>232</div>
    }
})