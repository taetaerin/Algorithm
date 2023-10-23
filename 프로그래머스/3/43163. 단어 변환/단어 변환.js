function solution(begin, target, words) {
    var answer = 0;
    let visited = []
    let que = [];
    que.push([begin, 0])
    
    if(!words.includes(target)) return 0
    
    while(que.length) {
        console.log('que', que)
        let [a,b] = que.shift()
        console.log(a,b)
        
        if(a==target) {
            answer = b
        }
        
        for(let word of words) {
            if(!visited.includes(word)) {
                let c=0
                for(let i=0; i<word.length; i++) {
                    if(a[i] != word[i]) {
                        c += 1
                        if(c>1) break
                    }
                }
                if(c==1) {
                    que.push([word, b+1])
                    visited.push(word)
                }
            }
        }
    }
    return answer;
}