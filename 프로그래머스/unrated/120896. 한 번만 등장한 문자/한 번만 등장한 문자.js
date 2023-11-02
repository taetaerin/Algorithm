function solution(s) {
    var answer = [];
    s = s.split('')
    const word = [...new Set(s)]
    
    for(let i=0; i<word.length; i++) {
        let a = s.filter(item => item == word[i]).length
        console.log(a)
        if(a == 1) {
            answer.push(word[i])
        }
    }
    
    answer = answer.sort().join('')
    return answer;
}








//  let listSet = [...new Set(s)]
//     s = s.split('')
//     console.log(listSet)
    
//     for(let i=0; i<listSet.length; i++) {
//         let result = s.filter(item => item == listSet[i]).length
//         console.log(result)
        
//         if(result == 1) {
//             answer += listSet[i]
//         }
//     }
//     answer = answer.split('').sort().join('')
