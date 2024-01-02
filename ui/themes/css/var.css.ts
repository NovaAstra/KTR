import { createGlobalThemeContract, createGlobalTheme } from '@vanilla-extract/css'
import { getScopeName } from '../utilties/scope'
import { tokens } from '../tokens'

export const vars = createGlobalThemeContract(tokens, getScopeName)
createGlobalTheme(':root', vars, tokens)

