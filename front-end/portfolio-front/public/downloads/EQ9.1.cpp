#include <iostream>
#include <cmath>
using namespace std;
int main(){

int a,b=1,abc=0,sum=0;
float c;

while(abc!=1000){
	for(a=0;a<b;a++){
		c=a*a+b*b;
		c=sqrt(c);
		abc=a+b+c;
		cout<<abc<<" is the current attempt"<<endl;
		if(abc==1000) {
			sum=a*b*c;
			cout<<"a:"<<a<<"|b:"<<b<<"|c:"<<c<<"   "<<abc<<" should be 1000"<<"product:"<<sum;
			return sum;
		}
	
	}
	b++;
	cout<<sum<<"is the answer"<<endl;
}
}
