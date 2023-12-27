import { defineComponent } from "vue";
import { atomic } from '@ktr/themes'

export const Box = defineComponent({
    name: 'Box',
    inheritAttrs: false,
    setup() {
    
        return () => <div class={atomic({
            display: 'flex',
            px:"12px"
        })}>232</div>
    }
})