function solution(A, B) {
    var answer = -1;
    let list = A.split('')
    if(A == B) return 0
   
    for(let i=0; i<A.length; i++) {
        let word = list.pop()
        list.unshift(word)
        console.log(list)
        if(list.join('') == B) {
            return i+1
        }
    }
    return answer
}





 // if(A==B) return 0
 //    A = A.split('')
 //    for(let i=0; i<A.length; i++) {   
 //        let a = A.pop()
 //        A.unshift(a)
 //        if(A.join('') == B) {
 //            return i+1
 //        }
 //    }