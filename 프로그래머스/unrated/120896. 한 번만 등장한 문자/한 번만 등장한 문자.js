function solution(s) {
    var answer = '';
    let listSet = [...new Set(s)]
    s = s.split('')
    console.log(listSet)
    
    for(let i=0; i<listSet.length; i++) {
        let result = s.filter(item => item == listSet[i]).length
        console.log(result)
        
        if(result == 1) {
            answer += listSet[i]
        }
    }
    answer = answer.split('').sort().join('')
    return answer;
}