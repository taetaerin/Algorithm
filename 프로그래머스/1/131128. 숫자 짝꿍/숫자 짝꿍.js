function solution(X, Y) {
    var answer = '';
    X = X.split('')
    Y = Y.split('')
    
    for(let i=0; i<=9; i++) {
        let arr1 = X.filter((item) => Number(item) === i).length;
        let arr2 = Y.filter((item) => Number(item) === i).length;
        answer += String(i).repeat(Math.min(arr1, arr2))
    }
    
    if(answer.length == 0) return '-1'
    if(Number(answer) == 0) return '0'
    
    answer = answer.split('').sort((a,b)=>b-a).join('')
    
    return answer;
}






//     X = X.split('')
//     Y = Y.split('')
//     let list = []
//     console.log(X,Y)

//     for(let i=0; i<=9; i++) {
//         let cur1 = X.filter((n) => Number(n) == i).length
//         let cur2 = Y.filter((n) => Number(n) == i).length
//         answer += String(i).repeat(Math.min(cur1, cur2))
        
//     }
    
//     if(answer.length == 0) return '-1'
//     if(Number(answer) == 0) return '0'
//     answer = answer.split('').reverse().join('')