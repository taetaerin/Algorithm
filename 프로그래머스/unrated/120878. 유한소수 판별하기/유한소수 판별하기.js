function solution(a, b) {
    var answer = 2;
    //기약분수
    for(let i=1; i<=b; i++) {
        if(a%i == 0 && b%i== 0) {
            a = a / i
            b = b / i
        }
    }
    console.log(a,b)

    //2의 배수 또는 5의 배수
    while (b%2 == 0) {
        b = b/2
    }
    
    while(b%5 == 0) {
        b = b/5
    }
    
    if(b == 1) {
        return 1
    }
    return answer;
}