function solution(s, skip, index) {
    var answer = '';
    const eng = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"].filter(item => !skip.includes(item));
     
    s = s.split('').map((item) => eng[(eng.indexOf(item) + index) % eng.length] )
    answer = s.join('')
    
    return answer;
}