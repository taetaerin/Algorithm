function solution(my_string) {
    var answer = '';
    let s = my_string.split('')
    answer = [...new Set(s)].join('')

    return answer;
}