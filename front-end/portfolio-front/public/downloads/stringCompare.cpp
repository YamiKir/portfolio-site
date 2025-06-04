#include <iostream>
#include <cstring>
using namespace std;

	const int MAX=20;
	typedef char array[20];
	int main(){
	array word;
	string same="False";
	int sum=0;
	cout<<"This program is designed to test if two strings are essentially equivalent. \n";
	cout<<"Insert a word for the test: ";
	cin>>word;
	array word2;
	cout<<"Insert a second word for the test: ";
	cin>>word2;
	int length=strlen(word);
	int l2ength=strlen(word2);
	
	for( int i=0; i<length; i++){
		if((word[i]>=97) && (word[i]<=122)){
			word[i]=word[i]-32;
		}
	}
	for( int i=0; i<l2ength; i++){
		if((word2[i]>=97) && (word[i]<=122)){
			word2[i]=word2[i]-32;
		}
	}
	if(l2ength==length){
		for( int i=0; i<l2ength; i++){
			if(word[i]!=word2[i]){
			sum+=1;
			}
		
		}
		}
	
	if(sum<1&&l2ength==length) same="True";	
	cout<<"word1: "<< word<< " word2: "<< word2<< " ruling: "<<same ;
		
	}

	
	
	
	
	


