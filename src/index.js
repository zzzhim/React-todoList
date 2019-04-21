/*
 * Description: In User Settings Edit
 * Author: your name
 * @LastEditors: Please set LastEditors
 * Date: 2019-04-21 02:21:47
 * @LastEditTime: 2019-04-21 18:03:14
 */
import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from './TodoList'
// import './utils/mock.js'
import { Provider } from 'react-redux'
import store from './store'

const App = (
    // Provider 和 store 做了关联
    // 这个 Provider 的内部组件都可以获得store
    <Provider store={ store }>
        <TodoList />
    </Provider>
)

ReactDOM.render(
    App,
    document.getElementById('root')
)