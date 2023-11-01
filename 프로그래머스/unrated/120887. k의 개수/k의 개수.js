function solution(i, j, k) {
    var answer = 0;
    let list = []
    for(let m=i; m<=j; m++) {
        list.push(m)
    }
  
    let arr = []
    
    for(let x of list) {
        let a = String(x).split('')
        arr.push(a)
    }
    arr = arr.join(',')
    
    for(let x of arr) {
        if(x.includes(k)) {
            answer += 1
        }
    }
    return answer;
    
}