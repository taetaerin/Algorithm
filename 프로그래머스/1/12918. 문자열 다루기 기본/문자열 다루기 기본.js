function solution(s) {
    var answer = true
    
    if(s.length !== 4 && s.length !== 6) return false
    
    for(let i=0; i<s.length; i++) {
        if(s[i] != Number(s[i])) {
            return false
        }
    }
    



    
    return answer;
}








//     if(s.length != 4 && s.length != 6) {
//         answer = false
//     }
    
//     for(let i=0; i<s.length; i++) {
//         if(isNaN(s[i])) {
//             answer = false
//         }
//     }