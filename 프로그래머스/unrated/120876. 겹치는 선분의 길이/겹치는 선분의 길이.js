function solution(lines) {
    var answer = 0;

    let word = lines.join(',').split(',')
    let min = Math.min(...word)
    let max = Math.max(...word)
    let list = new Array(max-min+1).fill(0)
    
//     console.log(min, max)
//     console.log(list)
    
    for(let x of lines) {
        console.log(x)
        for(let i=x[0]; i<x[1]; i++) {
            list[i-min] += 1
        }
    }
    
     console.log(list)
    
    for(let x of list) {
        if(x>=2) answer +=1
    }

    return answer;
}






//     let minnum = 123456
//     let maxnum = -123456
    
//     for(let x of lines) {
//         minnum = Math.min(x[0], minnum)
//         maxnum = Math.max(x[1], maxnum)
//     }

//     let list = new Array(maxnum-minnum+1).fill(0)
    
//     for(let x of lines) {
//         for(let i=x[0]; i<x[1]; i++) {
//             list[i-minnum] += 1
//              console.log(list)
//         }
//     }
   
//     for(let x of list) {
//         if(x > 1) {
//             answer += 1
//         }
//     }