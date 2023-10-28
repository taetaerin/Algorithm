function solution(phone_number) {
    var answer = '';
    let first = phone_number.slice(0, -4)
    first = '*'.repeat(first.length)
    answer = first+phone_number.slice(-4)
    return answer;
}