import Mock from 'mockjs'

Mock.setup({
    timeout: 200
})

Mock.mock('/api/todolist', {
    "data|1-3": [
        "Hello",
        "Mock.js",
        "!"
    ]
})