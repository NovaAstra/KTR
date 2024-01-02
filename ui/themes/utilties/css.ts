import { REM_BASE_SIZE } from './constant'

export const pixelToRem = (px: number) => `${px / REM_BASE_SIZE}rem`

export const pixel = (value: number | string) => `${value}px`

export const msec = (value: number | string) => `${value}ms`

export const string = (value: number | string) => String(value)

export const number = (value: number | string) => Number(value)
