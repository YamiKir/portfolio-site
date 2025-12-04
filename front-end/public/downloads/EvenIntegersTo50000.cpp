//add all even ints 0->50000

#include <iostream>
using namespace std;

int main(){
	long long sum=0, augend=2;
	int counter=0;
	while(augend<=50000){
		sum+=augend;
		augend+=2;
	}
	cout<<sum<<" is the sum\n"<<augend-2<<" was the last augend";
}
