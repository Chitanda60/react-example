
// const routes = [
// 	{
// 		path: 'home',
// 		getComponents(location, callback) {
// 			if (__SERVER__) {
// 				callback(null, require('./components/template1'))
// 			} else {
// 				require.ensure([], function(require) {
// 					callback(null, require('./components/template2'))
// 				})
// 			}
// 		}
// 	},
// ]