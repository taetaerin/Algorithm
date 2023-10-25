function solution(n, arr1, arr2) {
    var answer = [];

    for(let i=0; i<n; i++) {
        let a = arr1[i] | arr2[i]
        answer.push(a.toString(2).padStart(n, '0'))
    }

    for(let i=0; i<n; i++) {
        answer[i] = answer[i].replaceAll('1', '#')
        answer[i] = answer[i].replaceAll('0', ' ')
    }
    
    console.log(answer)

    return answer;
}