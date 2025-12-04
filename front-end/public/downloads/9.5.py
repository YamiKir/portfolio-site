def main():
    file=open("file.txt",'r')
    line=file.readline()
    setz=set()
    dic={'':''}
    dic.clear()
    while line!= "":
        setz.add(line.rstrip('\n'))
        line=file.readline()
    for word in setz:
        file.close()
        file=open("file.txt",'r')
        line=file.readline()
        counter=0
        print(word +" is the word")
        while line!="":
            print(line)
            if(str(word)==str(line.rstrip('\n'))): counter+=1
            line=file.readline()
        dic[word]=counter
    print(setz)
    print(dic)
main()
            
            
