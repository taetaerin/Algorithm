function solution(id_pw, db) {
    var answer = 'fail';
    
    for(let x of db) {
        let [a, b] = x
        if(a == id_pw[0]) {
            answer = "wrong pw"
            if(b==id_pw[1]) {
                answer = "login"
            }
        }
    }
    return answer;
}






// for(let x of db) {
//         if(x[0] == id_pw[0]) {
//             console.log('a')
//             if(x[1] == id_pw[1]) {
//                 return "login"
//             }else {
//                 return "wrong pw"
//             }
//         }else{
//             answer = 'fail'
//         }
//     }