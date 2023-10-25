function solution(nums) {
    var answer = 0;
    const a = Math.floor(nums.length / 2)
    console.log(a)
    
    nums = [...new Set(nums)]
    console.log(nums)
    if(nums.length > a) answer = a
    else answer = nums.length
    return answer;
}