const defaultState = {
    inputValue: '',
    list: []
}

// reducer可以接受state，但是绝对不可以改变state
export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))

    if(action.type === 'change_input_value') {
        newState.inputValue = action.value
        return newState
    }

    if(action.type === 'add_todo_item') {
        newState.list.push(newState.inputValue)
        newState.inputValue = ''

        return newState
    }

    if(action.type === 'delete_todo_item') {
        newState.list.splice(action.index, 1)

        return newState
    }

    return newState
}