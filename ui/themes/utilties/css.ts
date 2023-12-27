import { REM_BASE_SIZE } from './constant'

export const pixelToRem = (px: number) => `${px / REM_BASE_SIZE}rem`
