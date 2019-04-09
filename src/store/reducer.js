import {
    CHANGE_INPUT_VALUE,
    ADD_TODO_ITEM,
    DELETE_TODO_ITEM
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

    return newState
}