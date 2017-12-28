
import { Component } from 'react'

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