function solution(elements) {
    var answer = 0;
    let list = []
    
    for(let n=1; n<=elements.length; n++) {
        for(let i=0; i<elements.length; i++) {
            let sum = elements.slice(0, n).reduce((a,b) => a+b)
            list.push(sum)
            let first = elements.shift()
            elements.push(first)
        }
    }

     answer = [...new Set(list)].length
    
    return answer;
}