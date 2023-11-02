function solution(emergency) {
    var answer;
    let list = new Array(emergency.length).fill(1)
    
    
    for(let k=0; k<emergency.length; k++) {
        for(let i=0; i<emergency.length; i++) {
            if(emergency[k] < emergency[i]) {
                list[k] += 1
            }
        }
    }
    console.log(list)
    answer = list
    return answer;
}







// let list = new Array(emergency.length).fill(1)
//     console.log(list)
    
//     for(let j=0; j<emergency.length; j++) {
//         for(let i=0; i<emergency.length; i++) {
//             if(emergency[j] < emergency[i]) {
//                 list[j] += 1
//             }
//         }
//     }
//      console.log(list)
//     answer = list