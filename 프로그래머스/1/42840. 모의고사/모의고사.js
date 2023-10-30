function solution(answers) {
    var answer = [];
    arr1 = [1, 2, 3, 4, 5]
    arr2 = [2, 1, 2, 3, 2, 4, 2, 5]
    arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    score = [0,0,0]
    
    for(let i=0; i<answers.length; i++) {
        if(answers[i] == arr1[i % arr1.length]) {
            score[0] += 1
        }
        if(answers[i] == arr2[i % arr2.length]) {
            score[1] += 1
        }
        if(answers[i] == arr3[i % arr3.length]) {
            score[2] += 1
        }
    }
    
    let maxNum = Math.max(...score)
    
    for(let i=0; i<score.length; i++) {
        if(maxNum == score[i]) {
            answer.push(i+1)
        }
    }
    
    return answer;
}