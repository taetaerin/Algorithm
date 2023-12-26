function solution(priorities, location) {
    var answer = 0;
    
    let queue = priorities;
    
    while(queue) {
        let maxNum = Math.max(...priorities)
        let firstNum = queue.shift()
        if(firstNum < maxNum && location == 0) {
            queue.push(firstNum)
            location = queue.length-1
        }
        else if(firstNum >= maxNum && location == 0) {
            console.log(answer)
            answer += 1
            break;
        }
        else if(firstNum >= maxNum) {
            answer += 1
            location -= 1
        }
        else if(firstNum < maxNum) {
            queue.push(firstNum)
            location -= 1
        }
        
    }
    return answer;
}