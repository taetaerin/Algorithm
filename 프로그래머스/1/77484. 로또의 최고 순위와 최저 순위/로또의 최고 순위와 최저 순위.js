function solution(lottos, win_nums) {
    var answer = [];
    
    const dd = {
        0:6,
        1:6,
        2:5,
        3:4,
        4:3,
        5:2,
        6:1
    }
    
    let corr = 0;
    let zero = 0;
    
    for(let x of lottos) {
        if(win_nums.includes(x)) {
            corr += 1
        }
        if(x == 0) {
            zero += 1
        }
    }
    

    console.log(corr, zero)
    answer.push(dd[corr+zero], dd[corr])
    return answer;
}