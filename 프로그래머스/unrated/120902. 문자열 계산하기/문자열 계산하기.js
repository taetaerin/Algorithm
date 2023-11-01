function solution(my_string) {

    let a = my_string.split(' ')
    var answer = Number(a[0]);
    
    for(let i=0; i<a.length; i++) {
   
        if(a[i] == '+') {
            answer += Number(a[i+1])
            console.log(answer)
        }
        if(a[i] == '-') {
            answer -=  Number(a[i+1])
            console.log(answer)
        }
    }
    return answer;
}