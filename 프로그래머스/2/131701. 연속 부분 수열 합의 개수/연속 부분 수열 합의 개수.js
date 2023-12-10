function solution(elements) {
    var answer = 0;
    let list = []
    //elements.sort((a,b) => a-b)
    
    for(let n=1; n<=elements.length; n++) {
        
        for(let i=0; i<elements.length; i++) {
            let newList = elements.slice(0, n)
            list.push(newList.reduce((a,b) => a+b))
            let first = elements.shift()
            elements.push(first)
            
        }
        
    }
    
     answer = [...new Set(list)].length
    
    return answer;
}