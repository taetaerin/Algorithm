function solution(n) {
    var answer = 0;
    let hap = 0
    for(let i=1; i<=n; i++) {
        hap += i-1
        if(hap<n && (n-hap)%i == 0) {
            console.log(i, hap)
            answer += 1
        }
    }
    return answer;
}