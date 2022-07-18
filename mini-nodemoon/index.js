// 实现一个简版的nodemoon工具


const { spawn } = require('child_process')
const chokidar = require('chokidar')

// 简单的一个防抖函数
function debounce(fn, delay) {
    let timer
    return () => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn()
        }, delay)
    }
}
let childProcess
// 文件内容发生变更，重新起服务之前需要将之前启动的服务关闭，防止端口被占用
const debounceStart = debounce(() => {
    childProcess && childProcess.kill()
    childProcess = spawn('node', ['server.js'], {
        stdio: [process.stdin, process.stdout, process.stderr]
    })
}, 500)

// 监听server.js的文件内容的变化
chokidar.watch([['server.js']]).on('all', (event, path) => {
    console.log(event, path);
    debounceStart()
})

