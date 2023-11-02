const fs = require('fs');

let [a, b, c] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(BigInt);

const pow = (a, b, c) => {
  if (b === BigInt(1)) {
    return a % c;
  }
  const halfPow = pow(a, BigInt(parseInt(b / BigInt(2))), c);
  if (b % BigInt(2) === BigInt(0)) {
    return (halfPow * halfPow) % c;
  } else {
    return ((halfPow * halfPow * a) % c);
  }
};

console.log(Number(pow(a, b, c)));
