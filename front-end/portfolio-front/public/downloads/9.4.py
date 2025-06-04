def main():
    file=open("file.txt",'r')
    line=file.readline()
    setz=set()
    while line!= "":
        setz.add(line.rstrip('\n'))
        line=file.readline()
        
    print(setz)
   
main()
