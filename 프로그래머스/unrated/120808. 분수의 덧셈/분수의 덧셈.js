function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    denom = denom1 * denom2
    numer = (denom2 * numer1) + (denom1 * numer2)
    let num = 0;
    console.log(denom, numer)
    
    for(let i=1; i<=numer; i++) {
        if(denom%i==0 && numer%i==0) {
            num = i
        }
    }
    answer = [numer/num , denom/num]
    return answer;
}