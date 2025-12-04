def main():
    t1=float(input("What's the grade?:"))
    t2=float(input("What's the grade?:"))
    t3=float(input("What's the grade?:"))
    t4=float(input("What's the grade?:"))
    t5=float(input("What's the grade?:"))
    x=calc_average(t1,t2,t3,t4,t5)
    print(x, " is the average grade which means you have a ", determine_grade(x))
def calc_average(a1,a2,a3,a4,a5):
    return (a1+a2+a3+a4+a5)/5.0
def determine_grade(y):
    sym="A"
    if(y<=89 and y>=80): sym="B"
    elif(y<=79 and y>=70): sym="C"
    elif(y<=69 and y>=60): sym="D"
    elif(y<60): sym="F"
    return sym
main()
