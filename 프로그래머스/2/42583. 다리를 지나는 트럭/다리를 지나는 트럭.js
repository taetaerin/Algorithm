function solution(bridge_length, weight, truck_weights) {
        let answer = 0;

    let que = new Array(bridge_length).fill(0);

    while(que.length) {
        que.shift()

        if(truck_weights.length) {
            let sum = que.reduce((a,b) => a+b)
            if(weight < sum + truck_weights[0]) {
                que.push(0)
            }else{
                let a =truck_weights.shift()
                que.push(a)
            }
        }

        answer+=1

    }
    console.log(que)
    return answer
}