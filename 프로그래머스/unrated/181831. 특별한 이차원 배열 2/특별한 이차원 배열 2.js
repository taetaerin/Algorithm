function solution(arr) {
    var answer = 1;
    for(let i=0; i<arr.length; i++) {
        for(let k=0; k<arr[i].length; k++) {
            if(arr[i][k] != arr[k][i]) {
                answer = 0
            }
        }
    }
    return answer;
}