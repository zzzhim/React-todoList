/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-21 02:21:47
 * @LastEditTime: 2019-04-21 03:52:29
 */

import {
    CHANGE_INPUT_VALUE,
    ADD_TODO_ITEM,
    DELETE_TODO_ITEM,
    INIT_LIST_ACTION,
    GET_INIT_LIST
} from './actionTypes'
// import axios from 'axios'

export const getInputChangeAction = value => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
})

export const getDeleteItemAction = index => ({
    type: DELETE_TODO_ITEM,
    value: index
})

export const getInitListAction = data => ({
    type: INIT_LIST_ACTION,
    data
})

// Redux-thunk中间件实现ajax数据请求
// export const getTodoList = () => {
//     return (dispatch) => {
//         axios.get('http://yapi.demo.qunar.com/mock/32239/api/todo_list')
//             .then((res) => {
//                 const { data } = res
//                 const action = getInitListAction(data)
//                 dispatch(action)
//             })
//             .catch(() => {

//             })
//     }
// }

export const getInitList = () => ({ type: GET_INIT_LIST })