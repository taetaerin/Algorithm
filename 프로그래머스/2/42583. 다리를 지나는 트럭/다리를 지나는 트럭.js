function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    
    let queue = Array.from({length: bridge_length}, () => 0)
    //console.log(queue)
    
    
    while(truck_weights.length != 0) {
        queue.shift()
        let bridge_weigth = queue.reduce((a,b) => a+b)
        if(bridge_weigth + truck_weights[0] <= weight) {
            let firstTruck = truck_weights.shift()
            queue.push(firstTruck)
        }
        else {
            queue.push(0)
        }
        answer += 1
        //console.log(queue)
    }
    answer += bridge_length
    return answer
}









//     let que = new Array(bridge_length).fill(0);

//     while(que.length) {
//         que.shift()

//         if(truck_weights.length) {
//             let sum = que.reduce((a,b) => a+b)
//             if(weight < sum + truck_weights[0]) {
//                 que.push(0)
//             }else{
//                 let a =truck_weights.shift()
//                 que.push(a)
//             }
//         }

//         answer+=1

//     }
//     console.log(que)