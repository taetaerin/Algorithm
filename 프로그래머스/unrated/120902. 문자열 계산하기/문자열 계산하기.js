function solution(my_string) {
    
    let word = my_string.split(' ')
    console.log(word)

    let answer = Number(word[0]);
    console.log(answer)

    for(let i=1; i<word.length; i++) {
        if(word[i] == '+') {
            answer += Number(word[i+1])
        }
        if(word[i] == '-') {
            answer -= Number(word[i+1])
        }
    }
    
    console.log(answer)

    return answer;
}



//     let a = my_string.split(' ')
//     var answer = Number(a[0]);
    
//     for(let i=0; i<a.length; i++) {
   
//         if(a[i] == '+') {
//             answer += Number(a[i+1])
//             console.log(answer)
//         }
//         if(a[i] == '-') {
//             answer -=  Number(a[i+1])
//             console.log(answer)
//         }
//     }