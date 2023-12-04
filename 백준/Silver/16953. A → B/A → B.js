const fs = require('fs')

let [n, m] = fs.readFileSync('/dev/stdin').toString().trim().split(' ')

let count = 1;

while (1) {
  if(n == m) {
    return console.log(count)
  }
  else if (Number(n) > Number(m)) {
    return console.log(-1)
  }

  else if(m % 2 == 0) {
    m = m/2
    count += 1
  }
    
  else if(m % 2 != 0) {
    m = String(m)
    if(m[m.length-1] == 1) {
      m = m.slice(0, m.length-1)
      count += 1
    }
    else{
      return console.log(-1)
    }
  }

}


