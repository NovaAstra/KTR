import { createGlobalThemeContract, createGlobalTheme } from '@vanilla-extract/css'
import { getScopeName } from '../utilties/scope'
import { baseTokens } from '../tokens'

const baseVars = createGlobalThemeContract(baseTokens, getScopeName)
createGlobalTheme(':root', baseVars, baseTokens)

export const vars = baseVars