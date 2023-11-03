function solution(str_list) {
    var answer = [];
    
    for(let x of str_list) {
        if(x=='l') {
            let idx = str_list.indexOf('l')
            answer = str_list.slice(0, idx)
            break
        }
        if(x == 'r') {
            let idx = str_list.indexOf('r')
            answer = str_list.slice(idx+1)
            break
        }
    }
    return answer;
}