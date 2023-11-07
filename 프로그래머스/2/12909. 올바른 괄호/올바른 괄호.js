function solution(s){
    var answer = false; 
    let stack = [];
    
    for(let i=0; i<s.length; i++) {
        if(s[i] == '(') {
            stack.push(s[i])
        }else{
            if(stack.length !== 0) {
                stack.pop() 
            }else{
                return false
            }
        }
    }
    
    if(stack.length == 0) {
        answer = true
    }
    
    return answer;
}