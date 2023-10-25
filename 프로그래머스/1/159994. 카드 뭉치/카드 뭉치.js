function solution(cards1, cards2, goal) {
    var answer = 'Yes';
    
    for(let x of goal) {
        if(x === cards1[0]) {
            cards1.shift()
        }
        else if(x === cards2[0]){
            cards2.shift()
        }
        else answer = 'No'
    }
   
    return answer;
}