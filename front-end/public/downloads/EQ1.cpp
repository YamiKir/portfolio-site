#include <iostream>
using namespace std;
int main(){
	int natSum=0;
    for(int cNat=1; cNat<1000; cNat ++ ){
        if (( cNat%3==0) || ( cNat%5==0))
            natSum+= cNat ;
    }
    cout << natSum << endl;
}


