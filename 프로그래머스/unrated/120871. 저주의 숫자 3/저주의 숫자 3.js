function solution(n) {
    var answer = 0;
    let list = []
    let list2 = []
    
    for(let i=1; i<= 10000; i++) {
        list.push(i)
    }
    
    let a = list.filter(item => item%3 !==0)
    for(let x of a) {
        if(!String(x).includes('3')) {
            list2.push(x)
        }
    }
    console.log(list2)
    
    answer = list2[n-1]
    return answer;
}






//     let list = []
    
//     for(let i=1; i<=100000; i++) {
//         list.push(i)
//     }
    
//     list = list.filter((item) => !(String(item).includes('3') || item%3==0))
//     console.log(list)
    
//     answer = list[n-1]