function solution(babbling) {
    var answer = 0;
    let word = ["aya", "ye", "woo", "ma"]
    for(let x of babbling) {
        let a = x 
        for(let i=0; i<word.length; i++) {
            a = a.split(word[i]).join(' ')
        }
        a = a.split(' ').join('')
        if(a.length == 0) answer += 1
        console.log(a)
        
        
 
    }
    
    return answer;
}


       // a = a.replace('aya', ' ')
       //  a = a.replace('ye', ' ')
       //  a = a.replace('woo', ' ')
       //  a = a.replace('ma', ' ')
       //  console.log(a.split(' '))
       //  a = a.split(' ').join('')
       //  //console.log(a)
       //  if(a.length == 0) {
       //      answer += 1
       //  }