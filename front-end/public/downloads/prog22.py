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
main()
