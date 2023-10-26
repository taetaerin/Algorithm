function solution(nums) {
    var answer = 0;
    let limit = nums.length/2

    nums = [...new Set(nums)]

    if(nums.length > limit) {
        answer = limit
    }else {
        answer = nums.length
    }

    return answer;
}