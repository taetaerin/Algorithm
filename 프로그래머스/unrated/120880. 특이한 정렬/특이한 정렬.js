function solution(numlist, n) {
    var answer = [];
    let list = []
    for(let i=0; i<numlist.length; i++) {
        let a = n - numlist[i] 
        list.push({num: numlist[i], minus:Math.abs(a)})
    }
    
    list.sort((a,b) => {
        if(a.minus < b.minus) {
            return -1
        }
        if(a.minus > b.minus) {
            return 1
        }
        
        if(a.minus == b.minus) {
            return b.num - a.num
        }
    
    })
    console.log(list)
    answer = list.map(i => i.num)
    console.log(answer)
    return answer;
}