import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import Test from './Test.js'
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

    // 当组件的state和props发生改变的时候，render函数就会重新渲染
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
                <Test content={ this.state.inputValue } />
            </Fragment>
        )
    }
}

export default TodoList

// 1. state 数据
// 2. JSX 模板
// 3. 数据 + 模板 结合，生成真实的DOM，替换原始的DOM
// 4. state 发生改变
// 5. 数据 + 模板 结合,生成真实的DOM，替换原始的DOM

// 缺陷：
// 第一次生成了一个完整的DOM片段
// 第二次生成了一个完整的DOM片段
// 第二次的DOM替换第一次的DOM，非常耗性能

// 1. state 数据
// 2. JSX 模板
// 3. 数据 + 模板 结合，生成真实的DOM，替换原始的DOM
// 4. state 发生改变
// 5. 数据 + 模板 结合，生成真实的DOM，并不直接替换原始的DOM
// 6. 新的DOM 和 原始的DOM做比对，找差异 (DOM和DOM做对比)
// 7. 找出Input框发生了变化
// 8. 只用新的DOM中的Input元素，替换掉老的DOM中的input元素

// 缺陷：
// 性能的提示并不明显

// 1. state 数据
// 2. JSX 模板
// 3. 数据 + 模板 结合，生成真实的DOM，替换原始的DOM
// 4. 生成虚拟DOM(虚拟DOM就是一个JS对象，用它来描述真实DOM) (损耗了性能，但是代价很小)
// [
//     'div',
//     { id: 'abc' },
//     [
//         'span',
//         { class: 'a' },
//         '我是一个虚拟DOM,是不是和vue的jsx写法很像'
//     ]
// ]
// 5. state 发生变化
// 6. 数据 + 模板 生成新的虚拟DOM (极大的提升了性能)
// [
//     'div',
//     { id: 'abc' },
//     [
//         'span',
//         { class: 'a' },
//         '我是新的虚拟DOM，内容发生了变化'
//     ]
// ]
// 7. 比较原始虚拟DOM和新的虚拟DOM的区别，找到区别是span中内容 (JS和JS做对比)
// 8. 直接操作DOM，改变span中的内容