
// @flow
import {Component} from 'react'

class FlowtypeView extends Component {
	render() {
		const data = {
			name: '织夏'
		}
		const name = foo1(data)
		const result = foo2('success')
		foo5(1,2,3)

		return <div>{name}</div>
	}
}

// 基本类型 Boolean/boolean,String/string,Number/number,null,undefined
function foo1(value: {name?: string}) {
	return value.name
}

// 限定类型
function foo2(result: 'success' | 'failure') {
	return result
}

// 方法
const foo4 = (callback: (value: string | null) => void): void => {
	callback
}

const foo5 = (...args: Array<number>) => {
	// ...
}

class Template<A, B, C> {}
let TemplateInstance: Template<number, string, boolean> = new Template()

type MyObject<A, B, C> = {
	foo: A, bar: B, baz: C,
};
let val: MyObject<number, boolean, string> = {
	foo: 1, bar: true, baz: 'three',
};

interface Serializable {
	serialize(): string;
	+covariant: number;     // read-only
  	-contravariant: number; // write-only
}
class Foo implements Serializable {
	serialize() { return '[Foo]' }
}

type One = { prop: number };
type Two = { prop: boolean };
type Both = One & Two;

export default FlowtypeView