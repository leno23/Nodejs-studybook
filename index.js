const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    const { url, method,headers} = req;
    console.log(url,headers.accept)
    if (url === "/" && method === "GET") {
        fs.readFile("index.html", (err, data) => {
            if (err) {
                res.end("服务端错误");
                return;
            }
            res.writeHead(200, {
                "Content-Type": "text/html;charset=utf-8",
            });
            res.end(data);
        });
    }else if(url === '/user' && method==='GET'){
      res.end(JSON.stringify({
        name:'jack',
        age:20
      }))
    }else if(headers.accept.includes('image/*') && method==='GET'){
      fs.createReadStream('.'+url).pipe(res)
    }else{
      res.stausCode=404
      res.setHeader('Content-Type','text/plain;charset=utf-8')
      res.end('资源未找到')
    }
}).listen(3000, (err) => {
    if (err) throw err;

    console.log("server start at 3000");
});
