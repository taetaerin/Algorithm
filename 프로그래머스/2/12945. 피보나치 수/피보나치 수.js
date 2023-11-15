function solution(n) {
    var answer = 0;
    let dp = new Array(n+1).fill(-1)
    dp[0] = 0
    dp[1] = 1
    
    for(let i=2; i<=n; i++) {
        dp[i] = (dp[i-2] + dp[i-1]) % 1234567
    }
    
    answer = dp[n]
    return answer;
}