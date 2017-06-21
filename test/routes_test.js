
export default function createRoutes() {
	return [
		{
			// 火会员首页
			path: '/home',
			name: 'home',
			getComponents: (nextState, callback) => {
				require.ensure(['./views/home'], (require) => {
					callback(null, require('./views/home').default)
				})
			}
		},
		{
			// 成长体系
			path: '/growth',
			name: 'growth',
			getComponents: (nextState, callback) => {
				require.ensure(['./views/growth'], (require) => {
					callback(null, require('./views/growth').default)
				})
			}
		},
		{
			// 成就
			path: '/achieve',
			name: 'achieve',
			getComponents: (nextState, callback) => {
				require.ensure(['./views/achieve'], (require) => {
					callback(null, require('./views/achieve').default)
				})
			}
		},
		{
			// 成就详情
			path: '/achieve/detail',
			name: 'achieve',
			getComponents: (nextState, callback) => {
				require.ensure(['./views/detail'], (require) => {
					callback(null, require('./views/detail').default)
				})
			}
		},
		{
			// 排行榜
			path: '/rank',
			name: 'rank',
			getComponents: (nextState, callback) => {
				require.ensure(['./views/rank'], (require) => {
					callback(null, require('./views/rank').default)
				})
			}
		},
		{
			// 排行比较
			path: '/rank/compare',
			name: 'compare',
			getComponents: (nextState, callback) => {
				require.ensure(['./views/compare'], (require) => {
					callback(null, require('./views/compare').default)
				})
			}
		}
	]	
}

// export {
// 	createRoutes
// }