import random
def main():
    choice="rocket science"
    while(choice!="poison"):
        x=0
        pc=random.randrange(1,4)
        choice=input("rock, paper, scissors?:")
        if (choice=="rock"): x=1
        elif (choice=="paper"): x=2
        elif (choice=="scissors"): x=3
        else: x=0
        if(pc==1): print("The PC chose ", "rock")
        elif(pc==2): print("The PC chose ", "paper")
        elif(pc==3): print("The PC chose ", "scissors")
      
        who_win(x,pc)
def who_win(x,pc):
    if (x==1 and pc==3):  print("Player Wins!")
    elif (x==3 and pc==2):  print("Player Wins!")
    elif (x==2 and pc==1):  print("Player Wins!")
    elif (pc==1 and x==3):  print("PC Wins!")
    elif (pc==3 and x==2):  print("PC Wins!")
    elif (pc==2 and x==1):  print("PC Wins!")
    else: print("It's a Tie! Try again!")

main()
        
    
