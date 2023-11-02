function solution(sides) {
    var answer = 0;
    sides = sides.sort((a,b) => a-b)
    let sidesMax = sides[1]
    let num = sides[0]
    
    console.log(num, sidesMax)
    
    for(let i=1; i<sidesMax; i++) {
        if(i+num > sidesMax) {
            answer += 1
        }
    }
    
    for(let i=sidesMax; i< sidesMax+num; i++) {
        if(num+sidesMax > i) {
            answer += 1
        }
    }
    return answer;
}