function solution(food) {
    var answer = '';
    for(let i=1; i<food.length; i++) {
        if(food[i] % 2 != 0) {
            food[i] = food[i] -1
        }
        answer += `${i}`.repeat(food[i] / 2)
    }

    answer = answer + 0 + answer.split('').reverse().join('')
    
    return answer;
}