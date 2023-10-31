function solution(A, B) {
    var answer = 0;
    if(A==B) return 0
    A = A.split('')
    for(let i=0; i<A.length; i++) {   
        let a = A.pop()
        A.unshift(a)
        if(A.join('') == B) {
            return i+1
        }
    }
    return -1
}