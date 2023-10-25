function division(num) {
    cnt = 0;
    for(let i=1; i<=Math.sqrt(num); i++) {
        if(num % i == 0) {
            cnt += 2
            if(num/i == i) {
                cnt -=1
            }
        }
    }
    return cnt
}

function solution(number, limit, power) {
    var answer = 0;
    let list = []

    for(let i=1; i<=number; i++) {
        list.push(division(i))
    }
    console.log(list)
    for(let i=0; i<list.length; i++) {
        if(list[i] > limit) list[i] = power
    }
    
    console.log(list)
    answer = list.reduce((a,b) => a+b)
    return answer;
}