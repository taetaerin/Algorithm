function solution(s) {
    var answer = 0;
    let stack = [];
    
    s = s.split(' ')
    console.log(s)
    
    for(let x of s) {
        if(x == 'Z') {
            stack.pop()
        }else {
            stack.push(Number(x))
        }
    }
    console.log(stack)
    
    if(stack.length !== 0) {
        answer = stack.reduce((a,b) => a+b)
    }
    
    return answer;
}



// let stack = []
    
//     s = s.split(' ')
//     for(let i=0; i<s.length; i++) {
//         if(s[i] == 'Z') {
//             stack.pop()
//         }else {
//             stack.push(Number(s[i]))

//         }
//     }
              
//     if(stack.length !== 0) {
//         answer = stack.reduce((a,b) => a+b)
//     }
    