import { globalStyle } from '@vanilla-extract/css'

globalStyle('#root', {
	isolation: 'isolate',
})

globalStyle('html, body', {
	margin: 0,
})
