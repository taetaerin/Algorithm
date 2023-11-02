function solution(spell, dic) {
    var answer = 2;
    
    for(let x of dic) {
        let a = 0
        for(let i=0; i<spell.length; i++) {
            if(x.includes(spell[i])) {
                a+= 1
            }
        }
        console.log(a)
        if(a === spell.length) {
            return 1
        }
    }
    
    
    return answer;
}