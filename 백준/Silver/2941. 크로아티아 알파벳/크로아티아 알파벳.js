const fs = require('fs')

let a = fs.readFileSync('/dev/stdin').toString().trim()

let b = [/c=/g, /c-/g, /dz=/g, /d-/g, /lj/g, /nj/g, /s=/g, /z=/g]

b.map(item => a = a.replace(item, '*'))
console.log(a.length)
