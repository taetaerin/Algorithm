function solution(phone_number) {
    var answer = '';
    let a = phone_number.slice(0, -4)
    a = '*'.repeat(a.length)
    answer = a+phone_number.slice(-4)
    return answer;
}