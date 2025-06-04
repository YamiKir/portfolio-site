#include <iostream>
using namespace std;

int fibN(int n, int nMinus1);

int counter=0;

int main(){
	fibN(1,0);
	
	
	
	
}

int fibN(int n, int nMinus1){
	while(counter!=20){
	int fibSum;
	cout<<"Entering Fib Function with N= "<<n<< " and nMinus= "<<nMinus1<<endl;
	fibSum=n+nMinus1;
	cout<<"Leaving fib with fibSum= "<<fibSum<<endl;
	cout<<counter<<endl;
	counter++;
	return fibN(fibSum,n);
}
}
