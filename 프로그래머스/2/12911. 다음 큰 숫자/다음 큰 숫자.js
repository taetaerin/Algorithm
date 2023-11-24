function solution(n) {
    var answer = 0;
    
    const one_num = n.toString(2).split('').filter(item => item == 1).length;

    for(let i=n+1; i<1000000; i++) {
        let result = i.toString(2).split('').filter(item => item == 1).length;
        if(result == one_num) {
            answer = i
            break;
        }
    }
    return answer;
}

// function solution(n) {
//     var answer = 0;
    
//     const one_num = n.toString(2).split('').filter(item => item == 1).length;
    
//     let result = n+1
//     while(result > n) {
//         let a = result.toString(2).split('').filter(item => item == 1).length;
//         if(a == one_num) {
//             answer = result
//             break;
//         }
//         result += 1
//     }
//     return answer;
// }