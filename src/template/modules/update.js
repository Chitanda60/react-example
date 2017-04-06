
import update from 'react-addons-update'

const Update = () => {
	const oriArray1 = [1, 2, 3]	
	const newArray1 = update(oriArray1, {$push: [4]})
	console.log('push')
	console.log(newArray1)

	const oriArray2 = [1, 2, {a: [5, 6, 7]}]
	const oriArray3 = [1, 2, 3]
	const newArray2 = update(oriArray2, {2: {a: {$splice: [[1, 1, 4]]}}})
	const newArray3 = update(oriArray3, {$splice: [[1, 1, 4]]})
	console.log('splice')
	console.log(newArray2)
	console.log(newArray3)

	const oriObject1 = {a: 1, b: 2, c: 3}
	const newObject1 = update(oriObject1, {b: {$apply: (x) => x * 2}})	
	console.log('apply')
	console.log(newObject1)

	const newObject2 = update(oriObject1, {b: {$set: 10}})
	console.log('set')
	console.log(newObject2)

	const newObject3 = update(oriObject1, {$merge: {b: 1, c: 1}})
	console.log('merge')
	console.log(newObject3)

	return (
		<div>
			update			
		</div>
	)
}

export default Update

