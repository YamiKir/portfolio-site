import os
def deleteRecord(name):
    file=open('golf.txt', 'r')
    found=False
    tempfile=open('temp.txt','w')
    player=file.readline()
    while player!='':
        score=(file.readline())
        player=player.rstrip('\n')
        if player!=name:
            tempfile.write(str(player)+"\n")
            tempfile.write(str(score))
        else:
            found=True
        player= file.readline()
    file.close()
    os.remove('golf.txt')
    tempfile.close()
    os.rename('temp.txt', 'golf.txt')
        
    if found:
        print('The file has been updated')
    else:
        print("Player was not found")
        
def main():
    try:
        name="rabbit"
        file=open('golf.txt', 'w')
        while(name!="DONE"):
            name=input("INPUT PLAYER'S NAME ('DONE' TO EXIT): ")
            if (name!="DONE"):
                  score=input("PLAYER'S SCORE?: ")
                  file.write(str(name)+"\n")
                  file.write(str(score)+"\n")
        file.close()
        choice=input("Do you want to delete a record? (Y for yes & anything else is no) :")
        if (choice=="Y"):
            nam=str(input("INPUT A NAME: "))
            deleteRecord(nam)
        file.close()
    except IOERROR:
        print("AN IOERROR OCCURED")
        
main()
