function solution(n) {
    var answer = 0;
    let list = []
    
    for(let i=1; i<=100000; i++) {
        list.push(i)
    }
    
    list = list.filter((item) => !(String(item).includes('3') || item%3==0))
    console.log(list)
    
    answer = list[n-1]
    return answer;
}