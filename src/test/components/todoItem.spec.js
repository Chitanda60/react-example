
import React from 'react'
import {shallow, render, mount} from 'enzyme'
// import render from 'react-test-renderer'

import TodoItem from './todoItem.js'

describe('<TodoItem />', () => {
	const props = {
		text: '计划',
		change: jest.fn()
	}

	it('component\'s text should be \'计划\'', () => {
		let todoitem = shallow(<TodoItem {...props} />)

		expect(todoitem.find('h5').text()).toEqual('计划')
	})
	
	it('\'change\' should be click', () => {
		let todoitem = mount(<TodoItem {...props} />)

		todoitem.find('h5').simulate('click')
		expect(props.change).toBeCalled()
	})
})