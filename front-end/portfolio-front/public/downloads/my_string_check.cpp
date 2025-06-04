#include<iostream>
#include <cstring>
using namespace std;

const int MAX=100;

class MyString{
	
	private:
		char str[MAX];
		int length;
	public:
		
		MyString(); //default constr
		MyString(char word[]);
		void setString(char word[]);
		void setLength(int len);
		char* getString();
		int getLength();
	    MyString copyString(MyString s);
	
	
};

MyString::MyString(){
	strcpy(str,"AAA");
	length=strlen(str);	
}

MyString::MyString(char word[]){
	strcpy(str,word);
	length=strlen(str);
}
void MyString::setString(char word[]){
	strcpy(str,word);
}
void MyString::setLength(int len){
	length=len;
}
char* MyString::getString(){
	return str;
	
}
int showMenu(){
	int choice;
	cout<<"1. Input a string:\n2. Output a string\n3. See if 2 strings are equal\n4. See if 2 strings are unequal\n5. See if 1 string is < than second\n6. See if 1 string is > than second\n7. See if 1 string is >= than second\n8. See if 1 string is <= than second\n9. Add 2 strings\n";
	cin>>choice;
	return choice;
}

int MyString::getLength(){
	return length;	
}

MyString MyString::copyString(MyString s){
	strcpy(str,s.getString());
	length=s.getLength();	
	return *this;
}

//non member functions
//MyString add2Strings(MyString s1, MyString s2);
int length(MyString s);
//bool compare2Strings(MyString s1, MyString s2); //equal or not
//operator overloading
MyString operator+(MyString s1, MyString s2){
	MyString str(strcat(s1.getString(),s2.getString()));
	return str;
	
}
MyString operator+=(MyString& s1, MyString s2){
	return s1=s1+s2;
	
}


bool operator==(MyString s1, MyString s2){
	
	if(strcmp(s1.getString(),s2.getString())==0)
		return true;
	else return false;

}

istream& operator>>(istream &is, MyString &s){
	char temp[MAX];
	is>>temp;
	s.setString(temp);
	s.setLength(strlen(temp));
	return is;
	
}
bool operator!=(MyString s1, MyString s2){
		if(strcmp(s1.getString(),s2.getString())!=0)
		return true;
	else return false;
}

bool operator>(MyString s1, MyString s2){
		if(strcmp(s1.getString(),s2.getString())>0)
		return true;
	else return false;
}
bool operator<(MyString s1, MyString s2){
		if(strcmp(s1.getString(),s2.getString())<0)
		return true;
	else return false;
}
bool operator<=(MyString s1, MyString s2){
		if(strcmp(s1.getString(),s2.getString())<=0)
		return true;
	else return false;
}
bool operator>=(MyString s1, MyString s2){
		if(strcmp(s1.getString(),s2.getString())>=0)
		return true;
	else return false;
}

ostream& operator<<(ostream &os, MyString s){
	os<<s.getString();
	return os;
}

MyString add2Strings(MyString s1, MyString s2){
	MyString str(strcat(s1.getString(),s2.getString()));
	return str;
	
}
int length(MyString s){
	return	s.getLength();
}
bool compare2Strings(MyString s1, MyString s2){
	return strcmp(s1.getString(),s2.getString());
}
void handleChoice(int vote){
	MyString str1,str2,str3,temp,temp0;
	switch(vote){
		case 1:
			cout<<"Where would you like to store the string (1,2,3)?:";
			cin>>vote;
			switch(vote){
				case 1:
					cout<<"Enter the string: ";
					cin>>str1;
					break;
				case 2:
					cout<<"Enter the string: ";
					cin>>str2;
					break;
				case 3:
					cout<<"Enter the string: ";
					cin>>str3;
					break;
			}
			break;
		case 2:
			cout<<"Which string would you like to see(1,2,3)?:";
			cin>>vote;
			switch(vote){
				case 1:
					cout<<str1<<" is the string for str1\n";
					break;
				case 2:
					cout<<str2<<" is the string for str2\n";
					break;
				case 3:
					cout<<str3<<" is the string for str3\n";
					break;
			}
			break;
		case 3:
			int voter;
			cout<<"which strings do you want to see if equal?";
			cin>>vote>>voter;
				switch(vote){
					case 1:
						temp=str1;
						break;
					case 2:
						temp=str2;
						break;
					case 3:
						temp=str3;
						break;
				}
				switch(voter){
					case 1:
						temp0=str1;
						break;
					case 2:
						temp0=str2;
						break;
					case 3:
						temp0=str3;
						break;
				}
				if(temp==temp0) cout<<"The two strings are equal\n";
				else cout<<"They are not equal\n";
			break;
		case 4:
			cout<<"which strings do you want to see if unequal?";
			cin>>vote>>voter;
				switch(vote){
					case 1:
						temp=str1;
						break;
					case 2:
						temp=str2;
						break;
					case 3:
						temp=str3;
						break;
				}
				switch(voter){
					case 1:
						temp0=str1;
						break;
					case 2:
						temp0=str2;
						break;
					case 3:
						temp0=str3;
						break;
				}
				if(temp!=temp0) cout<<"The two strings are unequal\n";
				else cout<<"They are equal\n";
			break;
		case 5:
			cout<<"Which strings do you want to see if the first is smaller?";
			cin>>vote>>voter;
				switch(vote){
					case 1:
						temp=str1;
						break;
					case 2:
						temp=str2;
						break;
					case 3:
						temp=str3;
						break;
				}
				switch(voter){
					case 1:
						temp0=str1;
						break;
					case 2:
						temp0=str2;
						break;
					case 3:
						temp0=str3;
						break;
				}
				if(temp<temp0) cout<<"The Second is larger\n";
				else cout<<"This was false. Either the same or the Second is smaller\n";
			break;
		case 6:
			cout<<"Which strings do you want to see if the first is larger?";
			cin>>vote>>voter;
				switch(vote){
					case 1:
						temp=str1;
						break;
					case 2:
						temp=str2;
						break;
					case 3:
						temp=str3;
						break;
				}
				switch(voter){
					case 1:
						temp0=str1;
						break;
					case 2:
						temp0=str2;
						break;
					case 3:
						temp0=str3;
						break;
				}
				if(temp>temp0) cout<<"The First is larger\n";
				else cout<<"This was false. Either the same or the First is smaller\n";
			break;
		case 7: 
			cout<<"Which strings do you want to see if the first is larger or equal?";
			cin>>vote>>voter;
				switch(vote){
					case 1:
						temp=str1;
						break;
					case 2:
						temp=str2;
						break;
					case 3:
						temp=str3;
						break;
				}
				switch(voter){
					case 1:
						temp0=str1;
						break;
					case 2:
						temp0=str2;
						break;
					case 3:
						temp0=str3;
						break;
				}
				if(temp>=temp0) cout<<"The First is larger or equal\n";
				else cout<<"This was false as the First was smaller\n";
			break;
		case 8: 
			cout<<"Which strings do you want to see if the first is smaller or equal?";
			cin>>vote>>voter;
				switch(vote){
					case 1:
						temp=str1;
						break;
					case 2:
						temp=str2;
						break;
					case 3:
						temp=str3;
						break;
				}
				switch(voter){
					case 1:
						temp0=str1;
						break;
					case 2:
						temp0=str2;
						break;
					case 3:
						temp0=str3;
						break;
				}
				if(temp<=temp0) cout<<"The Second is larger or equal\n";
				else cout<<"This was false as the Second was smaller\n";
			break;
		case 9:
			char sym;
			cout<<"Would you like to override the 1st string with the new string or would you like to write it to a temp string? (= for override, + for temp)";
			cin>>sym;
			switch(sym){
				case '=':
					cout<<"What strings do you want to add? Order Matters.\n";
					cin>>vote>>voter;
					switch(voter){
					case 1:
						temp0=str1;
						break;
					case 2:
						temp0=str2;
						break;
					case 3:
						temp0=str3;
						break;
				}
					switch(vote){
					case 1:
						str1+=temp0;
						cout<<str1<<" is the new value for string 1\n";
						break;
					case 2:
						str2+=temp0;
						cout<<str2<<" is the new value for string 2\n";
						break;
					case 3:
						str3+=temp0;
						cout<<str3<<" is the new value for string 3\n";
						break;
					}
				case '+': 
					cout<<"What strings do you want to add? Order Matters.\n";
					cin>>vote>>voter;
					switch(voter){
					case 1:
						temp0=str1;
						break;
					case 2:
						temp0=str2;
						break;
					case 3:
						temp0=str3;
						break;
				}
					switch(vote){
					case 1:
						temp=str1+temp0;
						cout<<temp<<" is the value for the new String\n";
						break;
					case 2:
						temp=str2+temp0;
						cout<<temp<<" is the value for the new String\n";
						break;
					case 3:
						temp=str3+temp0;
						cout<<temp<<" is the value for the new String\n";
						break;
				
					}
				
			}
			
			break;
	}
			
}
int main(){
	MyString st1,st2;
	cout<<"enter two strings to check MyString\n";
	cin>>st1>>st2;
	cout<<st1<<" "<<st2;
	return 0;
}
//First Programming Assignment - Due on Thursday, Feb 4
//HW - Send the progress 
//Overload the following operators 
//!=
//<
//>
//<=
//>=
//+=
/*
Create a showMenu function that displays the following menu
1. Input a string  >>
2. Output a string <<
3. See if 2 strings are equal -> ==
4. See if 2 strings are unequal -> !=
5. See if 1 string is < than second
6. See if 1 string is > than second
7. See if 1 string is >= than second
8. See if 1 string is <= than second
9. Add 2 strings ---> + or +=  depending on what user wants


Create a function named handleChoice to invoke the appropriate function
*/

