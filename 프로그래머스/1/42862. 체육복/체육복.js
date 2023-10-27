function solution(n, lost, reserve) {
    var answer = 0;
    let lostSet = lost.filter(item => !reserve.includes(item)).sort()
    let reserveSet = reserve.filter(item => !lost.includes(item)).sort()
    console.log(lostSet, reserveSet)
    
    for(let i=0; i<reserveSet.length; i++) {
        if(lostSet.includes(reserveSet[i] -1)) {
            lostSet = lostSet.filter(item => item !== reserveSet[i] - 1)
        }
        else if(lostSet.includes(reserveSet[i] +1)) {
            lostSet = lostSet.filter(item => item !== reserveSet[i] + 1)
        }
    }
    
    answer = n - (lostSet.length)
    
    
    
    return answer;
}