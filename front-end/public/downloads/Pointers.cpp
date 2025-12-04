  #include<iostream>
using namespace std;

//create a pointer to a variable

int main(){

int x=2;
	while(x>1){	
	int num1;
	
	int *p;
	
	num1=22;
	
	p=&num1;
	
	cout<<"Address of variable num1 = "<<&num1<<endl;
	cout<<"Address of variable p = "<<p<<endl;
	
	cout<<"Value of pointer p = "<<*p<<endl;
	
	p=new int;
	
	cout<<"New Address of variable p = "<<p<<endl;
	cout<<"New Value of pointer p = "<<*p<<endl;
	

		cin>>x;
	}
	
	//delete *p;
	
	return 0;
}
