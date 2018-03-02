#include <stdio.h>
#include <stdlib.h>

int main()
{
    int m,n;
   for( int i=1;i < 99; i++){
 		for(int j=1;j < 99; j++){
          printf("#t-%d-l-%d{position: absolute;top: %d%%; left: %d%%;}"
          ,i,j,i,j);
          printf("\n");
 		}
   }
    return 0;
}
