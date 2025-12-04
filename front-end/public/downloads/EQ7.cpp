#include <iostream>
#include <iomanip>
using namespace std;
bool orPrime(long long int num){
	bool Prim=false;
	long long int numbs=num;
	int factors=0;
	for(int i=1;i<=numbs;i++){
		if(!(numbs%i&&i!=1)||numbs==i) {
			factors++;
	
		}
	}
	if(factors<=2) Prim=true;
	
	return Prim;
}
int main(){
	long long counter=0,curNum=0;
	
	while(counter<=10001){
		curNum++;
		if(orPrime(curNum)==1) {counter++;
		cout<<curNum<<" | "<<counter-1<<endl;
		}
	}
	cout<<curNum;
	
	
	
	return 0;
}

