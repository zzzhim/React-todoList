import React, { Component } from 'react'

import 'antd/dist/antd.css'

import store from './store'
import {
    getInputChangeAction,
    getAddItemAction,
    getDeleteItemAction,
    getTodoList
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

    componentDidMount() {
        // Redux-thunk中间件实现ajax数据请求
        const action = getTodoList()
        store.dispatch(action)
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