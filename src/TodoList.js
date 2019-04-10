import React, { Component } from 'react'

import 'antd/dist/antd.css'

import store from './store'
import {
    getInputChangeAction,
    getAddItemAction,
    getDeleteItemAction
} from './store/actionCreators'

import TodoListUI from './TodoListUi'

class TodoList extends Component {
    constructor(props) {
        super(props)

        this.state = store.getState()

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)

        this.handleStoreChange = this.handleStoreChange.bind(this)
        store.subscribe(this.handleStoreChange)
    }

    render() {
        return (
            <TodoListUI
                inputValue = { this.state.inputValue }
                handleInputChange = { this.handleInputChange }
                handleBtnClick = { this.handleBtnClick }
                list = { this.state.list }
                handleItemDelete={ this.handleItemDelete }
            />
        )
    }

    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value)

        store.dispatch(action)
    }

    handleBtnClick() {
        const action = getAddItemAction()

        store.dispatch(action)
    }

    handleItemDelete(index) {
        const action = getDeleteItemAction(index)

        store.dispatch(action)
    }

    handleStoreChange() {
        this.setState(store.getState())
    }
}

export default TodoList