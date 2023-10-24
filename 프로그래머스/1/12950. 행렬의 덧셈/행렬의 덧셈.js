function solution(arr1, arr2) {
    var answer = []
    for(let i=0; i<arr1.length; i++) {
        let list=[]
       for(let k=0; k<arr1[0].length; k++) {
            list.push(arr1[i][k] + arr2[i][k])
       }
        answer.push(list)
    }


    return answer;
}