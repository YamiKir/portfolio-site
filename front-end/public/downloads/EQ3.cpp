
#include <iostream>
#include <iomanip>
using namespace std;

int main(){
	long long primeTimes=0,nInp;
	cout<<"input a number\n";
	cin>>nInp;
	for (long long i= 1;i<=nInp/2;i+=2){
	if ((i%3||i==3)){
		if ((i%5||i==5)){
			if ((i%7||i==7)){
				if ((i%13||i==13)){
					if ((i%11||i==11)){
				if ((i%17||i==17)){
					if ((i%19||i==19)){
					
			//	cout<<i<<"is a prime number\n";
		if (600851475143%i==0)primeTimes=i;
		
		}
		}
}}}}

	}
		cout<<primeTimes<<"is a prime of the input\n";}
	cout<<primeTimes<<"largest prime factor of "<<nInp<<endl;
}
// jerry-rigged to calculate 
