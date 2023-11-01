function solution(quiz) {
    var answer = [];
    
    for(let x of quiz) {
        const [left, right] = x.split('=')
        
        if(left.indexOf('+') > -1) {
            const [a,b] = left.split(' + ').map(i => Number(i))
            answer.push(a+b == Number(right) ? 'O' : "X")
            console.log(a,b)
        }
        
        else {
            const [a,b] = left.split(' - ').map(i => Number(i))
            answer.push(a-b == Number(right) ? 'O' : "X")
         
        }
    }
   
    return answer;
}


//     const answer = quiz.map((q)=>{
//         const [left,right] = q.split('=')
//         if(left.indexOf('+') > -1){
//             const [leftValue1,leftValue2] = left.split(' + ').map(v=>Number(v))
//             return leftValue1 + leftValue2 === Number(right) ? 'O' : 'X'
//         }
//         else{
//             const [leftValue1,leftValue2] = left.split(' - ').map(v=>Number(v))
//             return leftValue1 - leftValue2 === Number(right) ? 'O' : 'X'
//         }
//     })
//     return answer;
// }