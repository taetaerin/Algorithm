function solution(chicken) {
    var answer = 0;
    let cou = chicken;
    
    while(cou >= 10) {
        answer += parseInt(cou / 10)
        cou = parseInt(cou / 10) + parseInt(cou % 10)
    }
    
    return answer;
}








//    while(cou >= 10) {
//         chicken = parseInt(cou/10)
//         cou = chicken + parseInt(cou%10)
//         answer += chicken
//         console.log(chicken, cou)
//     }
//     console.log(answer)
    