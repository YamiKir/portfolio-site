#all of 'write' is 6.7
import random
def write():
    loops=int(input("Enter the number of random numbers should be generated: "))  #lets user decide how many numbers are created
    outfile=open('ranNum.txt', 'w')  #opens/creates file
    for x in range (loops):
        outfile.write(str(random.randrange(1,501))+ '\n')  #writes a random num from 1-500 and adds a space
    outfile.close() #after the loop, file closes and saves
    #all of 'read' is 6.8
def read():
    outfile=open('ranNum.txt','r') #opens the file in read
    line=outfile.readline()
    counter=0 #for totals
    print("Here's the values from the file:")
    while line !='': # checks for empty string
        print(line.rstrip('\n')) #prints number
        line=outfile.readline()
        counter+=1 #counts
    print("There were a total of ", counter, " numbers in this file")
    outfile.close()
#here's them together
def main():
    write()
    read()
        
main()
