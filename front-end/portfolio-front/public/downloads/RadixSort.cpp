#include <iostream>
#include <cmath>
using namespace std;

//Radix Sort Programming Assignment specifications
//Due on Thursday, 2/25/21

//Input an array of at least 6 integers, each with 4 digits
//Write a function that is capable of performing any of the 4 passes
//Display the bins as a two-dimensional table at the end of each pass
//Display the list array at the end of each pass
//Finally Display the sorted list at the end of the entire sort

int const MAX=6;
void RadSort(int list[],int passCount);
int main(){
	int passer, numb[MAX];
	char choice='a';
	while(choice!='Q'&&choice!= 'q'){
	cout<<"Please input six 4-digit numbers:\n";
	for(int i=0;i<MAX;i++){
		cin>>numb[i];
	}
	cout<<"Which pass do you want to preform? (1-4)?: ";
	cin>>passer;
	RadSort(numb,passer-1);
	cout<<"Press Q to Quit. Press any other key to continue!\n";
	cin>>choice;
}
	return 0;
}
void RadSort(int list[],int passCount){
	int bins[10][MAX];
	int digit;
	int counter[10];

	//no numbers in bins
	for(int round=0;round<=passCount;round++){
		for(int i=0;i<10;i++){
			counter[i]=0;
		}
		//digit extraction
		for(int i=0;i<MAX;i++){
			digit=(list[i]/int(pow(10,round)))%10;
			bins[digit][counter[digit]++]=list[i];	
		}
		
		//collect bins
		cout<<"These are the bins: \n";
		int j=0;
		for(int i=0;i<10;i++){
			cout<<i<<": ";
			for(int k=0;k<counter[i];k++){
				cout<<bins[i][k]<<" | ";
				list[j]=bins[i][k];
				j++;
			}
			cout<<endl;
			
	}
	cout<<"This is the new List: \n";
			for(int j=0;j<MAX;j++){
		cout<<list[j]<<endl;
		}
	}
}

