
import React from 'react'
import {shallow, render, mount} from 'enzyme'

import Todo from './todo.js'

describe('<Todo />', () => {	
	const props = {
		text: '计划'
	}

	it('\'change\' should change text', () => {
		let todo = mount(<Todo />)

		todo.find('h5').simulate('click')
		expect(todo.find('h5').text()).toEqual('执行')
	})
})