def read():
    infile=open('charge_accounts.txt','r')
    accounts=infile.readlines()
    infile.close()
    index=0
    x=0
    userValue=float(input("input an account number: "))
    while index <len(accounts):
        if (float(accounts[index])== userValue): x=1
        index+=1
    if(x==1): print("Valid")
    else: print("Not Valid")
read()
        
        
