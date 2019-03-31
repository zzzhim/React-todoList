import React, { Component, Fragment } from 'react'

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

        this.setState({
            inputValue: e.target.value
        })
    }

    onClick(e) {
        this.setState({
            list: [ ...this.state.list, this.state.inputValue ],
            inputValue: ''
        })
    }

    onDel(index) {
        // immutable
        // state 不允许我们做任何的改变

        const list = [...this.state.list]
        list.splice(index, 1)

        this.setState({
            list: list
        })
    }

    render() {
        // JSX
        return (
            // 占位符
            <Fragment>
                <div>
                    <input
                        // react下绑定数据事件需要加 {}
                        value={ this.state.inputValue }
                        onChange={ this.handleInputChange }
                        />
                    <button onClick={ this.onClick }>提交</button>
                </div>
                {/* 循环渲染数据 */}
                <ul>{
                    this.state.list.map((item, index) => {
                        return (
                            <li
                                key={ index }
                                onClick={this.onDel.bind(this, index) }
                                >
                                { item }
                            </li>
                        )
                    })
                }</ul>
            </Fragment>
        )
    }
}

export default TodoList