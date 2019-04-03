import React, { Component } from "react"

class TodoItem extends Component {
    constructor(props) {
        super(props)

        this.onDel = this.onDel.bind(this)
    }

    onDel() {
        const { onClickDel, index } = this.props
        onClickDel(index)
    }

    render() {
        const { content } = this.props
        return (
            <li onClick={ this.onDel } dangerouslySetInnerHTML={{ __html: content }}></li>
        )
    }
}

export default TodoItem