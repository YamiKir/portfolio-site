for x in range(1,7):
    for y in range(0,x+1):
        if( y==0 or y==x): print("#",end='')
        else: print(" ",end='')
    print("\n")
