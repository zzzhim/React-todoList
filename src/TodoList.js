import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import './style.css'

// 定义一个类
// 这个类继承了react下的Component
class TodoList extends Component {

    // 定义数据
    constructor(props) {
        super(props)

        // 定义到状态中
        this.state = {
            inputValue: '',
            list: []
        }

        // 使用 ES6 的bind改变this指向
        this.handleInputChange = this.handleInputChange.bind(this)
        this.onClick = this.onClick.bind(this)
    }

    handleInputChange(e) {
        // 在react下想要改变state中的数据不能直接通过
        // this.state.inputValue = e.target.value 改变
        // 需要使用this.setState({
        //
        // }) 方法
        const value = e.target.value
        this.setState(() => ({ inputValue: value }))
    }

    onClick() {
        this.setState((prevState) => {
            return {
                list: [
                    ...prevState.list,
                    prevState.inputValue
                ],
                inputValue: ''
            }
        })
    }

    onDel(index) {
        // immutable
        // state 不允许我们做任何的改变
        this.setState((prevState) => {
            const list = [...prevState.list]
            list.splice(index, 1)
            return {
                list: list
            }
        })
    }

    onTodoItem() {
        const { list } = this.state
        return list.map((item, index) => {
            return (
                <TodoItem
                    key={ index }
                    content={ item }
                    index={ index }
                    onClickDel={ this.onDel.bind(this) }
                />
            )
        })
    }

    render() {
        // JSX
        return (
            // 占位符
            <Fragment>
                <div>
                    <input
                        // react会认为calss是一个类
                        // 在为元素和组件添加class时应使用className
                        className="input"
                        // react下绑定数据事件需要加 {}
                        value={ this.state.inputValue }
                        onChange={ this.handleInputChange }
                        />
                    <button onClick={ this.onClick }>提交</button>
                </div>
                {/* 循环渲染数据 */}
                <ul>{ this.onTodoItem() }</ul>
            </Fragment>
        )
    }
}

export default TodoList