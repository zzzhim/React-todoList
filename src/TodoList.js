/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-21 17:51:23
 * @LastEditTime: 2019-04-21 20:03:02
 */

import React, { Component } from 'react'
// import store from './store'
// 通过 connect 获取 store 的数据
import { connect } from 'react-redux'

// 无状态组件
const TodoList = (props) => {
    const {
        inputValue,
        changeInputValue,
        handleClick,
        handleDelete,
        list
    } = props

    return (
        <div>
            <div>
                <input
                    value={ inputValue }
                    onChange={ changeInputValue }
                    />
                <button onClick={ handleClick }>提交</button>
            </div>
            <div>
                {
                    list.map((value, index) => {
                        return (
                            <li
                                onClick={ handleDelete.bind(null, index) }
                                key={ index }
                                >
                                    { value }
                            </li>
                        )
                    })
                }
            </div>
        </div>
    )
}

// class TodoList extends Component {
//     constructor(props) {
//         super(props)
//     }

//     render() {
//         const {
//             inputValue,
//             changeInputValue,
//             handleClick,
//             handleDelete
//         } = this.props

//         return (
//             <div>
//                 <div>
//                     <input
//                         value={ inputValue }
//                         onChange={ changeInputValue }
//                         />
//                     <button onClick={ handleClick }>提交</button>
//                 </div>
//                 <div>
//                     {
//                         this.props.list.map((value, index) => {
//                             return (
//                                 <li
//                                     onClick={ handleDelete.bind(null, index) }
//                                     key={ index }
//                                     >
//                                         { value }
//                                 </li>
//                             )
//                         })
//                     }
//                 </div>
//             </div>
//         )
//     }
// }

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

// store.dispatch, props
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const value = e.target.value
            const action = {
                type: 'cahnge_input_value',
                value
            }
            dispatch(action)
        },
        handleClick() {
            const action = {
                type: 'add_item'
            }

            dispatch(action)
        },
        handleDelete(index) {
            const action = {
                type: 'del_item',
                value: index
            }

            dispatch(action)
        }
    }
}

// 让他们两个做连接
// connect 返回的是一个容器组件
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)