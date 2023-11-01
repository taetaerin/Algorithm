function solution(array) {
    var answer = 0;
    let list = new Array(Math.max(...array)+1).fill(0)
    console.log(list)
    
    for(let i=0; i<array.length; i++) {
        list[array[i]] += 1
    }
    console.log(list)
    
    if(list.indexOf(Math.max(...list)) !== list.lastIndexOf(Math.max(...list))) {
        return -1
    }else {
        answer = list.indexOf(Math.max(...list))
    }
    return answer;
}

//     if (newArray.indexOf(Math.max(...newArray)) !== newArray.lastIndexOf(Math.max(...newArray))) {
//         return -1
//     } else {
//         return newArray.indexOf(Math.max(...newArray));
//     };
// }