#include <iostream>
using namespace std;

int main(){
	
	char name[4][4];
	bool biol;
	
	for(int i=0;i<5;i++){
		for(int j=0;j<5;j++){
			name[i][j]='2';
		}
		
		if ((name[2][1])==(name[1][2])) biol=true;
		if(biol) cout<<"rabit";
	}
}
