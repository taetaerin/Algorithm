const fs = require('fs')

let a = fs.readFileSync('/dev/stdin').toString().trim().toUpperCase().split('')

let b = [...new Set(a)]

let list = []

for(let i=0; i<b.length; i++) {
  let idx = a.indexOf(b[i])
  let c = 0;
  while(idx !== -1) {
    c+= 1
    idx = a.indexOf(b[i], idx+1)
  }
  list.push({eng: b[i],num: c})
}

let max = Math.max(...list.map(item => item.num))

let d =[];

for(let i=0; i<list.length; i++) {
  if(list[i].num === max) {
    d.push(list[i].eng)
  }
}

console.log(d.length >1 ? '?' : d[0])