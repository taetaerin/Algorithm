const fs = require('fs')

let a = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

let c = 0;

for(let i=1; i<= a[0]; i++) {
  let b = a[i]
  let list = []
  for(let j=0; j<b.length; j++) {
    if(b[j] !== b[j+1]) {
      list.push(b[j])
    }
  }

  let num = [...new Set(list)]
  
  if(num.length === list.length) c += 1;
}


console.log(c)
