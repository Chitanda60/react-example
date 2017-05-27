
import {getMessage} from './index.js'

describe('Request', () => {
	it('getMessage', () => {
		const callback = (data) => {
			expect(data).toEqual({ 
				name: '蛇莓', mess: '织夏'
			})
			done()
		}

		getMessage(callback)
	})
})