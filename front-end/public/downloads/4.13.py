startingNum=int(input("Starting number of organisms:"))
increasePer=float(input("Average daily increase (as %):"))/100
daysNum=int(input("Number of days to multiply:"))
pop=startingNum
print("{:<20} {:<20}".format("Day Approximate","Population"))
for x in range (1,daysNum+1):
    print("{:<20} {:<20.5f}".format(x,pop))
    pop=pop+pop*increasePer
    
for x in range(0,8):
    counter=7-x
    while(counter>0):
        print('*',end='')
        counter-=1
    print('')
        
