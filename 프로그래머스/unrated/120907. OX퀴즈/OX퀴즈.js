function solution(quiz) {
    var answer = [];
    
    for(let x of quiz) {
        let [left, right] = x.split(' = ')
       
        if(left.includes('+')) {
            let [a, b] = left.split(' + ').map(Number)
            console.log(a+b, right)
            if(a+b == right) {
                answer.push('O')
            }else {
                answer.push('X')
            }
        }else {
            let [a, b] = left.split(' - ').map(Number)
            console.log(a-b, right)
            if(a-b == right) {
                answer.push('O')
            }else {
                answer.push('X')
            }
        }
        
        
    }
    
   
    return answer;
}


//   for(let x of quiz) {
//         const [left, right] = x.split('=')
        
//         if(left.indexOf('+') > -1) {
//             const [a,b] = left.split(' + ').map(i => Number(i))
//             answer.push(a+b == Number(right) ? 'O' : "X")
//             console.log(a,b)
//         }
        
//         else {
//             const [a,b] = left.split(' - ').map(i => Number(i))
//             answer.push(a-b == Number(right) ? 'O' : "X")
         
//         }
//     }
   