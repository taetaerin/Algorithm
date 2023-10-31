function solution(players, callings) {    
    const playerMap = {};
    for(let i=0; i<players.length; i++) {
        playerMap[players[i]] = i
    }

    
    for(let i=0; i<callings.length; i++) {
        let a = playerMap[callings[i]]
        let b = players[a-1]
        players[a-1] = callings[i]
        players[a] = b
        
        playerMap[callings[i]] = a -1
        playerMap[b] = a 
    }

    return players;
}

        
        
        
        
        
        

//  for(let i=0; i<players.length; i++) {
//         playerMap[players[i]] = i;
//     }
    
//     for(i=0; i<callings.length; i++) {
//         const Inx = playerMap[callings[i]];
//         const temp = players[Inx-1]
        
//         players[Inx-1] = callings[i]
//         players[Inx] = temp;
        
//         playerMap[callings[i]] = Inx -1
//         playerMap[temp] = Inx
//     }