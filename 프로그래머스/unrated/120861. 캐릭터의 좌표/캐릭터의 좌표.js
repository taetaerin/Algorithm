function solution(keyinput, board) {
    var answer = [];
    let a = [0, 0]
    for(let i=0; i<keyinput.length; i++) {
        if(keyinput[i] == 'left') {
            a[0] -= 1
        }
        if(keyinput[i] == 'right') {
            a[0] += 1
        }
        if(keyinput[i] == 'up') {
            a[1] += 1
        }
        if(keyinput[i] == 'down') {
            a[1] -= 1
        }
            if(a[0] > parseInt(board[0] / 2)) {
        a[0] = parseInt(board[0] / 2)
    }
    if(a[0] < -parseInt(board[0] / 2)) {
        a[0] = -parseInt(board[0] / 2)
    }
    if(a[1] > parseInt(board[1] / 2))  {
        a[1] = parseInt(board[1] / 2)
    }
    if(a[1] < -parseInt(board[0] / 2)) {
        a[1] = -parseInt(board[1] / 2)
    }

    }
  

    
    answer = a
    return answer;
}