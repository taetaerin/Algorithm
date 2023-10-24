function solution(sizes) {
    var answer = 0;
    let maxnum =[];
    let minnum = [];
    sizes = sizes.map(item => item.sort((a,b) => b-a))
    for(let x of sizes) {
        maxnum.push(x[0])
        minnum.push(x[1])
    }
    console.log(maxnum, minnum)
    answer = Math.max(...maxnum) * Math.max(...minnum)
    return answer;
}