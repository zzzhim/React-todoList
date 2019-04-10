import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
)

const store = createStore(
    reducer,
    enhancer
)


export default store

// Redux设计和使用的三项原则
// store 是唯一的
// 只有 store 能够改变自己的内容
// Reducer 必须是纯函数 ~~~~ 纯函数指的是，给定固定的输入，就一定会有固定的输出，而且不会有任何副作用