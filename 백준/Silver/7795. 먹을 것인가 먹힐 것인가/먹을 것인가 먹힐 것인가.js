const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const fs = require('fs');
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const T = input.shift();
for(let i =0; i<T; i++){
    const [N,M] = input.shift().split(' ').map(Number);
    const arrA = input.shift().split(' ').map(Number).sort((a, b) => a - b);
    const arrB = input.shift().split(' ').map(Number).sort((a, b) => a - b);

    let count = 0;
    
    for(let j=0; j<N; j++){
        for(let k=0; k<M; k++){
            if(arrA[j]>arrB[k]){
                count++;
            } else{
                break;
            }
        }
    }
    console.log(count);
}