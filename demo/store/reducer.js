/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-21 02:21:47
 * @LastEditTime: 2019-04-21 03:47:53
 */

import {
    CHANGE_INPUT_VALUE,
    ADD_TODO_ITEM,
    DELETE_TODO_ITEM,
    INIT_LIST_ACTION
} from './actionTypes'

const defaultState = {
    inputValue: '',
    list: []
}

// reducer可以接受state，但是绝对不可以改变state
export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))

    if(action.type === CHANGE_INPUT_VALUE) {
        newState.inputValue = action.value

        return newState
    }

    if(action.type === ADD_TODO_ITEM) {
        newState.list.push(newState.inputValue)
        newState.inputValue = ''

        return newState
    }

    if(action.type === DELETE_TODO_ITEM) {
        newState.list.splice(action.index, 1)

        return newState
    }

    if (action.type === INIT_LIST_ACTION) {
        newState.list = action.data

        return newState
    }

    return newState
}