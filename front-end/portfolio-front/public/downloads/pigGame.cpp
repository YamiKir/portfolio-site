//A game of PIG (really old code c2020) 
#include <iostream>
#include <ctime>
#include <cstdlib>
#include<conio.h>
using namespace std;

int main(){
int temptotal=0, totaltwo=0,totalone=0,roll;
char playerinput;
cin>>playerinput;
if (playerinput=='y'){
cout<<"hey pigs 1 and 2 \n roll the dice (r)\n if you want to stop turn (s)\n end game (g)\n";
while (playerinput!='g'&&totalone!=100&&totaltwo!=100){
cout<<"Player 1\n";
do{
if (roll==1||playerinput=='s') {
roll=0;
temptotal=0;}
else srand(time(0));
roll=rand()%6+1;
cout<<roll<<endl;
temptotal+=roll;
cin>>playerinput;
if (roll==1) {
playerinput='s';
roll=0;}
cout<<"temp total"<<temptotal+totalone<<endl;
if (temptotal+totalone>=100||temptotal+totaltwo>=100) playerinput=='g';
}while (playerinput!='s'&&playerinput!='g'&&playerinput=='r'&&roll!=1);
totalone+=temptotal;

cout<<"Player 2\n";
do{
if (roll==1||playerinput=='s') {
roll=0;
temptotal=0;}
else srand(time(0));
roll=rand()%6+1;
cout<<roll<<endl;
temptotal+=roll;
cin>>playerinput;
cout<<"temp total"<<temptotal+totaltwo<<endl;
if (roll==1) {
playerinput='s';
roll=0;}
if (temptotal+totalone>=100||temptotal+totaltwo>=100) playerinput=='g';
}while (playerinput!='s'&&roll!=1&&playerinput=='r'&&playerinput!='g');
totaltwo+=temptotal;
}
}
return 0;
}
