function solution(babbling) {
    var answer = 0;
    let words = ['aya', 'ye', 'woo', 'ma']
    
    for(let i=0; i<babbling.length; i++) {
        let babb = babbling[i];
        
        for(let k=0; k<words.length; k++) {
            if(babb.includes(words[k].repeat(2))) {
                break;
            }
            babb = babb.split(words[k]).join(" ")
        }
       if(babb.split(" ").join("").length === 0){
            answer ++
        }
    }
    return answer;
}