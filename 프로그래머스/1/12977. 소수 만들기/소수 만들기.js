function solution(nums) {
    var answer = 0;
    let list = []
    
    for(let i=0; i<nums.length; i++) {
        let hap = 0
        for(let j=i+1; j<nums.length; j++) {
            for(let k=j+1; k<nums.length; k++) {
                hap = nums[i]+nums[j]+nums[k]
                list.push(hap)
            }
        }
    }
    
    for(let x of list) {
        let cnt = 0;
        for(let i=1; i<=Math.sqrt(x); i++) {
            if(x%i == 0) {
                cnt +=2
                if(x%i == i) {
                    cnt -=1
                }
            }
        }
        if(cnt == 2) answer += 1   
    }
        
    return answer;
}