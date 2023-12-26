export const durations = {
	/**
	 * @description 动效时长参数，常用于提示类小型元素出现消失，状态变化等场景
	 */
	'100': '100ms',

	/**
	 * @description 动效时长参数，常用于常规元素出现消失，状态变化等场景
	 */
	'200': '200ms',

	/**
	 * @description 动效时长参数，常用于大型元素出现消失，状态变化等场景
	 */
	'300': '300ms',
} as const

export const timingFunctions = {
	/**
	 * @description 线性动效曲线，常用于背景遮罩层出现消失的场景
	 */
	linear: 'cubic-bezier(0, 0, 1, 1)',

	/**
	 * @description 默认
	 */
	inSmooth: 'cubic-bezier(0.645, 0.045, 0.355, 1)',

	/**
	 * @description 元素离场动效曲线, 常用于元素消失的场景
	 */
	in: 'cubic-bezier(0.5, 0, 0.84, 0.25)',

	/**
	 * @description 元素入场动效曲线, 常用于元素出现的场景
	 */
	out: 'cubic-bezier(0.16, 0.75, 0.5, 1)',

	/**
	 * @description 元素转场动效曲线，常用于内容切换场景
	 */
	inOut: 'cubic-bezier(0.5, 0.05, 0.5, 0.95)',

	/**
	 * @description 元素转场动效曲线，常用于悬浮，高亮等状态切换场景
	 */
	inOutSmooth: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
} as const
