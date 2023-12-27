export const animationDuration = {
	/**
	 * @description Animation duration parameter, often used in scenarios
	 * such as prompting small elements to disappear,
	 * state change, etc.
	 */
	fast: '100ms',

	/**
	 * @description Animation duration parameter, commonly used in scenarios
	 * such as regular elements appearing and disappearing,
	 * state changes, etc.
	 */
	base: '200ms',

	/**
	 * @description Animation duration parameter, often used in scenarios
	 * such as the disappearance of large elements,
	 * state changes, etc.
	 */
	slow: '300ms',
} as const

export const animationEasingFunction = {
	/**
	 * @description Linear motion curve, often used in scenes where the
	 * background mask layer disappears.
	 */
	linear: 'cubic-bezier(0, 0, 1, 1)',

	/**
	 * @description Default.
	 */
	inSmooth: 'cubic-bezier(0.645, 0.045, 0.355, 1)',

	/**
	 * @description Element departure animation curve, often used in scenarios
	 * where elements disappear.
	 */
	in: 'cubic-bezier(0.5, 0, 0.84, 0.25)',

	/**
	 * @description Element entry animation curve, often used in scenes
	 * where elements appear.
	 */
	out: 'cubic-bezier(0.16, 0.75, 0.5, 1)',

	/**
	 * @description Element transition animation curve, often used in
	 * content switching scenes.
	 */
	inOut: 'cubic-bezier(0.5, 0.05, 0.5, 0.95)',

	/**
	 * @description Element transition animation curve, often used in
	 * suspension, highlighting and other state switching scenes.
	 */
	inOutSmooth: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
} as const
