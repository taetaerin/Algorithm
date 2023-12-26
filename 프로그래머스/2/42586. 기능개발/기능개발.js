function solution(progresses, speeds) {
    var answer = [];
    let rest = [];
    
    for(let i=0; i<progresses.length; i++) {
        let count = 0
        while(1) {
            if(progresses[i] >= 100) {
                rest.push(count)
                break;
            }
            else {
                progresses[i] += speeds[i]
                count += 1
            }
        }
    }
    
    let num = rest[0]
    let count = 1
    
    for(let i=1; i<rest.length; i++) {
        if(num < rest[i]) {
            num = rest[i]
            answer.push(count)
            count = 1
        }else{
            count += 1
        }

    }
    
    answer.push(count)
    
    return answer;
}