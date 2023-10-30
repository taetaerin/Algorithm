function solution(nums) {
    var answer = 0;
    let list =[]
    for(let i=0; i<nums.length; i++) {
        for(let j=i+1; j<nums.length; j++) {
            for(let k=j+1; k<nums.length; k++) {
                list.push(nums[i] + nums[j] + nums[k])
            }
        }
    }
    
    console.log(list)
    
    for(let i=0; i<list.length; i++) {
        let a = 0
        for(let k=1; k<=Math.sqrt(list[i]); k++) {
            if(list[i] % k == 0) {
                a += 2
                if(list[i] / k == k) {
                    a -= 1
                }
            }
        }
        if(a == 2) {
            answer += 1
        }
    }
    return answer;
}