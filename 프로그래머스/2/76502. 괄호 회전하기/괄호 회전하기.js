function solution(s) {
    var answer = 0;
    
    let n = s.length; 
    let list = [...s]
    
    for(let i=0; i<n; i++) {
        let stack = [];

        for(let x of list) {
            if(x == '[' || x == '{' || x == '(') {
                stack.push(x)
            }else {
                if(x == ']') {
                    if(stack[stack.length -1] == '[') {
                        stack.pop()
                    }else {
                        stack.push(x)
                    }
                }
                else if(x == ')') {
                    if(stack[stack.length -1] == '(') {
                        stack.pop()
                    }else {
                        stack.push(x)
                    }
                }
                else if(x == '}') {
                    if(stack[stack.length -1] == '{') {
                        stack.pop()
                    }else {
                        stack.push(x)
                    }
                }
            }
        }
        if(stack.length == 0) answer += 1
        let startNum = list.shift()
        list.push(startNum)
    }
    return answer;
}