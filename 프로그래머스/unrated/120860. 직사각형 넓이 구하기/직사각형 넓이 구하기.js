function solution(dots) {
    var answer = 0;
    let list1 = []
    let list2 = []
    
    for(let x of dots) {
        list1.push(x[0])
        list2.push(x[1])
    }
    
    let x = Math.max(...list1) - Math.min(...list1)
    let y = Math.max(...list2) - Math.min(...list2)
    answer = x* y
    return answer;
}