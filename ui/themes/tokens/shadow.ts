export const shadows = {
	// 直接铺陈在页面上方的元素 (card等)
	base: '',

	// 向左滑动时出现在右侧边缘的阴影 (dataTable固定右侧列向左滑动)
	slideLeft: '',

	// 	向右滑动时出现在左侧边缘的阴影 (dataTable固定左侧列向右滑动)
	slideRight: '',

	// 有连接点的弹出(覆盖)层 (DatePicker Cascader Select TagsInput Pagination的下拉菜单等)
	connectedOverlay: '',
} as const
