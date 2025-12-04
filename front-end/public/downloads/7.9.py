def searcher(file,name):
    index=0
    x=0
    while index<len(file):
        if(file[index].rstrip('\n')==name): x=1
        index+=1
    if (x==1): print(name+ " was found ")
    else: print(name+ ' not found ')
def menu():
    choice="rabbit"
    Bfile=open("BoyNames.txt",'r')
    boys=Bfile.readlines()
    Gfile=open("GirlNames.txt",'r')
    girls=Gfile.readlines()
    Bfile.close()
    Gfile.close()
    both=boys+girls
    while(choice!="no"):
        choice=input("What sex do you want to search through? ( 'boy', 'girl', 'both')\n 'no' to end\n ") 
        if(choice!="no"): name=input("What's the name? ")
        if(choice=='boy'): searcher(boys, name)
        if(choice=='girl'):searcher(girls, name)
        if(choice=='both'):searcher(both, name)
        
menu()
