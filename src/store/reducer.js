/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-21 17:56:05
 * @LastEditTime: 2019-04-21 19:55:25
 */

const defaultState = {
    inputValue: '',
    list: []
}

export default (state = defaultState, action) => {
    const { type } = action
    const newState = JSON.parse(JSON.stringify(state))

    switch (type) {
        case 'cahnge_input_value':
            newState.inputValue = action.value
            break
        case 'add_item':
            newState.list.push(newState.inputValue)
            newState.inputValue = ''
            break
        case 'del_item':
            newState.list.splice(action.value, 1)
            break
        default:
            break
    }

    return newState
}