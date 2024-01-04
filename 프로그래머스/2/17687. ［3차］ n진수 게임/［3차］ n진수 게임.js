function solution(n, t, m, p) {
    var answer = '';
    let list = []
    let alpa = {10: 'A' , 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F'}
    
    for(let i=0; i<t*m; i++) {
        let num = i.toString(n)
        // if(i>=10 && i<=15) {
        //     //list.push(alpa[i])
        // }else {
        //     for(let x of num) {
        //         list.push(x)
        //     }
        // }
        for(let x of num) {
            list.push(x)
        }
    }

    console.log(list)

    
    for(let i=0; i<t; i++) {
        answer += list[(m*i) + (p-1)]
    }
    
    //console.log(answer.toUpperCase())
    
    return answer.toUpperCase();
}