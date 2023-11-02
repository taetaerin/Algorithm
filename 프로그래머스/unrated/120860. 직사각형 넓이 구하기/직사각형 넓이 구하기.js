function solution(dots) {
    var answer = 0;
    let a = [];
    let b = [];
    for(let x of dots) {
        a.push(x[0])
        b.push(x[1])
    }
    
    console.log(a,b)
     let m = Math.max(...a) - Math.min(...a)
     let n = Math.max(...b) - Math.min(...b)
     
     answer = m*n
    return answer;
}



//     let list1 = []
//     let list2 = []
    
//     for(let x of dots) {
//         list1.push(x[0])
//         list2.push(x[1])
//     }
    
//     let x = Math.max(...list1) - Math.min(...list1)
//     let y = Math.max(...list2) - Math.min(...list2)
//     answer = x* y