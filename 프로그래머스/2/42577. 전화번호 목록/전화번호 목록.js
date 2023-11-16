function solution(phone_book) {
    var answer = true;
    phone_book = phone_book.sort()
    
    for(let i=0; i<phone_book.length-1; i++) {
        let len = phone_book[i].length 
        let next = phone_book[i+1].slice(0, len)

        if(phone_book[i] == next) {
            return false
        }
    }
    return answer;
}

