const fs = require('fs')

let [n, m] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

while(1) {
  if(n.length == m.length) {
    if(n == m) {
      return console.log(1)
    }else {
      return console.log(0)
    }
    
  }
  else if(m[m.length-1] == 'A') {
    m = m.slice(0, m.length-1)
  }
  else if(m[m.length-1] == 'B'){
    m = m.slice(0, m.length-1)
    m = m.split('').reverse().join('')
  }
}