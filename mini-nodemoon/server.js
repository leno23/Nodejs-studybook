const Koa = require('koa')
const app = new Koa()
app.use((ctx) => {
    ctx.body = 'hello2'
}).listen(3000,() => {
    console.log('app start2')
})