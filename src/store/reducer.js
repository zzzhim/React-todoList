const defaultState = {
    inputValue: '12',
    list: [1, 2]
}

// reducer可以接受state，但是绝对不可以改变state
export default (state = defaultState, action) => {
    if(action.type === 'change_input_value') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value

        return newState
    }

    if (action.type === 'add_todo_item') {
        const newState = JSON.parse(JSON.stringify(state))

        newState.list.push(newState.inputValue)
        newState.inputValue = ''

        return newState
    }

    return state
}