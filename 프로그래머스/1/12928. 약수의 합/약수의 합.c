#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int n) {
    int answer = 0;
    int i;
    
    for(i=1; i<=n; i++) {
        if(n%i == 0)
        {
            answer += i;
        }
    }
    
    return answer;
}