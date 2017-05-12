/**
 * Created by shemei
 * react 动画探索
 */

import { Component } from 'react'
import ReactDom from 'react-dom'
import Animate, { AnimateGroup, configSpring, configBezier } from 'react-smooth'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import update from 'react-addons-update'

require('../styles/animation.styl');

const appear = {
    from: 0, to: 1, attributeName: 'opacity',
}
const leave = {
    steps: [
        {
            style: { transform: 'translateX(0)', },
        }, {
            duration: 1000,
            style: { transform: 'translateX(300)', height: 50, },
        }, {
            duration: 2000,
            style: { height: 0, },
        }
    ]
}
const leaveSteps = [
    {
        duration: 0,
        style: {
            transform: 'translateX(0)',
        },
    }, {
        duration: 1000,
        style: {
        transform: 'translateX(302px)',
        height: 50,
    },
    }, {
        duration: 1000,
        style: {
            height: 0,
        },
    }
];

class AnimationView extends Component {
	state = {
	    to: 100,
	    list: ['shemei', 'zhixia', 'xiashu']
	}

	remove(index) {
		return () => {
			this.setState(update(this.state, {list: {$splice: [[0, 1]]}}))
		}
	}

	render() {
	    const list = this.state.list.map((e, i) => {	    	
	    	return (<div id={'item-' + i} key={'item-' + i} onClick={this.remove(i)}>{e}</div>)
	    })

	  //   const content0 = (
			// <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={300}>
			// 	{list}
			// </ReactCSSTransitionGroup>
	  //   )
	    	
	    const appear = {
			from: 0, to: 1, attributeName: 'opacity',
		}
		const leave = {
			steps: [
				{
					style: { transform: 'translateX(0)', },
				}, {
					duration: 1000,
					style: { transform: 'translateX(300)', height: 50, },
				}, {
					duration: 2000,
					style: { height: 0, },
				}
			]
		}
	    const content1 = (
	    	<AnimateGroup leave={{ steps: leaveSteps }}>
    			{list}
	    	</AnimateGroup>
	    )

		const content2 = (
			<Animate to={0} from={1} attributeName="opacity">
				<div key="shemei" className="son2"></div>
			</Animate>
		)
		const content3 = (
			<Animate easing="spring" from={{ y: 0 }} to={{ y: this.state.to }}>
		  		{({ y }) => <div style={{ width: 100, height: 100, backgroundColor: 'red', transform: `translate(0, ${y}px)`, }}></div>}
			</Animate>
		)

		return (
			<div>
				{content1}
			</div>
		)
	}
}

export default AnimationView







