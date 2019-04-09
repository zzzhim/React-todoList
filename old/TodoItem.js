import React, { Component } from "react"
// 不会阻止程序的运行，只会做出相应的提示
import PropTypes from 'prop-types'

class TodoItem extends Component {
    constructor(props) {
        super(props)

        this.onDel = this.onDel.bind(this)
    }

    // 对props下的属性设置默认值
    static defaultProps = {
        text: 111
    }
    // 组件被更新之前，他会自动执行
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.content !== this.props.content) {
            return true
        }else {
            return false
        }
    }

    onDel() {
        const { onClickDel, index } = this.props
        onClickDel(index)
    }

    render() {
        const { content } = this.props
        return (
            <div>
                <li
                    onClick={ this.onDel }
                    dangerouslySetInnerHTML={{ __html: content }}>
                </li>
                {/* { this.props.text } - { this.props.test } */}
            </div>
        )
    }
}

// 对Props做校验
TodoItem.propTypes = {
    // content必须是字符串 并且必须要传递
    content: PropTypes.string.isRequired,
    // onClickDel 可以是函数或者数字
    onClickDel: PropTypes.oneOfType([ PropTypes.func, PropTypes.number ]),
    // index必须是数字
    index: PropTypes.number
}

// 对props下的属性设置默认值
TodoItem.defaultProps = {
    test: '2323'
}

export default TodoItem