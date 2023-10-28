function solution(arr) {
    var answer = [];
    
    if(arr.length != 1) {
        let minIdx = arr.indexOf(Math.min(...arr))
        console.log(minIdx)
        arr.splice(minIdx, 1)
        answer = arr
    }else {
        answer.push(-1)
    }
    return answer;
}