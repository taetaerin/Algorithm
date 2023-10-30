function solution(n, arr1, arr2) {
    var answer = [];
    let list = []
    for(let i=0; i<n; i++) {
        list.push((arr1[i] | arr2[i]).toString(2).padStart(n, '0'))
    }
    
    for(let x of list) {
        x = x.replaceAll('1', '#')
        x= x.replaceAll('0', ' ')
        answer.push(x)
    }
    
    return answer;
}