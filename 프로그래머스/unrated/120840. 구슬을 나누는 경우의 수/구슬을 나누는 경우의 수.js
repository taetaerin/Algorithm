function solution(balls, share) {
    var answer = 0;

    function result(num) {
        let n = 1;
        for(let i=1; i<=num; i++) {
            n *= i
        }
        return n
    }

    answer = result(balls) / (result(balls-share) * result(share))
    
    return Math.round(answer);
}