const fs = require('fs')
const [a, b] = fs.readFileSync(0).toString().split('\n').map(Number)

if(a>0 && b>0) console.log('1')
else if(a<0 && b>0) console.log('2')
else if(a<0 && b<0) console.log('3')
else console.log('4')