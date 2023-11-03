function solution(babbling) {
    var answer = 0;
    let word = ["aya", "ye", "woo", "ma"]
    
    for(let x of babbling) {
        let babb = x
        for(let i=0; i<word.length; i++) {
            if(babb.includes(word[i].repeat(2))) break
            
            babb = babb.split(word[i]).join(' ')
            
        }
        console.log(babb)
        babb = babb.split(' ').join('')
        if(babb.length == 0) answer += 1
    }

    return answer;
}



//     for(let i=0; i<babbling.length; i++) {
//         let babb = babbling[i]
//         for(let k=0; k<word.length; k++) {
//             if(babb.includes(word[k].repeat(2))) break
            
//             babb = babb.split(word[k]).join(' ')
            
//         }
//         console.log(babb)
//         console.log(babb.split(' ').join(''))
//         if(babb.split(' ').join('').length == 0) {
//             answer += 1
//         }

//     }