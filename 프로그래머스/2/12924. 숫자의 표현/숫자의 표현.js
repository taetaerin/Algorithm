// function solution(n) {
//     var answer = 0;
//     let list = Array.from({length: n}, (v, i) =>i+1)
    
//     let left = 0;

    
//     for(let right=0; right<n; right++) {
//         sum += list[right];
        
//         while(sum > n) {
//             sum -= list[left]
//             left += 1
//         }
        
//         if(sum == n) {
//             answer += 1
//         }
        
//     }
//     return answer;
// }

function solution(n) {
    var answer = 0;
    
    let sum = 0;
    let left = 1;

    
    for(let right=1; right<=n; right++) {
        sum += right;
        
        while(sum > n) {
            sum -= left
            left += 1
        }
        
        if(sum == n) {
            answer += 1
        }
        
    }
    return answer;
}