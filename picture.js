const fs = require('fs')
let inp = fs.createReadStream('./banner.png')
let out = fs.createWriteStream('./cp.png')
inp.pipe(out)