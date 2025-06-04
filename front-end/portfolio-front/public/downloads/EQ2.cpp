#include <iostream>
using namespace std;

int main(){
	long long Fsum=2,T1=1,T2=2,T3=0,Ts;

	do{
		T3=T1+T2;
		if(T3%2==0)Fsum+=T3;
		Ts=T3;
		T1=T2;
		T2=Ts;
		
		
	}while(T1<4000000);
	cout<<Fsum;
	
}
