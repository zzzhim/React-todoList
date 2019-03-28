import React from 'react'
import ReactDOM from 'react-dom'
// all in js 在react中css和js可以通过模块的形式嵌入到react中
// import './index.css';
import App from './App'
// PWA progressive web application
// https协议的服务器上
// import * as serviceWorker from './serviceWorker';

// 帮助我们把组件挂载在某个节点上
// 组件开头必须以大写字母开头
ReactDOM.render(<App />, document.getElementById('root'))

// serviceWorker.unregister();