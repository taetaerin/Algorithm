function solution(s){
    var answer; 
    let stack = [];
    
    for(let x of s) {
        if(stack[stack.length -1] == '(') {
            if(x == ')') {
                stack.pop()
            }else {
                stack.push(x)
            }
        }
        else {
            stack.push(x)
        }
        //console.log(stack)
    }
    
    answer = stack.length == 0 ? true : false
    return answer;
}









// for(let i=0; i<s.length; i++) {
//         if(s[i] == '(') {
//             stack.push(s[i])
//         }else{
//             if(stack.length !== 0) {
//                 stack.pop() 
//             }else{
//                 return false
//             }
//         }
//     }
    
//     if(stack.length == 0) {
//         answer = true
//     }
    