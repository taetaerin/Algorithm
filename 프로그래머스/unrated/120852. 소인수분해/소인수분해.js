function solution(n) {
    var answer = [];
    
    for(let i=1; i<=n; i++) {
        if(n%i == 0) {
            //소인수 구하기
            let cnt = 0;
            for(let k=1; k<=Math.sqrt(i); k++) {
                if(i%k == 0) {
                    cnt += 2
                    if(i/k == k) {
                        cnt -= 1
                    }
                }
            }
            if(cnt == 2) {
                answer.push(i)
            }
        }   
    }

    return answer;
}




//     let list=[];
//     for(let i=1; i<=n; i++) {
//         if(n%i == 0) {
//             list.push(i)
//         }
//     }
//     console.log(list)
    
//     for(let x of list) {
//         let cnt = 0;
//         console.log('x',x)
//         for(let i=1; i<=Math.sqrt(x); i++) {
//             if(x%i == 0) {
//                 cnt += 2
//                 if(x/i == i) {
//                     cnt -=1
//                 }
//             }
//         }
//         if(cnt == 2 ) {
//             answer.push(x)
//         }
//     }