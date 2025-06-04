/*The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.*/


#include <iostream>
#include <cmath>
using namespace std;

int main(){
	long long SquareSum=0,SquaredSum=0;
	for(int Square=1;Square<=100;Square++){
		SquareSum+=pow(Square,2);
	}
	for(int Squares=1;Squares<=100;Squares++){
		SquaredSum+=Squares;
	}
	SquaredSum=pow(SquaredSum,2);
	cout<<SquaredSum-SquareSum;
	
}
//this one was simple
