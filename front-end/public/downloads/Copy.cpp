#include <iostream>
#include <sstream>
#include <cstring>
#include <stdlib.h>
using namespace std;
int main(){
	int i=0;
	string nut ="COPY C:\\Users\\Koby\\Desktop\\NotAVirus";
	stringstream strs;
	string command;
	string cum=".exe C:\\Users\\Koby\\Desktop\\test";
	string num;
	while(i<=5){
	strs << i;
  	string num= strs.str();
	command=nut+num;
	command=command+cum;
	cout<<command;
	system(command);
	i++;
}
}
