#include<iostream>
using namespace std;

const int MAX=6;
int main(){
	
	int list[MAX];
	
	int bins[10][MAX];
	
	int digit;
	
	//int counter1,counter2,.....counter10;
	int counter[10];
	
	for(int i=0;i<MAX;i++){
		cin>>list[i];
	}
	//no numbers in bins
	for(int i=0;i<10;i++){
		counter[i]=0;
	}
	//units digit
	for(int i=0;i<MAX;i++){
		digit=list[i]%10;
		bins[digit][counter[digit]++]=list[i];	
	}
	//collect bins
	int j=0;
	for(int i=0;i<10;i++){
		for(int k=0;k<counter[i];k++){
			list[j]=bins[i][k];
			j++;
		}
		
	}
		for(int j=0;j<MAX;j++){
		cout<<list[j]<<endl;
	}
	cout<<endl<<endl;
		//tens digit
	for(int i=0;i<MAX;i++){
		digit=list[i]/10%10;
		bins[digit][counter[digit]++]=list[i];
		
	}
	//collect bins
		j=0;
	for(int i=0;i<10;i++){
		for(int k=0;k<counter[i];k++){
			list[j]=bins[i][k];
			j++;
		}
		
	}
	for(int j=0;j<MAX;j++){
		cout<<list[j]<<endl;
	}
	return 0;
	
	
	
	
	
	
}


//Radix Sort Programming Assignment specifications
//Due on Thursday, 2/25/21

//Input an array of at least 6 integers, each with 4 digits
//Write a function that is capable of performing any of the 4 passes
//Display the bins as a two-dimensional table at the end of each pass
//Display the list array at the end of each pass
//Finally Display the sorted list at the end of the entire sort

