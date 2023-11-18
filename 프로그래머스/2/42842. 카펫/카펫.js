function solution(brown, yellow) {
    
    for(let bh=1; bh<parseInt(brown/2); bh++) {
        let bw = parseInt((brown-(2*bh)+4)/2)
        let yh = bh-2, yw = bw-2
        if(yellow == yh*yw && brown+yellow == bh*bw) {
            return [bw, bh]
        }
    }

}