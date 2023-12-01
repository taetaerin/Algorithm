function solution(n,a,b) {
    var answer = 0;
    let lt = 1;
    let rt = n;
    
    while(lt < rt){
        let mid = parseInt((lt+rt)/2)
        
        if((a<=mid && b>mid) || (b<=mid && a>mid)) {
            while(n !=1) {
                n = n/2
                answer += 1
            } 
            console.log(answer)
            break;
        }
        
        else if(a<=mid && b<=mid) {
            rt = mid
        }
        else if(a>mid && b>mid) {
            lt= mid+1
        }
        //answer += 1

        
        n = n/2
        
    }

    return answer;
}