
import React from 'react'
import {shallow, render, mount} from 'enzyme'
// import render from 'react-test-renderer'

import TodoItem from './todoItem.js'

describe('<TodoItem />', function() {
	const props = {
		text: '计划',
		change: jest.fn()
	}

	it('component\'s text should be \'计划\'', function(){
		let todoitem = shallow(<TodoItem {...props} />)
		expect(todoitem.find('h5').text()).toEqual('计划')
	})

	it('\'change\' should change text', function() {
		let todoitem = mount(<TodoItem {...props} />)
		todoitem.find('h5').simulate('click')
		expect(props.change).toBeCalled()
	})
})