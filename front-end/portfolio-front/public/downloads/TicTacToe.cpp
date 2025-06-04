#include<iostream>
using namespace std;
bool didWin(char ttt[3][3],char sym){
	bool didWinz=false;
	cout<<sym<<endl;
if (sym==(ttt[0][0])&&sym==(ttt[0][1])&&sym==(ttt[0][2])) didWinz=true;
if (sym==(ttt[1][0])&&sym==(ttt[1][1])&&sym==(ttt[1][2])) didWinz=true;
if (sym==(ttt[2][0])&&sym==(ttt[2][1])&&sym==(ttt[2][2])) didWinz=true;
if (sym==(ttt[0][0])&&sym==(ttt[1][0])&&sym==(ttt[2][0])) didWinz=true;
if (sym==(ttt[0][1])&&sym==(ttt[1][1])&&sym==(ttt[2][1])) didWinz=true;
if (sym==(ttt[0][2])&&sym==(ttt[1][2])&&sym==(ttt[2][2])) didWinz=true;
if (sym==(ttt[0][0])&&sym==(ttt[1][1])&&sym==(ttt[2][2])) didWinz=true;
if (sym==(ttt[0][2])&&sym==(ttt[1][1])&&sym==(ttt[2][0])) didWinz=true;
	return didWinz;
}

int main(){
	char board[3][3];
	
	bool player1=false;
	bool player2=false;
	bool win=false;
	bool goAgain=false;
	int row,col;
	char sym,winner;
	//toss a coin
	//player2 first  ---> X
	//player1 --->O
	//refresh board
	
	for(int i=0;i<3;i++){
		for(int j=0;j<3;j++){
			board[i][j]='@';
		}
	}
	player1=true;
	do{
		
	   if(player1&&goAgain==0){
	   	do{
	   		int rowNum=0;
	   		while (rowNum<=2){
	   		cout<<board[rowNum][0]<<"||"<<board[rowNum][1]<<"||"<<board[rowNum][2]<<endl;
	   			rowNum++;
			   } 
	   		cout<<"pick a cell (p1)\n";
	   		
	   	  cin>>row>>col;
	   	  //add input validation to make sure this is an integer
	   	
	   	  if(board[(int)row][(int)col]=='@'){
	   	  		board[row][col]='O';
	   	  		goAgain=0;
	   	  		 	sym='O';
	   		win=didWin(board,'O');
			 }
			 
			 else {
		  	   cout<<"Choose a different cell\n";
		  	   goAgain=1;
		  }
		  
		  
		  	for(int i=0;i<3;i++){
			for(int j=0;j<3;j++){
			cout<<board[i][j]<<" | ";
		
		} cout<<endl;
	}
		}while(goAgain!=0&&win==false);
	   	player1=false;
	   	player2=true;
	  	cout<<"win: "<<win<<endl;
	   	if(win&&winner!='X') {
	   			cout<<"Player One Won!!!\n";
	   			winner='O';
	   			player2=false;
		   }
	   }
	  
	   if(player2&&goAgain==0){
	   		do{
	   			int rowNum=0;
	   		while (rowNum<=2){
	   			cout<<board[rowNum][0]<<"||"<<board[rowNum][1]<<"||"<<board[rowNum][2]<<endl;
	   			rowNum++;
			   } 
	   	cout<<"pick a cell (p2)\n";
	   	  cin>>row>>col;
	   	  if(board[row][col]=='@'){
	   	  		board[row][col]='X';
	   	  		goAgain=0;
	   	  	 	sym='X';
	   			 win=didWin(board,'X');
			 }
			 
		  else {
		  	   cout<<"Choose a different cell\n";
		  	   goAgain=1;
		  }
		  for(int i=0;i<3;i++){
		for(int j=0;j<3;j++){
			cout<<board[i][j]<<" | ";
		} cout<<endl;
	   }}while(goAgain!=0&&win==false);}
	   player1=true;
	   player2=false;
	  cout<<"win: "<<win<<endl;
		
	 	if(win&&winner!='O') {
	   		cout<<"Player Two Won!!!\n";
	   		player1=false;
	   		winner=='X';
	   		
		   }
	   	
		
	}while(win==false);
}

//working fully as of 8/8/20


