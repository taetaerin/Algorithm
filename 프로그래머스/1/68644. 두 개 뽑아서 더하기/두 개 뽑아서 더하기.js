function solution(numbers) {
    var answer = [];
    let list = []
    for(let i=0; i<numbers.length; i++) {
        for(let j=i+1; j<numbers.length; j++) {
            list.push(numbers[i] + numbers[j])
        } 
    }
    
    answer = [...new Set(list)].sort((a,b) => a-b)
    
    return answer;
}