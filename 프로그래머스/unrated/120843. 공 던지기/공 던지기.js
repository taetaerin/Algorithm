function solution(numbers, k) {
    var answer = 0;
    let idx = 0
    

    for(let i=0; i<k-1; i++) {
        idx = (idx + 2) % numbers.length
        
    }
    console.log(idx)
    answer = numbers[idx]
    return answer;
}