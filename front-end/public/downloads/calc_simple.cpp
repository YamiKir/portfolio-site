#include <iostream>
#include <GLUT.h>
#include <cmath>

using namespace std;






double add(double x, double y){
	
	return x+y;
}
double sub(double x, double y){
	
	return x-y;
}
double times(double x, double y){
	
	return x*y;
}
double div(double x, double y){
	return y/x;
}
double power(double x, double y){
	
	return pow(x,y);
}
double root(double x, double y){
	
		return pow(x,1.0/y);
}







int main(int i=0){
	
	
	while(true){
	double x,y;
	cout<<"Calc Cycle:" <<(i++)<<endl;
	cin>>x>>y;
	
	cout<<add(x,y)<<endl;
	cout<<sub(x,y)<<endl;
	cout<<times(x,y)<<endl;
	cout<<div(x,y)<<endl;
	cout<<power(x,y)<<endl;
	cout<<root(x,y)<<endl;
	
	
	
}
	
	
	
	
	
	
}


