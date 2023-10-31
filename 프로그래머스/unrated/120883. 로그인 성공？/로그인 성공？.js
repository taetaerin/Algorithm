function solution(id_pw, db) {
    var answer = '';
    
    for(let x of db) {
        if(x[0] == id_pw[0]) {
            console.log('a')
            if(x[1] == id_pw[1]) {
                return "login"
            }else {
                return "wrong pw"
            }
        }else{
            answer = 'fail'
        }
    }
    return answer;
}