/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-21 03:09:39
 * @LastEditTime: 2019-04-21 17:39:09
 */

import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'
import { GET_INIT_LIST } from './actionTypes'
import { getInitListAction } from './actionCreators'
// import store from './index'

function* getInitList() {
    // 捕获ajax失败
    try {
        // 等待数据获取结束，然后会直接存储到 res 中
        const res = yield axios.get('/api/todolist')
        const { data } = res.data
        const action = getInitListAction(data)
        yield put(action)
    }catch (err) {
        console.log('网络请求失败')
    }

    // axios.get('/api/todolist')
    // .then((res) => {
    //     const { data } = res.data
    //     const action = getInitListAction(data)
    //     put(action)
    // })
    // .catch(err => {
    //     console.log(err)
    // })
}

// generator 函数
function* mySaga() {
    // 捕捉到 GET_INIT_LIST ,就会执行 getInitList
    yield takeEvery(GET_INIT_LIST, getInitList)
}

export default mySaga