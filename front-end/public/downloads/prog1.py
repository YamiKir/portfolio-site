#part 1 of prog 1
def falling_distance(time):
    return .5*9.8*time*time

# part 2 of prog 1
def main():
    file=open('distances.txt', 'w')
    for t in range (1,11):
        file.write(str(falling_distance(t))+'\n')
    file.close()
main()
