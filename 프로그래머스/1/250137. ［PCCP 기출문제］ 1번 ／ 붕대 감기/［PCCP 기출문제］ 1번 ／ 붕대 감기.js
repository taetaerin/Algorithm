function solution(bandage, health, attacks) {
    var answer = 0;
    let end = attacks[attacks.length-1][0]
    let attackTime = attacks.map((item) => item[0])
    let current_health = health
    let count = 0
    let k = 0;
    console.log(attackTime)
    console.log(end)
    
    for(let i=1; i<=end; i++) {
        if(current_health <= 0) {
            return -1
        }
        //공격받을 때
        if(attackTime.includes(i)) {
            current_health -= attacks[k][1]
            k++
            count = 0

        }
        else {
            count += 1
            current_health = Math.min(health, current_health+bandage[1])
            if(count == bandage[0]) {
                current_health = Math.min(health, current_health+bandage[2])
                count = 0
            }
        }
        console.log('time', i)
        console.log('current_health', current_health)
        console.log('count', count)


    }
    answer = (current_health <=0) ? -1 : current_health
    return answer;
}