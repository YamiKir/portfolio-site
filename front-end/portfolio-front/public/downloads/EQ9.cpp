#include <iostream>
#include <iomanip>
using namespace std;
bool orPrime(long long int num){
	bool Prim=false;
	long long int numbs=num;
	int factors=0;
	for(int i=1;i<=numbs/2+1;i++){
		if(!(numbs%i&&i!=1)||numbs==i) {
			factors++;
	
		}
	}
	if(factors<=2) Prim=true;
	
	return Prim;
}
int main(){
	long long sum=68472944550,curNum=1364821;
	
	while(curNum<2000000){
		curNum++;
		if(orPrime(curNum)==1) {sum+=curNum;
		cout<<curNum<<" | "<<sum<<endl;
		}
	}
	cout<<sum;
	
	
	
	return 0;
}
//1364821 | 68472944550
