
import { Component } from 'react'

export const defaultStateTypes = {/* state 的类型声明 */}
 
	export const getDefaultState = () => ({/* 默认的 state */})
 
	export function initialize() {
	// 返回一个对象，改对象将作为 instance 参数注入到所有函数中。可将 instance 作为数据缓存
		return {}
	}
 
export const defaultIntercepters = {/* 声明外部传入的函数类型的属性 */}
 
export const defaultListeners = {
    // 第一参数为外部框架注入。后面的参数即调用 listener 时传入的参数。
    onClick({ state, instance }, ...args) {
      	// const changedStateValues = ...
      	// changedStateValues 只包含变化了的 state 字段
    	return changedStateValues
    }
}
 
export const defaultWrappers = {
    // 可由外部传入的语义化的子组件
	Text: 'span'
}
 
export const identifiers = {
	// 例如 Tabs 下的 TabPane。Input 的 Prefix 这种占位符式的组件需要在这里声明
}
 
export function render({state, children, instance, listeners, wrappers, intercepters}) {
	return <div></div>
}

// 组件化测试
const ComDef = {
    render: ( { Root, Text } ) => {
        return (
            <div>
                <Root>
                    <Text>测试代码</Text>
                </Root>
            </div>
        )
    }
}

const wrap = (Comp) => {
    return class extends Component {
        constructor(props) {
            super(props)
        }

        render() {
            const wrappers = this.props
            
            const renderTxt = Comp.render(wrappers)

            return (
                renderTxt
            )        
        }
    }
}

const Com = wrap(ComDef)
const Root = ({ children }) => <div className='root'>{ children }</div>
const Text = ({ children }) => <div className='text'>{ children }</div>

const WrappedComponent = () => {
    return (
        <div>
            <Com Root={Root} Text={Text} />
        </div>
    )
}    

export default WrappedComponent