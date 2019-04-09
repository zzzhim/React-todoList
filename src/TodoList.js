import React, { Component, Fragment } from 'react'
import {
    Input,
    Button,
    List,
    Typography
} from 'antd'
import 'antd/dist/antd.css'

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
]

class TodoList extends Component {
    render() {
        return (
            <Fragment>
                <div style={{ margin: '20px' }}>
                    <div>
                        <Input
                            placeholder="todo info"
                            style={{ width: '300px', marginRight: '10px' }}
                        />

                        <Button type="primary">提交</Button>
                    </div>
                    <List
                        style={{ marginTop: '10px', width: '300px' }}
                        bordered
                        dataSource={ data }
                        renderItem={ item => (<List.Item>{item}</List.Item>) }
                    />
                </div>
            </Fragment>
        )
    }
}

export default TodoList