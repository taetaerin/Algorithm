function solution(common) {
    var answer = 0;
    let a = common[1] - common[0]
    console.log(a)
    
    for(let i=1; i<2; i++) {
        if(common[i+1] - common[i] === a) {
            answer = common[common.length-1] + a
        }else {
            let b =  (common[i+1] - common[i]) / a
            console.log(b)
            answer = common[common.length-1] * b
        }
    }
  
    //console.log(result)
    return answer;
}